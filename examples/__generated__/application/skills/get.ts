import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../@types";

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
  baseURL: "https://api.example.com/application",
  path: "/skills",
  tokenKey: "AUTH_TOKEN",
});