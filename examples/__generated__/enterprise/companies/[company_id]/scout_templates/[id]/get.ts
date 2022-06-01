/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type GetCompaniesCompanyIdScoutTemplatesIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdScoutTemplatesIdResponse = Types.ScoutTemplate & {
    company?: Types.Company | undefined
  } & {
    account?: Types.Account | undefined
  }

export const getCompaniesCompanyIdScoutTemplatesId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdScoutTemplatesIdResponse,
  GetCompaniesCompanyIdScoutTemplatesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/scout_templates/:id",
  tokenKey: "AUTH_TOKEN",
});
