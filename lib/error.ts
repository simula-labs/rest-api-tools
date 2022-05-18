export class ClientError extends Error {}

export class NetworkError extends Error {
  status: number;

  constructor(status: number, message?: string) {
    super(message);
    this.name = new.target.name;
    this.status = status;
  }
}