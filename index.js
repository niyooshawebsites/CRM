const express = require("express");
const connect = require("./db/connection");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
connect();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 6600;

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
