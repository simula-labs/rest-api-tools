/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

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
  requiredAuth: false,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/applicants",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
