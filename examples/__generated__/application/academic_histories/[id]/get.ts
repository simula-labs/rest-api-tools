/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type GetAcademicHistoriesIdUrlParams = {
  id: string
} | undefined

export type GetAcademicHistoriesIdResponse = Types.AcademicHistory

export const getAcademicHistoriesId = new BaseRequest<
  undefined,
  GetAcademicHistoriesIdResponse,
  GetAcademicHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/academic_histories/:id",
  tokenKey: "AUTH_TOKEN",
});
