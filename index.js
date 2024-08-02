const express = require("express");
const connect = require("./db/connection");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const registerRoute = require("./routes/user.route");
dotenv.config({ path: "./.env" });
connect();

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser);
const PORT = process.env.PORT || 6600;

// routes...
app.use(process.env.BASE_URL, registerRoute);
app.use(process.env.BASE_URL, loginRoute);

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
