const mongoose = require("mongoose");

const connect = async () => {
  try {
    const result = await mongoose.connect(process.env.MONGO_URI);

    if (result) {
      console.log("Connected");
    }
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connect;
