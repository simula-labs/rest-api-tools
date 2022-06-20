/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../shared/index";

export type PostTechStackResponse = Types.TechStack

export type PostTechStackRequestBody = {
  techStack: {
    category: 'language' | 'framework' | 'infrastructure' | 'design_tool' | 'other'
    name: string
    /** 「public」or「private」 */
    accessibility: 'public' | 'private'
  }
}

export const postTechStack = new BaseRequest<
  PostTechStackRequestBody,
  PostTechStackResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/application",
  path: "/tech_stacks",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
