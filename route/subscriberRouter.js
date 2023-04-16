const express = require("express");
const controller = require("../controller/subscriberController");

const router = express.Router();

router.route("/").get(controller.getAllSubscriber);
router.route("/name").get(controller.getAllSubscriber);
router.route("/:id").get(controller.getSubscriber);

module.exports = router;
