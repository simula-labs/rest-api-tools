import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

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
  baseURL: "https://api.example.com/application",
  path: "/accounts/:account_id/mark_as_read",
  tokenKey: "AUTH_TOKEN",
});
