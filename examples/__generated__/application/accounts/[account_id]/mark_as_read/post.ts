/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PostAccountsAccountIdMarkAsReadUrlParams = {
  accountId: string
} | undefined

export const postAccountsAccountIdMarkAsRead = new BaseRequest<
  undefined,
  undefined,
  PostAccountsAccountIdMarkAsReadUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://a pi.example.com/public",
  path: "/accounts/:accountId/mark_as_read",
  tokenKey: "AUTH_TOKEN",
});
