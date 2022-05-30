/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

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
  baseURL: "https://api.example.com/public",
  path: "/not_agreed_consent_matters/:id",
  tokenKey: "AUTH_TOKEN",
});
