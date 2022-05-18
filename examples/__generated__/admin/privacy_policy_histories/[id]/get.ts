import BaseRequest from "../../baseRequest";
import type * as Types from "./@types";
export type GetPrivacyPolicyHistoriesIdUrlParams =
  | {
      id: string;
    }
  | undefined;
export type GetPrivacyPolicyHistoriesIdResponse = Types.PrivacyPolicyHistory;
export const GetPrivacyPolicyHistories = new BaseRequest<>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/privacy_policy_histories/:id",
});
