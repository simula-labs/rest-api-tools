import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../@types";

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
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/public",
  path: "/accounts/:account_id/profile/specialty_company_types",
  tokenKey: "AUTH_TOKEN",
});
