const Book = require("../models/book.model");
const response = require("../utils/response");

const bookCreateController = async () => {
  try {
    const { name, author } = req.body;

    if (!name || !author) {
      response(res, 400, false, "Please provide all the details", null);
    }

    if (name && author) {
      const newBook = Book({ name, author });
      await newBook.save();
      response(res, 200, true, "new Book Created", newBook);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = bookCreateController;
