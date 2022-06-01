/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type PatchCompaniesCompanyIdWorkReviewsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type PatchCompaniesCompanyIdWorkReviewsIdResponse = Types.JobReview & {
    skills?: Types.Skill[] | undefined
  } & {
    job?: Types.Job | undefined
  }

export type PatchCompaniesCompanyIdWorkReviewsIdRequestBody = {
  jobReview?: {
    starRating?: number | undefined
    /** 文字列で渡して、Skill側でfind_or_create_byする */
    skills?: string[] | undefined
    /** スキルの詳細 */
    skillDescription?: string | undefined
    /** もっとこうして欲しかった点 */
    improvementPoint?: string | undefined
  } | undefined
}

export const patchCompaniesCompanyIdWorkReviewsId = new BaseRequest<
  PatchCompaniesCompanyIdWorkReviewsIdRequestBody,
  PatchCompaniesCompanyIdWorkReviewsIdResponse,
  PatchCompaniesCompanyIdWorkReviewsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/job_reviews/:id",
  tokenKey: "AUTH_TOKEN",
});
