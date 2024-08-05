const router = require("express").Router();
const bookCreateController = require("../controllers/book.controller");

const bookCreateRoute = router.post("/create-book", bookCreateController);
module.exports = bookCreateRoute;
