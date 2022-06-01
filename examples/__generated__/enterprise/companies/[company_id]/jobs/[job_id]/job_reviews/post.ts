/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../../shared/index";

export type PostCompaniesCompanyIdJobsJobIdJobReviewsUrlParams = {
  companyId: string
  jobId: string
} | undefined

export type PostCompaniesCompanyIdJobsJobIdJobReviewsResponse = Types.JobReview & {
    skills: Types.Skill[]
  } & {
    job: Types.Job
  }

export type PostCompaniesCompanyIdJobsJobIdJobReviewsRequestBody = {
  jobReview: {
    starRating: number
    /** 文字列で渡して、Skill側でfind_or_create_byする */
    skills: string[]
    /** スキルの詳細 */
    skillDescription: string
    /** もっとこうして欲しかった点 */
    improvementPoint: string
  }
}

export const postCompaniesCompanyIdJobsJobIdJobReviews = new BaseRequest<
  PostCompaniesCompanyIdJobsJobIdJobReviewsRequestBody,
  PostCompaniesCompanyIdJobsJobIdJobReviewsResponse,
  PostCompaniesCompanyIdJobsJobIdJobReviewsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/jobs/:jobId/job_reviews",
  tokenKey: "AUTH_TOKEN",
});
