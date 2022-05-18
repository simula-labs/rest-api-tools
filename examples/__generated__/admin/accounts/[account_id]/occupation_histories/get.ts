import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type GetAccountsAccountIdOccupationHistoriesUrlParams = {
  accountId: string
} | undefined
export type GetAccountsAccountIdOccupationHistoriesResponse = {
  occupation_histories: Types.OccupationHistory[]
}
export const GetAccounts = new BaseRequest<>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/accounts/:account_id/occupation_histories",
});