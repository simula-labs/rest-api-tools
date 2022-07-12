/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetNdaResponse = Types.Nda

export const getNda = new BaseRequest<
  undefined,
  GetNdaResponse,
  undefined,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/nda",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
