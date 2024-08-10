const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const sendVerificationEmailMiddleware = async (email) => {
  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: "verifyemail@crm.com",
    to: email,
    subject: "Verify your email",
    text: `Please verify your email by clicking the following link: http://localhost:5173/verify-email?token=${token}`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendVerificationEmailMiddleware;
