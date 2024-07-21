// const express = require("express");
// const { BookingController } = require("../../controllers/index");
// //const { createChannel } = require("../../utils/messageQueue");

// // const channel = await createChannel();
// const bookingController = new BookingController();

// const router = express.Router();

// router.post("/bookings", bookingController.create);
// router.post("/publish", bookingController.sendMessageToQueue);

// module.exports = router;

const express = require("express");
const { BookingController } = require("../../controllers/index");
//const { createChannel } = require("../../utils/messageQueue");

const router = express.Router();
const bookingController = new BookingController();

router.post("/bookings", (req, res) => bookingController.create(req, res));
router.post("/publish", (req, res) =>
  bookingController.sendMessageToQueue(req, res)
);

module.exports = router;
