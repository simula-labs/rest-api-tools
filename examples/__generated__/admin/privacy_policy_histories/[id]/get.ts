import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type GetPrivacyPolicyHistoriesIdUrlParams = {
  id: string
} | undefined

export type GetPrivacyPolicyHistoriesIdResponse = Types.PrivacyPolicyHistory

export const getPrivacyPolicyHistoriesId = new BaseRequest<
  undefined,
  GetPrivacyPolicyHistoriesIdResponse,
  GetPrivacyPolicyHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/privacy_policy_histories/:id",
  tokenKey: "AUTH_TOKEN",
});
