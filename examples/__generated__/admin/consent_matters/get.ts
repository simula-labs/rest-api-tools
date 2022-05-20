import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../@types";

export type GetConsentMattersResponse = {
  consentMatters: Types.ConsentMatter[]
}

export const getConsentMatters = new BaseRequest<
  undefined,
  GetConsentMattersResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/consent_matters",
  tokenKey: "AUTH_TOKEN",
});
