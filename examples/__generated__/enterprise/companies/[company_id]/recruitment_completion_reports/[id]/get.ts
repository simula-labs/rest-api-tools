/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type GetCompaniesCompanyIdRecruitmentCompletionReportsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdRecruitmentCompletionReportsIdResponse = Types.RecruitmentCompletionReport & {
    company?: Types.Company | undefined
  } & {
    account?: Types.Account | undefined
  }

export const getCompaniesCompanyIdRecruitmentCompletionReportsId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdRecruitmentCompletionReportsIdResponse,
  GetCompaniesCompanyIdRecruitmentCompletionReportsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/recruitment_completion_reports/:id",
  tokenKey: "AUTH_TOKEN",
});
