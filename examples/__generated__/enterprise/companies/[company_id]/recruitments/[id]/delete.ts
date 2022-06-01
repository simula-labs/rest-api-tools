/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type DeleteCompaniesCompanyIdRecruitmentsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export const deleteCompaniesCompanyIdRecruitmentsId = new BaseRequest<
  undefined,
  undefined,
  DeleteCompaniesCompanyIdRecruitmentsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/recruitments/:id",
  tokenKey: "AUTH_TOKEN",
});
