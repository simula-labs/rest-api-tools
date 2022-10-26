/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetEmploymentsVerifyEmailRequestBody = {
  token: string
}

export const getEmploymentsVerifyEmail = new BaseRequest<
  GetEmploymentsVerifyEmailRequestBody,
  undefined,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/employments/verify_email",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
