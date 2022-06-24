/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

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
  baseURL: "https://api.example.com/public",
  path: "/accounts/:accountId/skills",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
