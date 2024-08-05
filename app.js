// app.js
const mongoose = require("mongoose");
require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");
const { recipesRouter } = require("./routes/recipes.routes");
const { ingredientsRouter } = require("./routes/ingredients.routes");
const setupDirectories = require("./services/directorySetup");
const logger = require("morgan");
const path = require("path");
const swagger = require("./config/swagger");

app.get("/", (req, res) => {
  res.send("server for the project is running");
});

const PORT = process.env.PORT || 3000;

const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use(logger(formatsLogger));

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type, Authorization",
};

app.use(cors(corsOptions));
app.use(express.json());
require("./config/passport");
app.use(express.static(path.join(__dirname, "public")));
app.use("/api/v1/users", authRoutes);
app.use("/recipes", recipesRouter);
app.use("/ingredients", ingredientsRouter);

swagger(app);

app.use((req, res) => {
  res.status(404).json({ message: `Not found - ${req.path}` });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
});

const connection = mongoose.connect(process.env.MONGO_URI, {});

connection
  .then(async () => {
    console.log("Database connection successful");
    await setupDirectories();
    app.listen(PORT, async () => {
      console.log(`App listens on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Error while establishing connection ${error}`);
    process.exit(1);
  });
