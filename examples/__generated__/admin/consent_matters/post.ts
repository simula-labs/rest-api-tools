import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type PostConsentMattersResponse = Types.ConsentMatter
export type PostConsentMattersRequestBody = {
  consent_matter: {
    content: string
  }
}
export const PostConsentMatters = new BaseRequest<>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/admin",
  path: "/consent_matters",
});