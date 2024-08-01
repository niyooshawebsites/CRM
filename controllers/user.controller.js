const User = require("../models/user.model");
const response = require("../utils/response");

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
      return response(res, 500, false, "User already exists", null);
    }

    // if user not found......
    if (!user) {
      const newUser = User({ username, email, password });
      await newUser.save();
      return response(res, 200, true, "Registraion successful", user);
    }
  }
};

module.exports = registerUserController;
