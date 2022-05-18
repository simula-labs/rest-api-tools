import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type GetConsentMattersResponse = {
  consent_matters: Types.ConsentMatter[]
}
export const GetConsentMatters = new BaseRequest<>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/consent_matters",
});