import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetJobsJobIdContractsUrlParams = {
  jobId: string
} | undefined

export type GetJobsJobIdContractsResponse = Types.Invoice & {
    job: Types.Job & {
      jobOrder: Types.JobOrder
    }
  } & {
    iinvoiceDetailedItems: Types.InvoiceDetailedItem[]
  }

export const getJobsJobIdContracts = new BaseRequest<
  undefined,
  GetJobsJobIdContractsResponse,
  GetJobsJobIdContractsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/jobs/:jobId/invoices",
  tokenKey: "AUTH_TOKEN",
});
