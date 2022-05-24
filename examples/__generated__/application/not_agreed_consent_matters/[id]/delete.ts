import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type DeleteNotAgreedConsentMattersIdUrlParams = {
  id: string
} | undefined

export const deleteNotAgreedConsentMattersId = new BaseRequest<
  undefined,
  undefined,
  DeleteNotAgreedConsentMattersIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/application",
  path: "/not_agreed_consent_matters/:id",
  tokenKey: "AUTH_TOKEN",
});