const router = require("express").Router();
const registerUserController = require("../controllers/user.controller");

const registerRoute = router.post("/register", registerUserController);

module.exports = registerRoute;
