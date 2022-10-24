/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type DeleteCompaniesCompanyIdEmploymentsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export const deleteCompaniesCompanyIdEmploymentsId = new BaseRequest<
  undefined,
  undefined,
  DeleteCompaniesCompanyIdEmploymentsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/companies/:companyId/employments/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
