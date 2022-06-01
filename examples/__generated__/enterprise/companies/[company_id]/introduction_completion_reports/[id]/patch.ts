/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type PatchCompaniesCompanyIdIntroductionCompletionReportsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type PatchCompaniesCompanyIdIntroductionCompletionReportsIdResponse = Types.IntroductionCompletionReport & {
    account?: Types.Account | undefined
  } & {
    company?: Types.Company | undefined
  }

export type PatchCompaniesCompanyIdIntroductionCompletionReportsIdRequestBody = {
  joinedDate?: string | undefined
  amount?: number | undefined
  memo?: string | undefined
  isEnable?: boolean | undefined
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
