/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

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
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/job_change_completion_reports",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
