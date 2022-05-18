import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type PostPrivacyPolicyHistoriesResponse = Types.PrivacyPolicyHistory
export type PostPrivacyPolicyHistoriesRequestBody = {
  privacy_policy_history: {
    content: string
    version: string
  }
}
export const PostPrivacyPolicyHistories = new BaseRequest<>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/admin",
  path: "/privacy_policy_histories",
});