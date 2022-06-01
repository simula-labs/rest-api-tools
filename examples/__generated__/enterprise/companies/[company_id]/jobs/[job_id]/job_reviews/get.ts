/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../../shared/index";

export type GetCompaniesCompanyIdWorksWorkIdContractReviewsUrlParams = {
  companyId: string
  jobId: string
} | undefined

export type GetCompaniesCompanyIdWorksWorkIdContractReviewsResponse = {
  jobReviews: (Types.JobReview & {
    skills?: Types.Skill[] | undefined
  } & {
    job?: Types.Job | undefined
  })[]
  totalDataNums: number
}

export const getCompaniesCompanyIdWorksWorkIdContractReviews = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdWorksWorkIdContractReviewsResponse,
  GetCompaniesCompanyIdWorksWorkIdContractReviewsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/jobs/:jobId/job_reviews",
  tokenKey: "AUTH_TOKEN",
});
