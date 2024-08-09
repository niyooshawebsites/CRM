const router = require("express").Router();
const {
  registerUserController,
  loginController,
} = require("../controllers/user.controller");

const registerRoute = router.post("/register", registerUserController);
const loginRoute = router.post("/login", loginController);

module.exports = { registerRoute, loginRoute };
