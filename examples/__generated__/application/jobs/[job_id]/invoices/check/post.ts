/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type PostJobsJobIdInvoicesCheckUrlParams = {
  jobId: string
} | undefined

export type PostJobsJobIdInvoicesCheckResponse = Types.Invoice & {
    job: Types.Job & {
      jobOrder?: Types.JobOrder | undefined
    }
  } & {
    invoiceDetailedItems: Types.InvoiceDetailedItem[]
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
  requiredAuth: false,
  method: "post",
  baseURL: API_HOST,
  path: "/jobs/:jobId/invoices/check",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
