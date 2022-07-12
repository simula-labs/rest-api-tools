/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostAccountsAccountIdMarkAsReadUrlParams = {
  accountId: string
} | undefined

export const postAccountsAccountIdMarkAsRead = new BaseRequest<
  undefined,
  undefined,
  PostAccountsAccountIdMarkAsReadUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/mark_as_read",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
