/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PostAccountsAccountIdIndustryHistoriesUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdIndustryHistoriesResponse = Types.IndustryHistory & {
    account: Types.Account
  } & {
    industry: Types.Industry
  }

export type PostAccountsAccountIdIndustryHistoriesRequestBody = {
  industryHistories: {
    industryHistory?: {
      industryId: string
      yearOfExperience: number
    } | undefined
  }[]

  industryHistory: {
    industryId: string
    yearOfExperience: number
  }
}

export const postAccountsAccountIdIndustryHistories = new BaseRequest<
  PostAccountsAccountIdIndustryHistoriesRequestBody,
  PostAccountsAccountIdIndustryHistoriesResponse,
  PostAccountsAccountIdIndustryHistoriesUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "post",
  baseURL: "https://api.example.com/public",
  path: "/accounts/:accountId/industry_histories",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
