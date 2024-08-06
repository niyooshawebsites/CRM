const router = require("express").Router();
const {
  bookCreateController,
  fetchBooksController,
} = require("../controllers/book.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const bookCreateRoute = router.post(
  "/create-book",
  authMiddleware,
  bookCreateController
);

const fetchBookRoute = router.get("/books", fetchBooksController);
module.exports = { bookCreateRoute, fetchBookRoute };
