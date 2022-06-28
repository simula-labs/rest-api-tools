/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PostJobsJobIdInvoicesUrlParams = {
  jobId: string
} | undefined

export type PostJobsJobIdInvoicesResponse = Types.Invoice & {
    job: Types.Job & {
      jobOrder?: Types.JobOrder | undefined
    }
  } & {
    invoiceDetailedItems: Types.InvoiceDetailedItem[]
  }

export type PostJobsJobIdInvoicesRequestBody = {
  invoice: {
    /** 請求日 */
    issuedDate?: string | undefined
    title: string
    /** 支払期日 */
    deadline?: string | undefined
    /** 請求書ファイル */
    files?: File[] | undefined
    /** 備考 */
    note?: string | undefined
    issuingStatus?: 'fixed' | 'draft' | 'withdrawn' | undefined
    invoiceDetailedItems?: {
      invoiceDetailedItem?: {
        /** 項目名 */
        description?: string | undefined
        /** 数量 */
        quantity?: number | undefined
        /** 単位 */
        unitLabel?: string | undefined
        /** 単価 */
        unitPrice?: number | undefined
        /** 消費税 */
        taxRatio?: number | undefined
        /** 金額 */
        amount?: number | undefined
      } | undefined
    }[] | undefined
  }
}

export const postJobsJobIdInvoices = new BaseRequest<
  PostJobsJobIdInvoicesRequestBody,
  PostJobsJobIdInvoicesResponse,
  PostJobsJobIdInvoicesUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "post",
  baseURL: "https://api.example.com/public",
  path: "/jobs/:jobId/invoices",
  tokenKey: "AUTH_TOKEN",
  contentType: "formData",
});
