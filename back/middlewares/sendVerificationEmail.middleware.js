const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const sendVerificationEmailMiddleware = async (email) => {
  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

module.exports = sendVerificationEmailMiddleware;
