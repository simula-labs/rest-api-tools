/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

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
  requiredAuth: false,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/job_reviews/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
