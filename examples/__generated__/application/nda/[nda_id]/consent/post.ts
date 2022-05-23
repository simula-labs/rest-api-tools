import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type PostNdaNdaIdConsentUrlParams = {
  ndaId: string
} | undefined

export type PostNdaNdaIdConsentResponse = Types.ConsentNda

export type PostNdaNdaIdConsentRequestBody = {
  nda: {
    name: string
    address: string
  }
}

export const postNdaNdaIdConsent = new BaseRequest<
  PostNdaNdaIdConsentRequestBody,
  PostNdaNdaIdConsentResponse,
  PostNdaNdaIdConsentUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/application",
  path: "/nda/:nda_id/consent",
  tokenKey: "AUTH_TOKEN",
});
