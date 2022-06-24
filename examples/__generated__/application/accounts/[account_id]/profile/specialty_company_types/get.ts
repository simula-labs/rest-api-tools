/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type GetAccountsAccountIdProfileSpecialtyCompanyTypesUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdProfileSpecialtyCompanyTypesResponse = {
  specialtyCompanyTypes: Types.SpecialtyCompanyType[]
}

export const getAccountsAccountIdProfileSpecialtyCompanyTypes = new BaseRequest<
  undefined,
  GetAccountsAccountIdProfileSpecialtyCompanyTypesResponse,
  GetAccountsAccountIdProfileSpecialtyCompanyTypesUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/accounts/:accountId/profile/specialty_company_types",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
