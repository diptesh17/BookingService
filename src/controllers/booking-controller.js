// const { StatusCodes } = require("http-status-codes");

// const { BookingService } = require("../services/index");

// const bookingService = new BookingService();

// const create = async (req, res) => {
//   try {
//     const response = await bookingService.createBooking(req.body);
//     return res.status(StatusCodes.OK).json({
//       message: "Successfully completed booking",
//       success: true,
//       err: {},
//       data: response,
//     });
//   } catch (error) {
//     // return res.status(error.statusCode).json({
//     //   message: error.message,
//     //   success: false,
//     //   err: error.explanation,
//     //   data: {},
//     // });
//     console.log("Error in controller : ", error);
//   }
// };

// module.exports = {
//   create,
// };

// const { StatusCodes } = require('http-status-codes');

// const { BookingService } = require('../services/index');

// const bookingService = new BookingService();

// const create = async (req, res) => {
//     try {
//         const response = await bookingService.createBooking(req.body);
//         console.log("FROM BOOKING CONTROLLER", response);
//         return res.status(StatusCodes.OK).json({
//             message: 'Successfully completed booking',
//             success: true,
//             err: {},
//             data: response
//         })
//     } catch (error) {
//         return res.status(error.statusCode).json({
//             message: error.message,
//             success: false,
//             err: error.explanation,
//             data: {}
//         });
//     }
// }

// module.exports = {
//     create
// }

// const { StatusCodes } = require("http-status-codes");
// const { BookingService } = require("../services/index");

// const bookingService = new BookingService();

// const create = async (req, res) => {
//   try {
//     const response = await bookingService.createBooking(req.body);
//     return res.status(StatusCodes.OK).json({
//       message: "Successfully completed booking",
//       success: true,
//       err: {},
//       data: response,
//     });
//   } catch (error) {
//     const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
//     return res.status(statusCode).json({
//       message: error.message,
//       success: false,
//       err: error.explanation || "Internal Server Error",
//       data: {},
//     });
//   }
// };

// module.exports = {
//   create,
// };

// const { StatusCodes } = require("http-status-codes");
// const { BookingService } = require("../services/index");
// const { createChannel, publishMessage } = require("../../utils/messageQueue");
// const { REMINDER_BINDING_KEY } = require("../config/server");

// const bookingService = new BookingService();

// class BookingController {
//   constructor() {}
//   async sendMessageToQueue(req, res) {
//     const channel = await createChannel();
//     const data = { message: "Success" };
//     publishMessage(channel, REMINDER_BINDING_KEY, JSON.stringify(data));

//     return res.status(200).json({
//       message: "Successfully Published the event",
//     });
//   }
//   async create(req, res) {
//     try {
//       console.log("Request body:", req.body);
//       const response = await bookingService.createBooking(req.body);
//       console.log("Response from BookingService:", response);
//       return res.status(StatusCodes.OK).json({
//         message: "Successfully completed booking",
//         success: true,
//         err: {},
//         data: response,
//       });
//     } catch (error) {
//       const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
//       console.error("Error in booking controller:", error);
//       return res.status(statusCode).json({
//         message: error.message,
//         success: false,
//         err: error.explanation || "Internal Server Error",
//         data: {},
//       });
//     }
//   }
// }

// module.exports = BookingController;

const { StatusCodes } = require("http-status-codes");
const { BookingService } = require("../services/index");
// const { createChannel, publishMessage } = require("../../utils/messageQueue");
const { createChannel, publishMessage } = require("../utils/messageQueue");
const { REMINDER_BINDING_KEY } = require("../config/server");

const bookingService = new BookingService();

class BookingController {
  constructor() {}

  async sendMessageToQueue(req, res) {
    try {
      const channel = await createChannel();
      const data = { message: "Success" };
      publishMessage(channel, REMINDER_BINDING_KEY, JSON.stringify(data));

      return res.status(200).json({
        message: "Successfully Published the event",
      });
    } catch (error) {
      console.error("Error in sendMessageToQueue:", error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Failed to publish event",
        error: error.message,
      });
    }
  }

  async create(req, res) {
    try {
      console.log("Request body:", req.body);
      const response = await bookingService.createBooking(req.body);
      console.log("Response from BookingService:", response);
      return res.status(StatusCodes.OK).json({
        message: "Successfully completed booking",
        success: true,
        err: {},
        data: response,
      });
    } catch (error) {
      const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
      console.error("Error in booking controller:", error);
      return res.status(statusCode).json({
        message: error.message,
        success: false,
        err: error.explanation || "Internal Server Error",
        data: {},
      });
    }
  }
}

module.exports = BookingController;
