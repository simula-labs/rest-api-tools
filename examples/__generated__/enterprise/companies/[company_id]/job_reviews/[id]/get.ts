/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type GetCompaniesCompanyIdWorkReviewsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdWorkReviewsIdResponse = Types.JobReview & {
    skills?: Types.Skill[] | undefined
  } & {
    job?: Types.Job | undefined
  }

export const getCompaniesCompanyIdWorkReviewsId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdWorkReviewsIdResponse,
  GetCompaniesCompanyIdWorkReviewsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/job_reviews/:id",
  tokenKey: "AUTH_TOKEN",
});
