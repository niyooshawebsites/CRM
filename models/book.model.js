const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide the author name"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);
