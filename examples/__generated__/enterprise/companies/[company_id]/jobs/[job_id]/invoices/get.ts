/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../../shared/index";

export type GetCompaniesCompanyIdWorksWorkIdInvoicesUrlParams = {
  companyId: string
  jobId: string
} | undefined

export type GetCompaniesCompanyIdWorksWorkIdInvoicesResponse = {
  invoices: (Types.Invoice & {
    job?: Types.Job & {
      jobOrder?: Types.JobOrder | undefined
    } | undefined
  } & {
    iinvoiceDetailedItems?: Types.InvoiceDetailedItem[] | undefined
  })[]
  totalDataNums: number
}

export type GetCompaniesCompanyIdWorksWorkIdInvoicesQueryParams = {
  page?: number | undefined
}

export const getCompaniesCompanyIdWorksWorkIdInvoices = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdWorksWorkIdInvoicesResponse,
  GetCompaniesCompanyIdWorksWorkIdInvoicesUrlParams,
  GetCompaniesCompanyIdWorksWorkIdInvoicesQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/jobs/:jobId/invoices",
  tokenKey: "AUTH_TOKEN",
});
