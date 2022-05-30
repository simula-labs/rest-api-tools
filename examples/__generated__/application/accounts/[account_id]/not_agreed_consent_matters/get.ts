/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetaccountsAccountIdAgreeConsentMattersUrlParams = {
  accountId: string
} | undefined

export type GetaccountsAccountIdAgreeConsentMattersResponse = {
  consentMatters: Types.ConsentMatter[]
}

export const getaccountsAccountIdAgreeConsentMatters = new BaseRequest<
  undefined,
  GetaccountsAccountIdAgreeConsentMattersResponse,
  GetaccountsAccountIdAgreeConsentMattersUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/accounts/:accountId/not_agreed_consent_matters",
  tokenKey: "AUTH_TOKEN",
});
