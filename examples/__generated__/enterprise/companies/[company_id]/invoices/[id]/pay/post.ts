/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../../shared/index";

export type PostCompaniesCompanyIdInvoicesIdPayUrlParams = {
  companyId: string
  id: string
} | undefined

export type PostCompaniesCompanyIdInvoicesIdPayResponse = {
  requiresAction: boolean
  /** intentのclient_secret */
  paymentIntentClientSecret: string
}

export type PostCompaniesCompanyIdInvoicesIdPayRequestBody = {
  invoice: {
    paymentMethod?: 'bank' | 'credit_card' | undefined
  }
}

export const postCompaniesCompanyIdInvoicesIdPay = new BaseRequest<
  PostCompaniesCompanyIdInvoicesIdPayRequestBody,
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
