/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetJobsJobIdInvoicesUrlParams = {
  jobId: string
} | undefined

export type GetJobsJobIdInvoicesResponse = {
  invoices: (Types.Invoice & {
    job?: Types.Job & {
      jobOrder?: Types.JobOrder | undefined
    } | undefined
  } & {
    invoiceDetailedItems?: Types.InvoiceDetailedItem[] | undefined
  })[]
  totalDataNums: number
}

export type GetJobsJobIdInvoicesQueryParams = {
  page?: number | undefined
}

export const getJobsJobIdInvoices = new BaseRequest<
  undefined,
  GetJobsJobIdInvoicesResponse,
  GetJobsJobIdInvoicesUrlParams,
  GetJobsJobIdInvoicesQueryParams
>({
  requiredAuth: false,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/jobs/:jobId/invoices",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
