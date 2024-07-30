const User = require("../models/user.model");
const response = require("../utils/response");

const registerUserController = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !password || !email) {
    return response(res, 400, false, "Please provide all the details", null);
  }

  if (username && password && email) {
    const user = User({ username, email, password });
    await user.save();
    return response(res, 200, true, "Registraion successful", user);
  }
};

module.exports = registerUserController;
