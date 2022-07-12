/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostEmploymentsEmploymentIdJoinUrlParams = {
  employmentId: string
} | undefined

export type PostEmploymentsEmploymentIdJoinRequestBody = {
  inviteToken: string
}

export const postEmploymentsEmploymentIdJoin = new BaseRequest<
  PostEmploymentsEmploymentIdJoinRequestBody,
  undefined,
  PostEmploymentsEmploymentIdJoinUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "post",
  baseURL: API_HOST,
  path: "/employments/:employmentId/join",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
