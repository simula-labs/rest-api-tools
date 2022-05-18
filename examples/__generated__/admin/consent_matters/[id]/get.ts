import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type GetConsentMattersIdUrlParams = {
  id: string
} | undefined
export type GetConsentMattersIdResponse = Types.ConsentMatter
export const GetConsentMatters = new BaseRequest<>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/consent_matters/:id",
});