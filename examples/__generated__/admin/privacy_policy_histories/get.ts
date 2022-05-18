import BaseRequest from "../baseRequest";
import type * as Types from "../@types";

export type GetPrivacyPolicyHistoriesResponse = {
  privacyPolicyHistories: Types.PrivacyPolicyHistory[]
}

export const GetPrivacyPolicyHistories = new BaseRequest<
  undefined,
  GetPrivacyPolicyHistoriesResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/privacy_policy_histories",
});
