/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostAccountsAccountIdCompletionReportsUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdCompletionReportsResponse = Types.JobChangeCompletionReport & {
    account: Types.Account
  } & {
    company: Types.Company
  }

export type PostAccountsAccountIdCompletionReportsRequestBody = {
  jobChangeCompletionReport: {
    amount: number
    companyId: string
  }
}

export const postAccountsAccountIdCompletionReports = new BaseRequest<
  PostAccountsAccountIdCompletionReportsRequestBody,
  PostAccountsAccountIdCompletionReportsResponse,
  PostAccountsAccountIdCompletionReportsUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/job_change_completion_reports",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
