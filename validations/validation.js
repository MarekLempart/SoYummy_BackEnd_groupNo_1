// validations/validation.js

const Joi = require("joi");

const nameValidation = Joi.string().min(6).max(64).required();
const emailValidation = Joi.string().email().min(6).max(64).required();
const passwordValidation = Joi.string()
  .min(8)
  .max(128)
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)
  .required();

const signupSchema = Joi.object({
  name: nameValidation,
  email: emailValidation,
  password: passwordValidation,
});

const loginSchema = Joi.object({
  email: emailValidation,
  password: passwordValidation,
});

const subscriptionSchema = Joi.object({
  subscription: Joi.string().valid("starter", "master cook").required(),
});

const resendEmailSchema = Joi.object({
  email: emailValidation,
});

const sendContactEmailSchema = Joi.object({
  to: Joi.string().email().required(),
  subject: Joi.string().required(),
  name: Joi.string().min(3).max(100).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(7).max(15).required(),
  text: Joi.string().min(10).max(500).required(),
});

const updateNameSchema = Joi.object({
  name: nameValidation,
});

const updateMailSchema = Joi.object({
  email: emailValidation,
});

const updatePasswordSchema = Joi.object({
  password: passwordValidation,
});

module.exports = {
  signupSchema,
  loginSchema,
  subscriptionSchema,
  resendEmailSchema,
  updateNameSchema,
  updateMailSchema,
  updatePasswordSchema,
  sendContactEmailSchema,
};
