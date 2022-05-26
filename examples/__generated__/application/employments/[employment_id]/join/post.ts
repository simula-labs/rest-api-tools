import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

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
  baseURL: "https://a pi.example.com/public",
  path: "/employments/:employmentId/join",
  tokenKey: "AUTH_TOKEN",
});
