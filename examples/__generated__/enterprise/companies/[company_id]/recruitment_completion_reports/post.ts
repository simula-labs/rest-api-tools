/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PostCompaniesCompanyIdRecruitmentCompletionReportsUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdRecruitmentCompletionReportsResponse = Types.RecruitmentCompletionReport & {
    company: Types.Company
  } & {
    account: Types.Account
  }

export type PostCompaniesCompanyIdRecruitmentCompletionReportsRequestBody = {
  recruitmentCompletionReport: {
    amount: number
    systemFeeRatio: number
    /** 手数料（税抜） */
    systemFeeWithoutTax: number
    /** 手数料（税） */
    taxForSystemFee: number
    /** 手数料（税込） */
    systemFee: number
    accountId: string
    memo?: string | undefined
    joinedDate?: string | undefined
  }
}

export const postCompaniesCompanyIdRecruitmentCompletionReports = new BaseRequest<
  PostCompaniesCompanyIdRecruitmentCompletionReportsRequestBody,
  PostCompaniesCompanyIdRecruitmentCompletionReportsResponse,
  PostCompaniesCompanyIdRecruitmentCompletionReportsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/recruitment_completion_reports",
  tokenKey: "AUTH_TOKEN",
});
