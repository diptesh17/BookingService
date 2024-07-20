// const { BookingRepository } = require("../repository/index");
// const { FLIGHTS_SERVICE_PATH } = require("../config/server");
// const axios = require("axios");
// const { ServiceError } = require("../utils/errors");

// class BookingService {
//   constructor() {
//     this.bookingRepository = new BookingRepository();
//   }

//   async createBooking(data) {
//     try {
//       const flightId = data.flightId;
//       let getFlightRequestURL = `${FLIGHTS_SERVICE_PATH}/api/v1/flights/${flightId}`;
//       const response = await axios.get(getFlightRequestURL);
//       const flightData = response.data.data;
//       let priceOfTheFlight = flightData.price;

//       if (data.noOfSeats > flightData.totalSeats) {
//         throw new ServiceError(
//           "Something went wrong in the booking process",
//           "Insufficient seats in the flight"
//         );
//       }

//       const totalCost = priceOfTheFlight * data.noOfSeats;
//       const bookingPayload = { ...data, totalCost };

//       const booking = await this.bookingRepository.create(bookingPayload);

//       const updateFlightRequestURL = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${booking.flightId}`;
//       await axios.patch(updateFlightRequestURL, {
//         totalSeats: flightData.totalSeats - booking.noOfSeats,
//       });

//       return booking;
//     } catch (error) {
//       if (error.name == "RepositoryError" || error.name == "ValidationError") {
//         throw error;
//       }
//       throw new ServiceError();
//     }
//   }
// }

// module.exports = BookingService;

// const axios = require("axios");

// const { BookingRepository } = require("../repository/index");
// const { FLIGHT_SERVICE_PATH } = require("../config/server");
// const { ServiceError } = require("../utils/errors");

// class BookingService {
//   constructor() {
//     this.bookingRepository = new BookingRepository();
//   }

//   async createBooking(data) {
//     try {
//       const flightId = data.flightId;
//       const getFlightRequestURL = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${flightId}`;
//       const response = await axios.get(getFlightRequestURL);
//       const flightData = response.data.data;
//       let priceOfTheFlight = flightData.price;
//       if (data.noOfSeats > flightData.totalSeats) {
//         throw new ServiceError(
//           "Something went wrong in the booking process",
//           "Insufficient seats in the flight"
//         );
//       }
//       const totalCost = priceOfTheFlight * data.noOfSeats;
//       const bookingPayload = { ...data, totalCost };
//       const booking = await this.bookingRepository.create(bookingPayload);
//       const updateFlightRequestURL = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${booking.flightId}`;
//       console.log(updateFlightRequestURL);
//       await axios.patch(updateFlightRequestURL, {
//         totalSeats: flightData.totalSeats - booking.noOfSeats,
//       });
//       const finalBooking = await this.bookingRepository.update(booking.id, {
//         status: "Booked",
//       });
//       return finalBooking;
//     } catch (error) {
//       console.log(error);
//       if (error.name == "RepositoryError" || error.name == "ValidationError") {
//         throw error;
//       }
//       throw new ServiceError();
//     }
//   }
// }

// module.exports = BookingService;

// const axios = require("axios");
// const { BookingRepository } = require("../repository/index");
// const { FLIGHT_SERVICE_PATH } = require("../config/server");
// const { ServiceError } = require("../utils/errors");

// class BookingService {
//   constructor() {
//     this.bookingRepository = new BookingRepository();
//   }

//   async createBooking(data) {
//     try {
//       const flightId = data.flightId;
//       const getFlightRequestURL = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${flightId}`;
//       const response = await axios.get(getFlightRequestURL);
//       const flightData = response.data.data;

//       if (data.noOfSeats > flightData.totalSeats) {
//         throw new ServiceError(
//           "Something went wrong in the booking process",
//           "Insufficient seats in the flight"
//         );
//       }

//       const totalCost = flightData.price * data.noOfSeats;
//       const bookingPayload = { ...data, totalCost };
//       const booking = await this.bookingRepository.create(bookingPayload);

//       const updateFlightRequestURL = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${booking.flightId}`;
//       await axios.patch(updateFlightRequestURL, {
//         totalSeats: flightData.totalSeats - booking.noOfSeats,
//       });

//       const finalBooking = await this.bookingRepository.update(booking.id, {
//         status: "Booked",
//       });

