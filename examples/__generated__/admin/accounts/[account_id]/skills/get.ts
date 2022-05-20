import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

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
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/accounts/:account_id/skills",
  tokenKey: "AUTH_TOKEN",
});
