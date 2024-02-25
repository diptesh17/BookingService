const { StatusCodes } = require("http-status-codes");

class ValidationError extends Error {
  constructor(error) {
    let explanation = [];
    error.errors.forEach((err) => {
      explanation.push(err.message);
    });
    super();

    this.message = "Not able to validate data , send in request ";
    this.name = "ValidationError";
    this.explanation = explanation;
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = ValidationError;
