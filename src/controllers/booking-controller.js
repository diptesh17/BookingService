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

const { StatusCodes } = require("http-status-codes");
const { BookingService } = require("../services/index");

const bookingService = new BookingService();

const create = async (req, res) => {
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
};

module.exports = {
  create,
};
