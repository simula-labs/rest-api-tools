import BaseRequest from "../../../baseRequest";
import type * as Types from "../../../@types";

export type GetAccountsAccountIdIndustryHistoriesUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdIndustryHistoriesResponse = {
  industryHistories: Types.IndustryHistory[]
}

export const GetAccountsAccountIdIndustryHistories = new BaseRequest<
  undefined,
  GetAccountsAccountIdIndustryHistoriesResponse,
  GetAccountsAccountIdIndustryHistoriesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/accounts/:account_id/industry_histories",
});
