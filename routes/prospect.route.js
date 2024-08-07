const router = require("express").Router();
const prospectController = require("../controllers/prospect.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const createProspectRoute = router.post(
  "/create-prospect",
  authMiddleware,
  prospectController
);

module.exports = createProspectRoute;
