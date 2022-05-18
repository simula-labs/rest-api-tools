import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type GetAccountsAccountIdAchievementsUrlParams = {
  accountId: string
} | undefined
export type GetAccountsAccountIdAchievementsResponse = {
  achievements: Types.Achievement[]
}
export const GetAccounts = new BaseRequest<>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/accounts/:account_id/achievements",
});