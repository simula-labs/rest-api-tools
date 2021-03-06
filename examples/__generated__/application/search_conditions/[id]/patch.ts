/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type PatchCompaniesCompanyIdSearchConditionsUrlParams = {
  id: string
} | undefined

export type PatchCompaniesCompanyIdSearchConditionsResponse = Types.SearchCondition & {
    account: Types.Account
  } & {
    company: Types.Company
  }

export type PatchCompaniesCompanyIdSearchConditionsRequestBody =   /** filtersは部分的な更新ができないため、更新でも必ずすべてのフィルターを送る */
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

export const patchCompaniesCompanyIdSearchConditions = new BaseRequest<
  PatchCompaniesCompanyIdSearchConditionsRequestBody,
  PatchCompaniesCompanyIdSearchConditionsResponse,
  PatchCompaniesCompanyIdSearchConditionsUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "patch",
  baseURL: API_HOST,
  path: "/search_conditions/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
