import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../@types";

export type PostPrivacyPolicyHistoriesResponse = Types.PrivacyPolicyHistory

export type PostPrivacyPolicyHistoriesRequestBody = {
  privacyPolicyHistory: {
    content: string
    version: string
  }
}

export const PostPrivacyPolicyHistories = new BaseRequest<
  PostPrivacyPolicyHistoriesRequestBody,
  PostPrivacyPolicyHistoriesResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/admin",
  path: "/privacy_policy_histories",
  tokenKey: "AUTH_TOKEN",
});
