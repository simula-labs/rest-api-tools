/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetSkillsResponse = {
  skills: Types.Skill[]
}

export type GetSkillsQueryParams = {
  /** 検索キーワード */
  keyword?: string | undefined
}

export const getSkills = new BaseRequest<
  undefined,
  GetSkillsResponse,
  undefined,
  GetSkillsQueryParams
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/skills",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
