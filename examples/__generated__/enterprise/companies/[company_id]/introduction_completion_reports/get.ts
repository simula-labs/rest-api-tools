/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetCompaniesCompanyIdIntroductionCompletionReportsUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdIntroductionCompletionReportsResponse = {
  introductionCompletionReports?: (Types.IntroductionCompletionReport & {
    account?: Types.Account | undefined
  } & {
    company?: Types.Company | undefined
  })[] | undefined
}

export const getCompaniesCompanyIdIntroductionCompletionReports = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdIntroductionCompletionReportsResponse,
  GetCompaniesCompanyIdIntroductionCompletionReportsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/introduction_completion_reports",
  tokenKey: "AUTH_TOKEN",
});
