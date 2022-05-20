import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../@types";

export type PostConsentMattersResponse = Types.ConsentMatter

export type PostConsentMattersRequestBody = {
  consentMatter: {
    content: string
  }
}

export const PostConsentMatters = new BaseRequest<
  PostConsentMattersRequestBody,
  PostConsentMattersResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/admin",
  path: "/consent_matters",
  tokenKey: "AUTH_TOKEN",
});
