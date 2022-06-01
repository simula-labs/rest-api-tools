/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetCompaniesCompanyIdRecruitmentCompletionReportsUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdRecruitmentCompletionReportsResponse = {
  recruitmentCompletionReports: (Types.RecruitmentCompletionReport & {
    company?: Types.Company | undefined
  } & {
    account?: Types.Account | undefined
  })[]
  totalDataNums: number
}

export const getCompaniesCompanyIdRecruitmentCompletionReports = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdRecruitmentCompletionReportsResponse,
  GetCompaniesCompanyIdRecruitmentCompletionReportsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/recruitment_completion_reports",
  tokenKey: "AUTH_TOKEN",
});
