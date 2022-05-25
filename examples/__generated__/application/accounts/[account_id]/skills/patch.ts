import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../@types";

export type PatchAccountsAccountIdSkillsUrlParams = {
  accountId: string
} | undefined

export type PatchAccountsAccountIdSkillsResponse = {
  skills: Types.Skill[]
}

export type PatchAccountsAccountIdSkillsRequestBody = {
  skill: {
    ids: string[]
  }
}

export const patchAccountsAccountIdSkills = new BaseRequest<
  PatchAccountsAccountIdSkillsRequestBody,
  PatchAccountsAccountIdSkillsResponse,
  PatchAccountsAccountIdSkillsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://a pi.example.com/public",
  path: "/accounts/:account_id/skills",
  tokenKey: "AUTH_TOKEN",
});
