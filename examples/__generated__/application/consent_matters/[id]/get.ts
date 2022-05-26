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
  requiredAuth: true,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/consent_matters/:id",
  tokenKey: "AUTH_TOKEN",
});
