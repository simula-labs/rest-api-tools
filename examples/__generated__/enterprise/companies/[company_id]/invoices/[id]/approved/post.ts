/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../../shared/index";

export type PostCompaniesCompanyIdInvoicesIdApprovedUrlParams = {
  companyId: string
  id: string
} | undefined

export type PostCompaniesCompanyIdInvoicesIdApprovedResponse = Types.Invoice & {
    job: Types.Job & {
      jobOrder?: Types.JobOrder | undefined
    }
  } & {
    invoiceDetailedItems: Types.InvoiceDetailedItem[]
  }

export const postCompaniesCompanyIdInvoicesIdApproved = new BaseRequest<
  undefined,
  PostCompaniesCompanyIdInvoicesIdApprovedResponse,
  PostCompaniesCompanyIdInvoicesIdApprovedUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/invoices/:id/approved",
  tokenKey: "AUTH_TOKEN",
});
