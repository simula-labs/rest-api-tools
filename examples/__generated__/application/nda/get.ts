/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../shared/index";

export type GetNdaResponse = Types.Nda

export const getNda = new BaseRequest<
  undefined,
  GetNdaResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/nda",
  tokenKey: "AUTH_TOKEN",
});
