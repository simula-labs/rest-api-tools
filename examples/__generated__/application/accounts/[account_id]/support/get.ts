import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../@types";

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
  baseURL: "https://api.example.com/public",
  path: "/accounts/:account_id/support",
  tokenKey: "AUTH_TOKEN",
});
