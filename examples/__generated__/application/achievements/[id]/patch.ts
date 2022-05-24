import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type PatchAchievementsIdUrlParams = {
  id: string
} | undefined

export type PatchAchievementsIdResponse = Types.Achievement

export type PatchAchievementsIdRequestBody = {
  achievement: {
    content: string
    createdDate: string
    description: string
  }
}

export const patchAchievementsId = new BaseRequest<
  PatchAchievementsIdRequestBody,
  PatchAchievementsIdResponse,
  PatchAchievementsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/application",
  path: "/achievements/:id",
  tokenKey: "AUTH_TOKEN",
});