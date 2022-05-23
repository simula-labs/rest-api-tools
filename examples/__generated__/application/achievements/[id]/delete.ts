import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

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
  baseURL: "https://api.example.com/application",
  path: "/achievements/:id",
  tokenKey: "AUTH_TOKEN",
});
