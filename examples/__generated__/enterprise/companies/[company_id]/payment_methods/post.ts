/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PostCompaniesCompanyIdPaymentMethodsUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdPaymentMethodsResponse = Types.PaymentMethod & {
    company?: Types.Company | undefined
  }

export type PostCompaniesCompanyIdPaymentMethodsRequestBody = {
  paymentMethod?: {
    /** Stripeのpayment_method_id */
    stripePmId: string
    isDefault: boolean
  } | undefined
}

export const postCompaniesCompanyIdPaymentMethods = new BaseRequest<
  PostCompaniesCompanyIdPaymentMethodsRequestBody,
  PostCompaniesCompanyIdPaymentMethodsResponse,
  PostCompaniesCompanyIdPaymentMethodsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/payment_methods",
  tokenKey: "AUTH_TOKEN",
});
