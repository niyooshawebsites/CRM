const User = require("../models/user.model");
const response = require("../utils/response");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendVerificationEmailMiddleware = require("../middlewares/sendVerificationEmail.middleware");

const registerUserController = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !password || !email) {
    return response(res, 400, false, "Please provide all the details", null);
  }

  if (username && password && email) {
    // find user by username or email...
    const user = await User.findOne({
      $or: [{ email: email }, { username: username }],
    });

    // if user already exists...
    if (user) {
      return response(res, 409, false, "User already exists", null);
    }

    // if user not found......
    if (!user) {
      const newUser = User({ username, email, password });
      await newUser.save();

      // sending the email to send verification email middleware function
      sendVerificationEmailMiddleware(email);

      return response(res, 200, true, "Registraion successful", newUser);
    }
  }
};

const loginController = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return response(res, 400, false, "Please provide all the details", null);
  }

  try {
    const user = await User.findOne({ email });
    console.log(user);

    // if user not found
    if (!user) {
      return response(res, 500, false, "Invalid username or password", null);
    }

    // if user found
    if (user) {
      const comparePassword = await bcrypt.compare(password, user.password);

      if (!comparePassword) {
        return response(res, 500, false, "Invalid username or password", null);
      }

      if (comparePassword) {
        const token = jwt.sign(
          { username: user.username },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );

        res.cookie("token", token, { httpOnly: true, secure: false });

        return response(res, 200, true, "Login successful", { token });
      }
    }
  } catch (err) {
    console.log(err);
    return response(res, 500, false, "Internal server error", null);
  }
};

module.exports = { registerUserController, loginController };
