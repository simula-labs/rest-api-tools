import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type GetPrivacyPolicyHistoriesResponse = {
  privacy_policy_histories: Types.PrivacyPolicyHistory[]
}
export const GetPrivacyPolicyHistories = new BaseRequest<>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/privacy_policy_histories",
});