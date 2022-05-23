import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type PostAccountsAccountIdApplicantsUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdApplicantsResponse = Types.Applicant & {
    recruitment: Types.Recruitment
  } & {
    account: Types.Account
  }

export type PostAccountsAccountIdApplicantsRequestBody = {
  applicant: {
    recruitmentId: string
  }
}

export const postAccountsAccountIdApplicants = new BaseRequest<
  PostAccountsAccountIdApplicantsRequestBody,
  PostAccountsAccountIdApplicantsResponse,
  PostAccountsAccountIdApplicantsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/application",
  path: "/accounts/:account_id/applicants",
  tokenKey: "AUTH_TOKEN",
});
