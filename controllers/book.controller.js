const Book = require("../models/book.model");
const response = require("../utils/response");

const bookCreateController = async (req, res) => {
  try {
    const { name, author } = req.body;

    if (!name || !author) {
      return response(res, 400, false, "Please provide all the details", null);
    }

    if (name && author) {
      const newBook = Book({ name, author });
      await newBook.save();
      return response(res, 200, true, "new Book Created", newBook);
    }
  } catch (err) {
    console.log(err);
  }
};

const fetchBooksController = async (req, res) => {
  try {
    const books = await Book.find();

    // if books are found...
    if (books) {
      return response(res, 200, true, "All books fetched", books);
    }

    // if books are not found...
    if (!books) {
      return response(res, 404, false, "No books found", books);
    }
  } catch (err) {
    console.log(err);
    return response(res, 404, false, "No books found", null);
  }
};

module.exports = { bookCreateController, fetchBooksController };
