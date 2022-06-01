/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type DeleteCompaniesCompanyIdJobReviewsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export const deleteCompaniesCompanyIdJobReviewsId = new BaseRequest<
  undefined,
  undefined,
  DeleteCompaniesCompanyIdJobReviewsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/job_reviews/:id",
  tokenKey: "AUTH_TOKEN",
});
