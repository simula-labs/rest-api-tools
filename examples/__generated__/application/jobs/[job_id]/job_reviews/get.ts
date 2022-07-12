/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetJobsJobIdJobReviewsUrlParams = {
  jobId: string
} | undefined

export type GetJobsJobIdJobReviewsResponse = {
  jobReviews: (Types.JobReview & {
    skills?: Types.Skill[] | undefined
  } & {
    job?: Types.Job | undefined
  })[]
  totalDataNums: number
}

export type GetJobsJobIdJobReviewsQueryParams = {
  page?: number | undefined
}

export const getJobsJobIdJobReviews = new BaseRequest<
  undefined,
  GetJobsJobIdJobReviewsResponse,
  GetJobsJobIdJobReviewsUrlParams,
  GetJobsJobIdJobReviewsQueryParams
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/jobs/:jobId/job_reviews",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
