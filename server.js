const express = require("express");
const connect = require("./db/connection");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const { registerRoute, loginRoute } = require("./routes/user.route");
const {
  createProspectRoute,
  fetchAllProspectsRoute,
  fetchProspectRoute,
  updateProspectRoute,
} = require("./routes/prospect.route");
const { updateLeadRoute, fetchAllLeadsRoute } = require("./routes/lead.route");
const authMiddleware = require("./middlewares/auth.middleware");
dotenv.config({ path: "./.env" });
connect();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const PORT = process.env.PORT || 6600;

// routes...
app.use(process.env.BASE_URL, registerRoute);
app.use(process.env.BASE_URL, authMiddleware, loginRoute);
app.use(process.env.BASE_URL, createProspectRoute);
app.use(process.env.BASE_URL, fetchAllProspectsRoute);
app.use(process.env.BASE_URL, fetchProspectRoute);
app.use(process.env.BASE_URL, updateProspectRoute);
app.use(process.env.BASE_URL, updateLeadRoute);
app.use(process.env.BASE_URL, fetchAllLeadsRoute);

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
