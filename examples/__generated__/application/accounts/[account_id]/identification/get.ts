/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetAccountsAccountIdIdentificationUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdIdentificationResponse = {
  identificationUrl: string
}

export const getAccountsAccountIdIdentification = new BaseRequest<
  undefined,
  GetAccountsAccountIdIdentificationResponse,
  GetAccountsAccountIdIdentificationUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/accounts/:accountId/identification",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
