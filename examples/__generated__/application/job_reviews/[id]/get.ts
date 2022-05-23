import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type GetJobReviewsIdUrlParams = {
  id: string
} | undefined

export type GetJobReviewsIdResponse = Types.JobReview & {
    skills: Types.Skill[]
  } & {
    job: Types.Job
  }

export const getJobReviewsId = new BaseRequest<
  undefined,
  GetJobReviewsIdResponse,
  GetJobReviewsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/application",
  path: "/job_reviews/:id",
  tokenKey: "AUTH_TOKEN",
});
