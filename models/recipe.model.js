// models/recipe.model.js

const mongoose = require("mongoose");
const { Schema } = mongoose;

const ingredientSchema = new Schema(
  {
    id: {
      type: Schema.Types.ObjectId,
       ref: 'ingredients',
      required: true,
    },
    measure: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false }
);

const recipesSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 200,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  area: {
    type: String,
    trim: true,
  },
  instructions: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  thumb: {
    type: String,
    trim: true,
  },
  preview: {
    type: String,
    trim: true,
  },
  time: {
    type: Number,
    required: true,
  },
  favorites: {
    type: [Schema.Types.ObjectId],
    default: [],
  },
  favoritesCount: {
    type: Number,
    default: 0,
  },
  youtube: {
    type: String,
    trim: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  owner: {
    type: String,
  },
  ingredients: [ingredientSchema],
});

const Recipes = mongoose.model("recipes", recipesSchema);

module.exports = Recipes;
