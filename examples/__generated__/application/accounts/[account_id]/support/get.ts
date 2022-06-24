/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetAccountsAccountIdSupportUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdSupportResponse = Types.Support & {
    account: Types.Account
  }

export const getAccountsAccountIdSupport = new BaseRequest<
  undefined,
  GetAccountsAccountIdSupportResponse,
  GetAccountsAccountIdSupportUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/accounts/:accountId/support",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
