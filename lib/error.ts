export class ClientError extends Error {}

export class NetworkError extends Error {
  status: number;
  customErrorCode?: string | number;

  constructor(status: number, message?: string, errorCode?: string | number) {
    super(message);
    this.name = new.target.name;
    this.status = status;
    this.customErrorCode = errorCode;
  }
}
