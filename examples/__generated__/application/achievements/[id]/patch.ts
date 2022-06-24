/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type PatchAchievementsIdUrlParams = {
  id: string
} | undefined

export type PatchAchievementsIdResponse = Types.Achievement

export type PatchAchievementsIdRequestBody = {
  achievement: {
    content?: string | undefined
    createdDate?: string | undefined
    description?: string | undefined
  }
}

export const patchAchievementsId = new BaseRequest<
  PatchAchievementsIdRequestBody,
  PatchAchievementsIdResponse,
  PatchAchievementsIdUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "patch",
  baseURL: "https://api.example.com/public",
  path: "/achievements/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
