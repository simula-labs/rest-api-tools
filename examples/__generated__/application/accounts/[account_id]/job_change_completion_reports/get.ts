import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../@types";

export type GetAccountsAccountIdJobChangeCompletionReportsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdJobChangeCompletionReportsResponse = {
  jobChangeCompletionResports: (Types.JobChangeCompletionReport & {
    account: Types.Account
  } & {
    company: Types.Company
  })[]
}

export const getAccountsAccountIdJobChangeCompletionReports = new BaseRequest<
  undefined,
  GetAccountsAccountIdJobChangeCompletionReportsResponse,
  GetAccountsAccountIdJobChangeCompletionReportsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/accounts/:account_id/job_change_completion_reports",
  tokenKey: "AUTH_TOKEN",
});
