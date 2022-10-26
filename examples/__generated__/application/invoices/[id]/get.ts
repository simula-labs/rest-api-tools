/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetInvoicesIdUrlParams = {
  id: string
} | undefined

export type GetInvoicesIdResponse = Types.InvoiceRes

export const getInvoicesId = new BaseRequest<
  undefined,
  GetInvoicesIdResponse,
  GetInvoicesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/invoices/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
