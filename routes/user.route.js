const router = require("express").Router();
const {
  registerUserController,
  loginController,
} = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const registerRoute = router.post("/register", registerUserController);
const loginRoute = router.post("/login", authMiddleware, loginController);

module.exports = { registerRoute, loginRoute };
