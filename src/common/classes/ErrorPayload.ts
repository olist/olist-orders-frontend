export default class ErrorPayload {
  public type?: string;

  public message?: string;

  constructor(error: { message: string; type: string }) {
    this.type = error.type;
    this.message = error.message;
  }
}
