// controllers/auth/sendContactEmail.js

const sgMail = require("@sendgrid/mail");
const mjml2html = require("mjml");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendContactEmail = async (req, res) => {
  const { to, subject, name, email, phone, text } = req.body;

  const mjmlTemplate = `
    <mjml>
      <mj-body>
        <mj-section>
          <mj-column>
            <mj-text>
            <h1>${subject}</h1>
              <h2>Name: ${name}</h2>
              <h2>Email: ${email}</h2>
              <h2>Phone: ${phone}</h2>
              <p>Message:${text}</p>
            </mj-text>
          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>
  `;

  const { html } = mjml2html(mjmlTemplate);

  const msg = {
    to,
    from: process.env.SENDGRID_EMAIL,
    subject,
    html,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email" });
  }
};

module.exports = sendContactEmail;
