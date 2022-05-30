/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PostAccountsAccountIdSupportUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdSupportResponse = Types.Support & {
    account: Types.Account
  }

export type PostAccountsAccountIdSupportRequestBody = {
  support: {
    project: boolean
    career: boolean
  }
}

export const postAccountsAccountIdSupport = new BaseRequest<
  PostAccountsAccountIdSupportRequestBody,
  PostAccountsAccountIdSupportResponse,
  PostAccountsAccountIdSupportUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/public",
  path: "/accounts/:accountId/support",
  tokenKey: "AUTH_TOKEN",
});
