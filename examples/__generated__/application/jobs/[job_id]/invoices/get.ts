import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

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
  baseURL: "https://api.example.com/application",
  path: "/jobs/:job_id/invoices",
  tokenKey: "AUTH_TOKEN",
});
