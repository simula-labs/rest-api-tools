import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type DeleteAcademicHistoriesIdUrlParams = {
  id: string
} | undefined

export const deleteAcademicHistoriesId = new BaseRequest<
  undefined,
  undefined,
  DeleteAcademicHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/application",
  path: "/academic_histories/:id",
  tokenKey: "AUTH_TOKEN",
});