const express = require("express");
const controller = require("../controllers/subscriberController");

const router = express.Router();

router.route("/").get(controller.getAllSubscriber);
router.route("/name").get(controller.getAllSubscriber);
router.route("/:id").get(controller.getSubscriber);

module.exports = router;
