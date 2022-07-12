/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetPoliciesResponse = {
  policies: (Types.Policy & {
    permissions?: Types.Permission[] | undefined
  })[]
}

export const getPolicies = new BaseRequest<
  undefined,
  GetPoliciesResponse,
  undefined,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/policies",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
