const router = require("express").Router();
const {
  prospectController,
  fetchAllProspectsController,
  fetchProspectController,
  updateProspectController,
} = require("../controllers/prospect.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const createProspectRoute = router.post(
  "/create-prospect",
  authMiddleware,
  prospectController
);

const fetchAllProspectsRoute = router.get(
  "/fetch-all-prospects",
  authMiddleware,
  fetchAllProspectsController
);

const fetchProspectRoute = router.get(
  "/fetch-prospect/:id",
  authMiddleware,
  fetchProspectController
);

const updateProspectRoute = router.patch(
  "/update-prospect/:id",
  authMiddleware,
  updateProspectController
);

module.exports = {
  createProspectRoute,
  fetchAllProspectsRoute,
  fetchProspectRoute,
  updateProspectRoute,
};
