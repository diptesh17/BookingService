const { StatusCodes } = require("http-status-codes");

class AppError extends Error {
  constructor(name, message, explanation, statusCodes) {
    super();
    this.name = name;
    this.message = message;
    this.explanation = explanation;
    this.statusCodes = statusCodes;
  }
}

module.exports = AppError;
