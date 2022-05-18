import BaseRequest from "../../../baseRequest";
import type * as Types from "../../../@types";

export type GetAccountsAccountIdAchievementsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdAchievementsResponse = {
  achievements: Types.Achievement[]
}

export const GetAccountsAccountIdAchievements = new BaseRequest<
  undefined,
  GetAccountsAccountIdAchievementsResponse,
  GetAccountsAccountIdAchievementsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/accounts/:account_id/achievements",
});
