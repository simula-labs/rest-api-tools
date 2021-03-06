/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

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
  requiredAuth: false,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/achievements",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
