/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

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
  baseURL: API_HOST,
  path: "/accounts/:accountId/industry_histories",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
