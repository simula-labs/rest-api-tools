/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type PatchCompaniesCompanyIdIntroductionCompletionReportsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type PatchCompaniesCompanyIdIntroductionCompletionReportsIdResponse = Types.IntroductionCompletionReport & {
    account: Types.Account
  } & {
    company: Types.Company
  }

export type PatchCompaniesCompanyIdIntroductionCompletionReportsIdRequestBody = {
  joinedDate: string
  amount: number
  memo: string
  isEnable: boolean
}

export const patchCompaniesCompanyIdIntroductionCompletionReportsId = new BaseRequest<
  PatchCompaniesCompanyIdIntroductionCompletionReportsIdRequestBody,
  PatchCompaniesCompanyIdIntroductionCompletionReportsIdResponse,
  PatchCompaniesCompanyIdIntroductionCompletionReportsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/introduction_completion_reports/:id",
  tokenKey: "AUTH_TOKEN",
});
