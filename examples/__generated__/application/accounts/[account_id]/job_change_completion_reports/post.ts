import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

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
  baseURL: "https://a pi.example.com/public",
  path: "/accounts/:account_id/job_change_completion_reports",
  tokenKey: "AUTH_TOKEN",
});
