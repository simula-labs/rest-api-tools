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
  requiredAuth: true,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/accounts/:accountId/support",
  tokenKey: "AUTH_TOKEN",
});
