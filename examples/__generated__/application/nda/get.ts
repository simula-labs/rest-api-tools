import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type GetNdaResponse = Types.Nda

export const getNda = new BaseRequest<
  undefined,
  GetNdaResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/nda",
  tokenKey: "AUTH_TOKEN",
});
