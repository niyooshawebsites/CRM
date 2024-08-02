const router = require("express").Router();
const authMiddleware = require("../middlewares/auth.middleware");
const {
  registerUserController,
  loginController,
} = require("../controllers/user.controller");

const registerRoute = router.post("/register", registerUserController);
const loginRoute = router.post("/login", authMiddleware, loginController);

module.exports = { registerRoute, loginRoute };
