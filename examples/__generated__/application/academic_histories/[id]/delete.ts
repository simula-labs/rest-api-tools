/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

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
  baseURL: "https://api.example.com/public",
  path: "/academic_histories/:id",
  tokenKey: "AUTH_TOKEN",
});
