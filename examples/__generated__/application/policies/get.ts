import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../shared/index";

export type GetPoliciesResponse = {
  policies: (Types.Policy & {
    permissions: Types.Permission[]
  })[]
}

export const getPolicies = new BaseRequest<
  undefined,
  GetPoliciesResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/policies",
  tokenKey: "AUTH_TOKEN",
});
