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
  requiredAuth: true,
  method: "delete",
  baseURL: "https://a pi.example.com/public",
  path: "/achievements/:id",
  tokenKey: "AUTH_TOKEN",
});
