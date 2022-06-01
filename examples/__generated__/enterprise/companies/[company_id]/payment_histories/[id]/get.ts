/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type GetCompaniesCompanyIdPaymentHistoriesIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdPaymentHistoriesIdResponse = Types.PaymentHistory & {
    company: Types.Company
  } & {
    paymentMethod: Types.PaymentMethod
  } & {
    price: Types.Price
  }

export const getCompaniesCompanyIdPaymentHistoriesId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdPaymentHistoriesIdResponse,
  GetCompaniesCompanyIdPaymentHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/payment_histories/:id",
  tokenKey: "AUTH_TOKEN",
});
