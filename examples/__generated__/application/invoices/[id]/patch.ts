/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type PatchInvoicesIdUrlParams = {
  id: string
} | undefined

export type PatchInvoicesIdResponse = Types.Invoice & {
    job: Types.Job & {
      jobOrder?: Types.JobOrder | undefined
    }
  } & {
    invoiceDetailedItems: Types.InvoiceDetailedItem[]
  }

export type PatchInvoicesIdRequestBody = {
  /** 請求日 */
  issuedDate: string
  title: string
  /** 支払期日 */
  deadline: string
  /** 請求書ファイル */
  files: File[]
  /** 備考 */
  note: string
  issuingStatus: 'fixed' | 'draft' | 'withdrawn'
  invoiceDetailedItems: {
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
  }[]
}

export const patchInvoicesId = new BaseRequest<
  PatchInvoicesIdRequestBody,
  PatchInvoicesIdResponse,
  PatchInvoicesIdUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "patch",
  baseURL: API_HOST,
  path: "/invoices/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "formData",
});
