import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../@types";

export type GetPrivacyPolicyHistoriesResponse = {
  privacyPolicyHistories: Types.PrivacyPolicyHistory[]
}

export const getPrivacyPolicyHistories = new BaseRequest<
  undefined,
  GetPrivacyPolicyHistoriesResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/privacy_policy_histories",
  tokenKey: "AUTH_TOKEN",
});
