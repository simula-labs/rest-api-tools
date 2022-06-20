/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetAccountsAccountIdJobChangeCompletionReportsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdJobChangeCompletionReportsResponse = {
  jobChangeCompletionResports: (Types.JobChangeCompletionReport & {
    account?: Types.Account | undefined
  } & {
    company?: Types.Company | undefined
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
  baseURL: "https://api.example.com/application",
  path: "/accounts/:accountId/job_change_completion_reports",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
