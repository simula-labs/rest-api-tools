/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetCompaniesCompanyIdSearchConditionsIdUrlParams = {
  id: string
} | undefined

export type GetCompaniesCompanyIdSearchConditionsIdResponse = Types.SearchCondition & {
    account: Types.Account
  } & {
    company: Types.Company
  }

export const getCompaniesCompanyIdSearchConditionsId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdSearchConditionsIdResponse,
  GetCompaniesCompanyIdSearchConditionsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "companies/:companyId/search_conditions/:id",
  tokenKey: "AUTH_TOKEN",
});
