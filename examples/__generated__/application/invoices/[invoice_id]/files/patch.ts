/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PatchInvoicesInvoiceIdFilesUrlParams = {
  invoiceId: string
} | undefined

export type PatchInvoicesInvoiceIdFilesResponse = Types.Invoice & {
    job: Types.Job & {
      jobOrder?: Types.JobOrder | undefined
    }

    invoiceDetailedItems: (Types.InvoiceDetailedItem & {
      consumptionTax?: Types.ConsumptionTax | undefined
    })[]
    invoiceConsumptionTaxPrices: (Types.InvoiceConsumptionTaxPrice & {
      consumptionTax?: Types.ConsumptionTax | undefined
    })[]
    invoiceWithholdingTaxPrice: Types.InvoiceWithholdingTaxPrice
  }

export type PatchInvoicesInvoiceIdFilesRequestBody = {
  files: File[]
}

export const patchInvoicesInvoiceIdFiles = new BaseRequest<
  PatchInvoicesInvoiceIdFilesRequestBody,
  PatchInvoicesInvoiceIdFilesResponse,
  PatchInvoicesInvoiceIdFilesUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "patch",
  baseURL: API_HOST,
  path: "/invoices/:invoiceId/files",
  tokenKey: "AUTH_TOKEN",
  contentType: "formData",
});
