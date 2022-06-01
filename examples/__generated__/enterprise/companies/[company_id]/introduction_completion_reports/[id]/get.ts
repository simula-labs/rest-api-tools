/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type GetCompaniesCompanyIdIntroductionCompletionReportsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdIntroductionCompletionReportsIdResponse = Types.IntroductionCompletionReport & {
    account: Types.Account
  } & {
    company: Types.Company
  }

export const getCompaniesCompanyIdIntroductionCompletionReportsId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdIntroductionCompletionReportsIdResponse,
  GetCompaniesCompanyIdIntroductionCompletionReportsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/introduction_completion_reports/:id",
  tokenKey: "AUTH_TOKEN",
});
