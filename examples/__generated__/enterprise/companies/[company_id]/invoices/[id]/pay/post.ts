/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../../shared/index";

export type PostCompaniesCompanyIdInvoicesIdPayUrlParams = {
  companyId: string
  id: string
} | undefined

export type PostCompaniesCompanyIdInvoicesIdPayResponse = {
  requiresAction?: boolean | undefined
  /** intentのclient_secret */
  paymentIntentClientSecret?: string | undefined
}

export const postCompaniesCompanyIdInvoicesIdPay = new BaseRequest<
  undefined,
  PostCompaniesCompanyIdInvoicesIdPayResponse,
  PostCompaniesCompanyIdInvoicesIdPayUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/invoices/:id/pay",
  tokenKey: "AUTH_TOKEN",
});
