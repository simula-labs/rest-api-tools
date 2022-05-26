import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PostAccountsAccountIdAchievementsUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdAchievementsResponse = Types.Achievement

export type PostAccountsAccountIdAchievementsRequestBody = {
  achievement: {
    content: string
    createdDate: string
    description?: string | undefined
  }
}

export const postAccountsAccountIdAchievements = new BaseRequest<
  PostAccountsAccountIdAchievementsRequestBody,
  PostAccountsAccountIdAchievementsResponse,
  PostAccountsAccountIdAchievementsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://a pi.example.com/public",
  path: "/accounts/:accountId/achievements",
  tokenKey: "AUTH_TOKEN",
});
