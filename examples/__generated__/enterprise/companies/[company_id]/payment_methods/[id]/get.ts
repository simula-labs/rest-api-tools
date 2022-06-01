/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type GetCompaniesCompanyIdPaymentMethodsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdPaymentMethodsIdResponse = Types.PaymentMethod & {
    company: Types.Company
  }

export const getCompaniesCompanyIdPaymentMethodsId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdPaymentMethodsIdResponse,
  GetCompaniesCompanyIdPaymentMethodsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/payment_methods/:id",
  tokenKey: "AUTH_TOKEN",
});
