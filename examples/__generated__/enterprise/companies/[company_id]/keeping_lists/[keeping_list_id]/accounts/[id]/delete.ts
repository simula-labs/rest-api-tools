/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../../../shared/index";

export type DeleteCompaniesCompanyIdKeepingListsKeepingListIdAccountsIdUrlParams = {
  companyId: string
  keepingListId: string
  id: string
} | undefined

export const deleteCompaniesCompanyIdKeepingListsKeepingListIdAccountsId = new BaseRequest<
  undefined,
  undefined,
  DeleteCompaniesCompanyIdKeepingListsKeepingListIdAccountsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/keeping_lists/:keepingListId/accounts/:id",
  tokenKey: "AUTH_TOKEN",
});
