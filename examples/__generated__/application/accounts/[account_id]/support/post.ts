/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

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
  requiredAuth: false,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/support",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