//       return finalBooking;
//     } catch (error) {
//       console.log(error);
//       if (
//         error.name === "RepositoryError" ||
//         error.name === "ValidationError"
//       ) {
//         throw error;
//       }
//       throw new ServiceError("Service layer error", error.message, 500);
//     }
//   }
// }

// module.exports = BookingService;

// const axios = require("axios");
// const { BookingRepository } = require("../repository/index");
// const { FLIGHT_SERVICE_PATH } = require("../config/server");
// const { ServiceError } = require("../utils/errors");

// class BookingService {
//   constructor() {
//     this.bookingRepository = new BookingRepository();
//   }

//   async createBooking(data) {
//     try {
//       console.log("Booking data received:", data);

//       const flightId = data.flightId;
//       const getFlightRequestURL = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${flightId}`;
//       console.log("Requesting flight data from:", getFlightRequestURL);

//       const response = await axios.get(getFlightRequestURL);
//       const flightData = response.data.data;
//       console.log("Flight data received:", flightData);

//       if (data.noOfSeats > flightData.totalSeats) {
//         throw new ServiceError(
//           "Something went wrong in the booking process",
//           "Insufficient seats in the flight"
//         );
//       }

//       const totalCost = flightData.price * data.noOfSeats;
//       const bookingPayload = { ...data, totalCost };
//       const booking = await this.bookingRepository.create(bookingPayload);
//       console.log("Booking created:", booking);

//       const updateFlightRequestURL = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${booking.flightId}`;
//       console.log("Updating flight data at:", updateFlightRequestURL);

//       await axios.patch(updateFlightRequestURL, {
//         totalSeats: flightData.totalSeats - booking.noOfSeats,
//       });

//       const finalBooking = await this.bookingRepository.update(booking.id, {
//         status: "Booked",
//       });
//       console.log("Final booking:", finalBooking);

//       return finalBooking;
//     } catch (error) {
//       console.error("Error in createBooking:", error);
//       if (
//         error.name === "RepositoryError" ||
//         error.name === "ValidationError"
//       ) {
//         throw error;
//       }
//       throw new ServiceError("Service layer error", error.message, 500);
//     }
//   }
// }

// module.exports = BookingService;

const axios = require("axios");
const { BookingRepository } = require("../repository/index");
const { FLIGHTS_SERVICE_PATH } = require("../config/server");
const { ServiceError } = require("../utils/errors");

class BookingService {
  constructor() {
    this.bookingRepository = new BookingRepository();
    console.log("Flight service path:", FLIGHTS_SERVICE_PATH); // Ensure this logs the correct path
  }

  async createBooking(data) {
    try {
      console.log("Booking data received:", data);

      if (!FLIGHTS_SERVICE_PATH) {
        throw new ServiceError(
          "FLIGHTS_SERVICE_PATH is not defined in the configuration"
        );
      }

      const flightId = data.flightId;
      const getFlightRequestURL = `${FLIGHTS_SERVICE_PATH}/api/v1/flights/${flightId}`;
      console.log("Requesting flight data from:", getFlightRequestURL);

      const response = await axios.get(getFlightRequestURL);
      const flightData = response.data.data;
      console.log("Flight data received:", flightData);

      if (data.noOfSeats > flightData.totalSeats) {
        throw new ServiceError(
          "Something went wrong in the booking process",
          "Insufficient seats in the flight"
        );
      }

      const totalCost = flightData.price * data.noOfSeats;
      const bookingPayload = { ...data, totalCost };
      const booking = await this.bookingRepository.create(bookingPayload);
      console.log("Booking created:", booking);

      const updateFlightRequestURL = `${FLIGHTS_SERVICE_PATH}/api/v1/flights/${booking.flightId}`;
      console.log("Updating flight data at:", updateFlightRequestURL);

      await axios.patch(updateFlightRequestURL, {
        totalSeats: flightData.totalSeats - booking.noOfSeats,
      });

      const finalBooking = await this.bookingRepository.update(booking.id, {
        status: "Booked",
      });
      console.log("Final booking:", finalBooking);

      return finalBooking;
    } catch (error) {
      console.error("Error in createBooking:", error);
      if (
        error.name === "RepositoryError" ||
        error.name === "ValidationError"
      ) {
        throw error;
      }
      throw new ServiceError("Service layer error", error.message, 500);
    }
  }
}

module.exports = BookingService;
