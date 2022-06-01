/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type GetCompaniesCompanyIdInvoicesIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdInvoicesIdResponse = Types.Invoice & {
    job: Types.Job & {
      jobOrder?: Types.JobOrder | undefined
    }
  } & {
    iinvoiceDetailedItems: Types.InvoiceDetailedItem[]
  }

export const getCompaniesCompanyIdInvoicesId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdInvoicesIdResponse,
  GetCompaniesCompanyIdInvoicesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/invoices/:id",
  tokenKey: "AUTH_TOKEN",
});
