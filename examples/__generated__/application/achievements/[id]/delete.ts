/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type DeleteAchievementsIdUrlParams = {
  id: string
} | undefined

export const deleteAchievementsId = new BaseRequest<
  undefined,
  undefined,
  DeleteAchievementsIdUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "delete",
  baseURL: "https://api.example.com/public",
  path: "/achievements/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
