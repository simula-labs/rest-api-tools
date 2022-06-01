/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetCompaniesCompanyIdPaymentHistoriesUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdPaymentHistoriesResponse = {
  paymentHistories?: (Types.PaymentHistory & {
    company?: Types.Company | undefined
  } & {
    paymentMethod?: Types.PaymentMethod | undefined
  } & {
    price?: Types.Price | undefined
  })[] | undefined
  totalDataNums?: number | undefined
}

export const getCompaniesCompanyIdPaymentHistories = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdPaymentHistoriesResponse,
  GetCompaniesCompanyIdPaymentHistoriesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/payment_histories",
  tokenKey: "AUTH_TOKEN",
});
