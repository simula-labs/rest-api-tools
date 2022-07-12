/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

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
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/applicants",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
