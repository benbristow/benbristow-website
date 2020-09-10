import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as Joi from 'joi';
import * as nodemailer from 'nodemailer';
import mailgunTransport = require("nodemailer-mailgun-transport");
const Grecaptcha = require('grecaptcha');

const formSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .required(),
  email: Joi.string()
    .email()
    .required(),
  message: Joi.string()
    .min(3)
    .required(),
  recaptchaCode: Joi.string()
    .required()
});

const buildError = (error) => ({
  success: false,
  error
});

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  const data = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
    recaptchaCode: req.body.recaptchaCode,
  };

  const validate = formSchema.validate(data);
  if (validate.error) {
    context.res = { status: 400, body: buildError(validate.error.message) };
    return;
  }

  const recaptchaClient = new Grecaptcha(process.env.RECAPTCHA_SECRET_KEY);
  if (!(await recaptchaClient.verify(data.recaptchaCode))) {
    context.res = { status: 400, body: buildError('Invalid Recaptcha Code') };
    return;
  }

  const mailTransport = nodemailer.createTransport(mailgunTransport({
    auth: {
      api_key: process.env.MAILGUN_KEY,
      domain: 'benbristow.co.uk'
    }
  }));

  await mailTransport.sendMail({
    from: `${data.name} ${data.email}`,
    to: 'ben@bristow.me',
    subject: `Contact form submission from ${data.name}`,
    text: data.message
  });

  context.res = {
    body: {
      success: true,
      error: null
    }
  }
};

export default httpTrigger;