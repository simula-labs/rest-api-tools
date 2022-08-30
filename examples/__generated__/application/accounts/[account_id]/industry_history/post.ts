/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostAccountsAccountIdIndustryHistoryUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdIndustryHistoryResponse = Types.IndustryHistory & {
    account: Types.Account
  } & {
    industry: Types.Industry
  }

export type PostAccountsAccountIdIndustryHistoryRequestBody = {
  industryHistory: {
    industryId: string
    yearOfExperience: number
  }
}

export const postAccountsAccountIdIndustryHistory = new BaseRequest<
  PostAccountsAccountIdIndustryHistoryRequestBody,
  PostAccountsAccountIdIndustryHistoryResponse,
  PostAccountsAccountIdIndustryHistoryUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/industry_history",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
