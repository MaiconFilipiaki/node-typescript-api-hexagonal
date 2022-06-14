export default class ApiError {
  static COUNTRY_BE_MUST_BRASIL = "Country must be Brasil";

  code: number;
  message: string;

  constructor(code: number, message: string) {
    this.code = code;
    this.message = message;
  }

  static badRequest(message: string) {
    return new this(400, message);
  }

  static roleBusiness(message: string) {
    return new this(422, message);
  }

  static internalServerError(message: string) {
    return new this(500, message);
  }
}
