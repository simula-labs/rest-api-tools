/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

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
  baseURL: "https://a pi.example.com/public",
  path: "/accounts/:accountId/job_change_completion_reports",
  tokenKey: "AUTH_TOKEN",
});
