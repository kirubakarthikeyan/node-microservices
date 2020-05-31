import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
  reason = "Not found!";
  statusCode = 404;
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
