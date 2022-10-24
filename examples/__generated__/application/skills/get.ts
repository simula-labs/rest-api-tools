/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetSkillsResponse = Types.SkillsRes

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
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/skills",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
