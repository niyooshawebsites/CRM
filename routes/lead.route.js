const router = require("express").Router();
const leadController = require("../controllers/lead.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const createLeadRoute = router.patch(
  "/create-lead",
  authMiddleware,
  leadController
);

module.exports = createLeadRoute;
