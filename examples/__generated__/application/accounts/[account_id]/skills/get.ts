/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetAccountsAccountIdSkillsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdSkillsResponse = {
  skills: Types.Skill[]
}

export const getAccountsAccountIdSkills = new BaseRequest<
  undefined,
  GetAccountsAccountIdSkillsResponse,
  GetAccountsAccountIdSkillsUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/skills",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
