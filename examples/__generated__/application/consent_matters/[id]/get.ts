/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type GetContentMattersIdUrlParams = {
  id: string
} | undefined

export type GetContentMattersIdResponse = Types.ConsentMatter

export const getContentMattersId = new BaseRequest<
  undefined,
  GetContentMattersIdResponse,
  GetContentMattersIdUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/consent_matters/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
