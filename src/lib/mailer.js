const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "4cf74c6fdb3b45",
      pass: "f2af6144c7ad06"
    }
  });
