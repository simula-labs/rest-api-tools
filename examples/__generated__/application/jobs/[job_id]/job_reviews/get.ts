import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../@types";

export type GetJobsJobIdJobReviewsUrlParams = {
  jobId: string
} | undefined

export type GetJobsJobIdJobReviewsResponse = {
  jobReviews: (Types.JobReview & {
    skills: Types.Skill[]
  } & {
    job: Types.Job
  })[]
  totalDataNums: number
}

export const getJobsJobIdJobReviews = new BaseRequest<
  undefined,
  GetJobsJobIdJobReviewsResponse,
  GetJobsJobIdJobReviewsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/jobs/:job_id/job_reviews",
  tokenKey: "AUTH_TOKEN",
});
