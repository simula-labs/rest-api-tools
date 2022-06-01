/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetCompaniesCompanyIdScoutTemplatesUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdScoutTemplatesResponse = {
  scoutTemplates: (Types.ScoutTemplate & {
    company?: Types.Company | undefined
  } & {
    account?: Types.Account | undefined
  })[]
  totalDataNums: number
}

export type GetCompaniesCompanyIdScoutTemplatesQueryParams = {
  /** 自分or自分以外 */
  scope?: 'only_mine' | 'except_mine' | undefined
  /** お気に入り登録 */
  isInterested?: boolean | undefined
}

export const getCompaniesCompanyIdScoutTemplates = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdScoutTemplatesResponse,
  GetCompaniesCompanyIdScoutTemplatesUrlParams,
  GetCompaniesCompanyIdScoutTemplatesQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/scout_templates",
  tokenKey: "AUTH_TOKEN",
});
