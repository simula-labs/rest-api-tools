import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

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
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/application",
  path: "/accounts/:account_id/job_change_completion_reports",
  tokenKey: "AUTH_TOKEN",
});
