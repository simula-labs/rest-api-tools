import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

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
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/application",
  path: "/employments/:employment_id/join",
  tokenKey: "AUTH_TOKEN",
});
