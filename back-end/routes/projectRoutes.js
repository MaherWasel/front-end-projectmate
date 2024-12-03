const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const authController = require("../controllers/authController");

router
  .route("/")
  .get(projectController.getAllProjects)
  .post(authController.protect, projectController.createProject);
router.route("/:id").get(projectController.getProject);

router
  .route("/:id/joinRequests")
  .post(authController.protect, projectController.requestToJoin)
  .get(authController.protect, projectController.getJoinRequests)
  .patch(authController.protect, projectController.acceptJoinRequest);

module.exports = router;
