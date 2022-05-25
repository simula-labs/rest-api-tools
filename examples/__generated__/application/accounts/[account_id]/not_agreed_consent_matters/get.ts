import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../@types";

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
  baseURL: "https://a pi.example.com/public",
  path: "/accounts/:account_id/not_agreed_consent_matters",
  tokenKey: "AUTH_TOKEN",
});
