import BaseRequest from "../baseRequest";
import type * as Types from "../@types";

export type GetConsentMattersResponse = {
  consentMatters: Types.ConsentMatter[]
}

export const GetConsentMatters = new BaseRequest<
  undefined,
  GetConsentMattersResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/consent_matters",
});
