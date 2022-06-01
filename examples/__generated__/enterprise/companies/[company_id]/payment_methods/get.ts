/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetCompaniesCompanyIdPaymentMethodsUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdPaymentMethodsResponse = {
  paymentMethods: (Types.PaymentMethod & {
    company?: Types.Company | undefined
  })[]
}

export const getCompaniesCompanyIdPaymentMethods = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdPaymentMethodsResponse,
  GetCompaniesCompanyIdPaymentMethodsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/payment_methods",
  tokenKey: "AUTH_TOKEN",
});
