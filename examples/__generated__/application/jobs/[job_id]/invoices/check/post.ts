/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type PostJobsJobIdInvoicesCheckUrlParams = {
  jobId: string
} | undefined

export type PostJobsJobIdInvoicesCheckResponse = Types.Invoice & {
    job: Types.Job & {
      jobOrder: Types.JobOrder
    }
  } & {
    iinvoiceDetailedItems: Types.InvoiceDetailedItem[]
  }

export type PostJobsJobIdInvoicesCheckRequestBody = {
  invoice: {
    invoiceDetailedItems: {
      invoiceDetailedItem: {
        /** 項目名 */
        description: string
        /** 数量 */
        quantity: number
        /** 単位 */
        unitLabel: string
        /** 単価 */
        unitPrice: number
        /** 消費税 */
        taxRatio: number
        /** 金額 */
        amount: number
      }
    }[]
  }
}

export const postJobsJobIdInvoicesCheck = new BaseRequest<
  PostJobsJobIdInvoicesCheckRequestBody,
  PostJobsJobIdInvoicesCheckResponse,
  PostJobsJobIdInvoicesCheckUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/public",
  path: "/jobs/:jobId/invoices/check",
  tokenKey: "AUTH_TOKEN",
});
