import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type GetConsentMattersIdUrlParams = {
  id: string
} | undefined

export type GetConsentMattersIdResponse = Types.ConsentMatter

export const getConsentMattersId = new BaseRequest<
  undefined,
  GetConsentMattersIdResponse,
  GetConsentMattersIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/consent_matters/:id",
  tokenKey: "AUTH_TOKEN",
});
