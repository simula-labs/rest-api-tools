import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type DeleteEmploymentsIdUrlParams = {
  accountId: string
} | undefined

export const deleteEmploymentsId = new BaseRequest<
  undefined,
  undefined,
  DeleteEmploymentsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://a pi.example.com/public",
  path: "/accounts/:accountId/employments",
  tokenKey: "AUTH_TOKEN",
});
