/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

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
  baseURL: "https://api.example.com/application",
  path: "/accounts/:accountId/skills",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
