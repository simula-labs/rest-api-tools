import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type GetPrivacyPolicyHistoriesLatestResponse = Types.PrivacyPolicyHistory

export const getPrivacyPolicyHistoriesLatest = new BaseRequest<
  undefined,
  GetPrivacyPolicyHistoriesLatestResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/privacy_policy_histories/latest",
  tokenKey: "AUTH_TOKEN",
});
