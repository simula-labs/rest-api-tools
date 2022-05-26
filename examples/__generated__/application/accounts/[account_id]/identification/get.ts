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
  requiredAuth: true,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/accounts/:accountId/identification",
  tokenKey: "AUTH_TOKEN",
});
