/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PostCompaniesCompanyIdSearchConditionsUrlParams = {
  accountId: string
} | undefined

export type PostCompaniesCompanyIdSearchConditionsResponse = Types.SearchCondition & {
    account: Types.Account
  } & {
    company: Types.Company
  }

export type PostCompaniesCompanyIdSearchConditionsRequestBody =   /** filtersは部分的な更新ができないため、更新でも必ずすべてのフィルターを送る */
{
  searchCondition: {
    title: string
    target: 'account' | 'recruitment' | 'company'
    filters: {
      /** クエリパラメータのキー */
      key: string
    }[]
  }
}

export const postCompaniesCompanyIdSearchConditions = new BaseRequest<
  PostCompaniesCompanyIdSearchConditionsRequestBody,
  PostCompaniesCompanyIdSearchConditionsResponse,
  PostCompaniesCompanyIdSearchConditionsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/application",
  path: "/accounts/:accountId/search_conditions",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
