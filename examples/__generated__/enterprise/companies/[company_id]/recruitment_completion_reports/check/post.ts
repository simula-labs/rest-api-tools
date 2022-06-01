/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type PostCompaniesCompanyIdRecruitmentCompletionReportsCheckUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdRecruitmentCompletionReportsCheckResponse = Types.RecruitmentCompletionReport & {
    company?: Types.Company | undefined
  } & {
    account?: Types.Account | undefined
  }

export type PostCompaniesCompanyIdRecruitmentCompletionReportsCheckRequestBody = {
  recruitmentCompletionReport?: {
    amount: number
    accountId: string
  } | undefined
}

export const postCompaniesCompanyIdRecruitmentCompletionReportsCheck = new BaseRequest<
  PostCompaniesCompanyIdRecruitmentCompletionReportsCheckRequestBody,
  PostCompaniesCompanyIdRecruitmentCompletionReportsCheckResponse,
  PostCompaniesCompanyIdRecruitmentCompletionReportsCheckUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/recruitment_completion_reports/check",
  tokenKey: "AUTH_TOKEN",
});
