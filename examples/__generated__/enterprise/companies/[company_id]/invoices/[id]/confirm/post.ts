/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../../shared/index";

export type PostCompaniesCompanyIdInvoicesIdConfirmUrlParams = {
  companyId: string
  id: string
} | undefined

export const postCompaniesCompanyIdInvoicesIdConfirm = new BaseRequest<
  undefined,
  undefined,
  PostCompaniesCompanyIdInvoicesIdConfirmUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/invoices/:id/confirm",
  tokenKey: "AUTH_TOKEN",
});
