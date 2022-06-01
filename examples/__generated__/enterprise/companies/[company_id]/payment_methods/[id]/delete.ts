/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type DeleteCompaniesCompanyIdPaymentMethodsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export const deleteCompaniesCompanyIdPaymentMethodsId = new BaseRequest<
  undefined,
  undefined,
  DeleteCompaniesCompanyIdPaymentMethodsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/payment_methods/:id",
  tokenKey: "AUTH_TOKEN",
});
