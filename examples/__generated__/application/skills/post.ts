import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type PostSkillsResponse = Types.Skill

export type PostSkillsRequestBody = {
  skill: {
    name: string
  }
}

export const postSkills = new BaseRequest<
  PostSkillsRequestBody,
  PostSkillsResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/public",
  path: "/skills",
  tokenKey: "AUTH_TOKEN",
});
