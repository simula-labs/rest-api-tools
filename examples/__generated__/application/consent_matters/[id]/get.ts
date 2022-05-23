import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

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
  baseURL: "https://api.example.com/application",
  path: "/consent_matters/:id",
  tokenKey: "AUTH_TOKEN",
});
