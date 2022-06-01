/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../../../shared/index";

export type PostCompaniesCompanyIdScoutTicketsPayPaymentIntentIdConfirmUrlParams = {
  companyId: string
  paymentIntentId: string
} | undefined

export const postCompaniesCompanyIdScoutTicketsPayPaymentIntentIdConfirm = new BaseRequest<
  undefined,
  undefined,
  PostCompaniesCompanyIdScoutTicketsPayPaymentIntentIdConfirmUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/scout_tickets/pay/:paymentIntentId/confirm",
  tokenKey: "AUTH_TOKEN",
});
