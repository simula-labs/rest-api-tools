import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../@types";

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
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/application",
  path: "/accounts/:account_id/profile/specialty_company_types",
  tokenKey: "AUTH_TOKEN",
});
