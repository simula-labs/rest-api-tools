/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type DeleteCompaniesCompanyIdKeepingListsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export const deleteCompaniesCompanyIdKeepingListsId = new BaseRequest<
  undefined,
  undefined,
  DeleteCompaniesCompanyIdKeepingListsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/keeping_lists/:id",
  tokenKey: "AUTH_TOKEN",
});
