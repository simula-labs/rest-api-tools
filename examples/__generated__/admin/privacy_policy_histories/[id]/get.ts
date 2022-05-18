import BaseRequest from "../../baseRequest";
import type * as Types from "../../@types";

export type GetPrivacyPolicyHistoriesIdUrlParams = {
  id: string
} | undefined

export type GetPrivacyPolicyHistoriesIdResponse = Types.PrivacyPolicyHistory

export const GetPrivacyPolicyHistoriesId = new BaseRequest<
  undefined,
  GetPrivacyPolicyHistoriesIdResponse,
  GetPrivacyPolicyHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/privacy_policy_histories/:id",
});
