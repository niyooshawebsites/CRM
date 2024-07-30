const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
    lowercase: true,
  },
  state: {
    type: String,
    required: true,
    lowercase: true,
  },
  pincode: {
    type: Number,
    required: true,
    min: 6,
    max: 6,
  },
});

const authorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      immutable: true,
      lowercase: true,
    },
    age: {
      type: Number,
      required: true,
      min: 18,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      maxLength: 100,
      lowercase: true,
    },
    contactNumber: {
      type: Number,
      require: true,
      min: 10,
      max: 12,
      unique: true,
    },
    hobbies: {
      type: [String],
    },
    address: addressSchema,
    isAdmin: true,
    favcolor: {
      type: String,
      require: true,
      lowercase: true,
    },
    favFruit: {
      type: String,
      require: true,
      lowercase: true,
    },
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Author", authorSchema);
