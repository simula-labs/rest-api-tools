import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type GetInvoicesIdUrlParams = {
  id: string
} | undefined

export type GetInvoicesIdResponse = Types.Invoice & {
    job: Types.Job & {
      jobOrder: Types.JobOrder
    }
  } & {
    iinvoiceDetailedItems: Types.InvoiceDetailedItem[]
  }

export const getInvoicesId = new BaseRequest<
  undefined,
  GetInvoicesIdResponse,
  GetInvoicesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/application",
  path: "/invoices/:id",
  tokenKey: "AUTH_TOKEN",
});
