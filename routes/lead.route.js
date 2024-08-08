const router = require("express").Router();
const {
  updateLeadController,
  fetchAllLeadsController,
} = require("../controllers/lead.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const updateLeadRoute = router.patch(
  "/update-lead/:id",
  authMiddleware,
  updateLeadController
);

const fetchAllLeadsRoute = router.get(
  "/fetch-all-leads",
  authMiddleware,
  fetchAllLeadsController
);

module.exports = { updateLeadRoute, fetchAllLeadsRoute };
