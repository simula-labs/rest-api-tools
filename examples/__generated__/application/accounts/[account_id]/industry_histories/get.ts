/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetAccountsAccountIdIndustryHistoriesUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdIndustryHistoriesResponse = {
  industryHistories: (Types.IndustryHistory & {
    account: Types.Account
    industry: Types.Industry
  })[]
}

export const getAccountsAccountIdIndustryHistories = new BaseRequest<
  undefined,
  GetAccountsAccountIdIndustryHistoriesResponse,
  GetAccountsAccountIdIndustryHistoriesUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/accounts/:accountId/industry_histories",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
