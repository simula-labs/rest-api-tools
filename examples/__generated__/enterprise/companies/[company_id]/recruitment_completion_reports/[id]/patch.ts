/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type PatchCompaniesCompanyIdRecruitmentCompletionReportsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type PatchCompaniesCompanyIdRecruitmentCompletionReportsIdResponse = Types.RecruitmentCompletionReport & {
    company: Types.Company
  } & {
    account: Types.Account
  }

export type PatchCompaniesCompanyIdRecruitmentCompletionReportsIdRequestBody = {
  joinedDate: string
  amount: number
  memo: string
  isEnable: boolean
}

export const patchCompaniesCompanyIdRecruitmentCompletionReportsId = new BaseRequest<
  PatchCompaniesCompanyIdRecruitmentCompletionReportsIdRequestBody,
  PatchCompaniesCompanyIdRecruitmentCompletionReportsIdResponse,
  PatchCompaniesCompanyIdRecruitmentCompletionReportsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/recruitment_completion_reports/:id",
  tokenKey: "AUTH_TOKEN",
});
