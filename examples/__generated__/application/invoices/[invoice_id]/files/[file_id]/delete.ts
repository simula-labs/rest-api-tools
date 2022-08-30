/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type DeleteInvoicesInvoiceIdFilesFileIdUrlParams = {
  invoiceId: string
  fileId: string
} | undefined

export type DeleteInvoicesInvoiceIdFilesFileIdResponse = Types.Invoice & {
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

export const deleteInvoicesInvoiceIdFilesFileId = new BaseRequest<
  undefined,
  DeleteInvoicesInvoiceIdFilesFileIdResponse,
  DeleteInvoicesInvoiceIdFilesFileIdUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "delete",
  baseURL: API_HOST,
  path: "/invoices/:invoiceId/files/:fileId",
  tokenKey: "AUTH_TOKEN",
  contentType: "formData",
});
