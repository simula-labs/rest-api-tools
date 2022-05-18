import BaseRequest from "../../../baseRequest";
import type * as Types from "../../../@types";

export type GetAccountsAccountIdSkillsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdSkillsResponse = {
  skills: Types.Skill[]
}

export const GetAccountsAccountIdSkills = new BaseRequest<
  undefined,
  GetAccountsAccountIdSkillsResponse,
  GetAccountsAccountIdSkillsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/accounts/:account_id/skills",
});
