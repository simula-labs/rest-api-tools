import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../@types";

export type GetAccountsAccountIdApplicantsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdApplicantsResponse = {
  applicants: (Types.Applicant & {
    recruitment: Types.Recruitment & {
      company: Types.Company & {
        industries: Types.Industry[]
      }
    } & {
      workplace: Types.State
    } & {
      employmentStatus: Types.EmploymentStatus
    } & {
      occupations: Types.Occupation[]
    } & {
      industries: Types.Industry[]
    }
  })[]
  totalDataNums: number
}

export const getAccountsAccountIdApplicants = new BaseRequest<
  undefined,
  GetAccountsAccountIdApplicantsResponse,
  GetAccountsAccountIdApplicantsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/accounts/:account_id/applicants",
  tokenKey: "AUTH_TOKEN",
});
