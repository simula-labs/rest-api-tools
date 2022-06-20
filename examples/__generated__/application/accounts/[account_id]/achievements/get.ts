/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetAccountsAccountIdAchievementsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdAchievementsResponse = {
  achievements: Types.Achievement[]
  totalDataNums: number
}

export const getAccountsAccountIdAchievements = new BaseRequest<
  undefined,
  GetAccountsAccountIdAchievementsResponse,
  GetAccountsAccountIdAchievementsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/application",
  path: "/accounts/:accountId/achievements",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
