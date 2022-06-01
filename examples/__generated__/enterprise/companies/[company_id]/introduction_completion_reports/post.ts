/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PostCompaniesCompanyIdIntroductionCompletionReportsUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdIntroductionCompletionReportsResponse = Types.IntroductionCompletionReport & {
    account?: Types.Account | undefined
  } & {
    company?: Types.Company | undefined
  }

export type PostCompaniesCompanyIdIntroductionCompletionReportsRequestBody = {
  introductionCompletionReport?: {
    /** 年収 */
    amount: number
    commissionFeeRatio?: number | undefined
    /** 紹介料（税抜） */
    commissionFeeWithoutTax: number
    /** 紹介料（税） */
    taxForCommissionFee: number
    /** 紹介料（税込） */
    commissionFee: number
    systemFeeRatio: number
    /** 手数料（税抜） */
    systemFeeWithoutTax: number
    /** 手数料（税） */
    taxForSystemFee: number
    /** 手数料（税込） */
    systemFee: number
    accountId: string
    joinedDate?: string | undefined
    memo?: string | undefined
  } | undefined
}

export const postCompaniesCompanyIdIntroductionCompletionReports = new BaseRequest<
  PostCompaniesCompanyIdIntroductionCompletionReportsRequestBody,
  PostCompaniesCompanyIdIntroductionCompletionReportsResponse,
  PostCompaniesCompanyIdIntroductionCompletionReportsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/introduction_completion_reports",
  tokenKey: "AUTH_TOKEN",
});
