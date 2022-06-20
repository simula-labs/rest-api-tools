/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetAccountsAccountIdApplicantsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdApplicantsResponse = {
  applicants: (Types.Applicant & {
    recruitment?: Types.Recruitment & {
      company?: Types.Company & {
        industries?: Types.Industry[] | undefined
      } | undefined
    } & {
      workplace?: Types.State | undefined
    } & {
      employmentStatus?: Types.EmploymentStatus | undefined
    } & {
      occupations?: Types.Occupation[] | undefined
    } & {
      industries?: Types.Industry[] | undefined
    } | undefined
  })[]
  totalDataNums: number
}

export type GetAccountsAccountIdApplicantsQueryParams = {
  page?: number | undefined
}

export const getAccountsAccountIdApplicants = new BaseRequest<
  undefined,
  GetAccountsAccountIdApplicantsResponse,
  GetAccountsAccountIdApplicantsUrlParams,
  GetAccountsAccountIdApplicantsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/application",
  path: "/accounts/:accountId/applicants",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
