/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../shared/index";

export type GetSkillsResponse = {
  skills: Types.Skill[]
}

export type GetSkillsQueryParams = {
  /** 検索キーワード */
  keyword?: string | undefined
} | undefined

export const getSkills = new BaseRequest<
  undefined,
  GetSkillsResponse,
  undefined,
  GetSkillsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/skills",
  tokenKey: "AUTH_TOKEN",
});
