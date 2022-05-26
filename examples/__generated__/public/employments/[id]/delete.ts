import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type DeleteEmploymentsIdUrlParams = {
  id: string
} | undefined

export type DeleteEmploymentsIdRequestBody = {
  inviteToken: string
}

export const deleteEmploymentsId = new BaseRequest<
  DeleteEmploymentsIdRequestBody,
  undefined,
  DeleteEmploymentsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://a pi.example.com/public",
  path: "/employments/:id",
  tokenKey: "AUTH_TOKEN",
});
