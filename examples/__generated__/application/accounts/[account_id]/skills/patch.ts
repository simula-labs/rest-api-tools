/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

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
  requiredAuth: false,
  method: "patch",
  baseURL: API_HOST,
  path: "/accounts/:accountId/skills",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
