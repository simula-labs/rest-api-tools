/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

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
  baseURL: API_HOST,
  path: "/job_reviews/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
