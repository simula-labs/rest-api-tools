/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export const postStripeReceive = new BaseRequest<
  undefined,
  undefined,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: API_HOST,
  path: "/stripe/receive",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
