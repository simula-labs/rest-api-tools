/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type PostAccountsAccountIdProfileSpecialtyCompanyTypesUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdProfileSpecialtyCompanyTypesResponse = Types.SpecialtyCompanyType

export const postAccountsAccountIdProfileSpecialtyCompanyTypes = new BaseRequest<
  undefined,
  PostAccountsAccountIdProfileSpecialtyCompanyTypesResponse,
  PostAccountsAccountIdProfileSpecialtyCompanyTypesUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/profile/specialty_company_types",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
