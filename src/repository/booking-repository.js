const { Booking } = require("../models/index.js");
const { StatusCodes } = require("http-status-codes");

const { AppError, ValidationError } = require("../utils/errors/index.js");
class BookingRepository {
  async create(data) {
    try {
      const booking = await Booking.create(data);
      return booking;
    } catch (error) {
      if ((error.name = "SequelizeValidationError")) {
        throw new ValidationError(error);
      }

      throw new AppError(
        "RepositoryError",
        "Cannot create booking",
        "Some issue while creating a booking , try after some time",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
}

module.exports = BookingRepository;
