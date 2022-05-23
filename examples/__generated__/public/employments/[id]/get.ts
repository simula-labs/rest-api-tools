import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type GetEmploymentsIdUrlParams = {
  id: string
} | undefined

export type GetEmploymentsIdResponse = Types.Employment

export type GetEmploymentsIdRequestBody = {
  inviteToken: string
}

export const getEmploymentsId = new BaseRequest<
  GetEmploymentsIdRequestBody,
  GetEmploymentsIdResponse,
  GetEmploymentsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/employments/:id",
  tokenKey: "AUTH_TOKEN",
});
