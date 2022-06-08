/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PatchCompaniesCompanyIdSearchConditionsIdUrlParams = {
  id: string
} | undefined

export type PatchCompaniesCompanyIdSearchConditionsIdResponse = Types.SearchCondition & {
    account: Types.Account
  } & {
    company: Types.Company
  }

export type PatchCompaniesCompanyIdSearchConditionsIdRequestBody =   /** filtersは部分的な更新ができないため、更新でも必ずすべてのフィルターを送る */
{
  searchCondition: {
    title?: string | undefined
    target?: 'account' | 'recruitment' | 'company' | undefined
    filters: {
      /** クエリパラメータのキー */
      key: string
    }[]
  }
}

export const patchCompaniesCompanyIdSearchConditionsId = new BaseRequest<
  PatchCompaniesCompanyIdSearchConditionsIdRequestBody,
  PatchCompaniesCompanyIdSearchConditionsIdResponse,
  PatchCompaniesCompanyIdSearchConditionsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/enterprise",
  path: "companies/:companyId/search_conditions/:id",
  tokenKey: "AUTH_TOKEN",
});
