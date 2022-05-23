import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../@types";

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
  baseURL: "https://api.example.com/application",
  path: "/policies",
  tokenKey: "AUTH_TOKEN",
});
