/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type PostCompaniesCompanyIdIntroductionCompletionReportsCheckUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdIntroductionCompletionReportsCheckResponse = Types.IntroductionCompletionReport & {
    account?: Types.Account | undefined
  } & {
    company?: Types.Company | undefined
  }

export type PostCompaniesCompanyIdIntroductionCompletionReportsCheckRequestBody = {
  introductionCompletionReport?: {
    amount: number
    accountId: string
  } | undefined
}

export const postCompaniesCompanyIdIntroductionCompletionReportsCheck = new BaseRequest<
  PostCompaniesCompanyIdIntroductionCompletionReportsCheckRequestBody,
  PostCompaniesCompanyIdIntroductionCompletionReportsCheckResponse,
  PostCompaniesCompanyIdIntroductionCompletionReportsCheckUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/introduction_completion_reports/check",
  tokenKey: "AUTH_TOKEN",
});
