import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type PostCompaniesCompanyIdSearchConditionsUrlParams = {
  id: string
} | undefined

export type PostCompaniesCompanyIdSearchConditionsResponse = Types.SearchCondition & {
    account: Types.Account
  } & {
    company: Types.Company
  }

export type PostCompaniesCompanyIdSearchConditionsRequestBody =   /** filtersは部分的な更新ができないため、更新でも必ずすべてのフィルターを送る */
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

export const postCompaniesCompanyIdSearchConditions = new BaseRequest<
  PostCompaniesCompanyIdSearchConditionsRequestBody,
  PostCompaniesCompanyIdSearchConditionsResponse,
  PostCompaniesCompanyIdSearchConditionsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/application",
  path: "/search_conditions/:id",
  tokenKey: "AUTH_TOKEN",
});
