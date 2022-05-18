import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type GetAccountsAccountIdIndustryHistoriesUrlParams = {
  accountId: string
} | undefined
export type GetAccountsAccountIdIndustryHistoriesResponse = {
  industry_histories: Types.IndustryHistory[]
}
export const GetAccounts = new BaseRequest<>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/accounts/:account_id/industry_histories",
});