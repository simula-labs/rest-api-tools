/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type PatchCompaniesCompanyIdScoutTemplatesIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type PatchCompaniesCompanyIdScoutTemplatesIdResponse = Types.ScoutTemplate & {
    company?: Types.Company | undefined
  } & {
    account?: Types.Account | undefined
  }

export type PatchCompaniesCompanyIdScoutTemplatesIdRequestBody = {
  scoutTemplate?: {
    name?: string | undefined
    content?: string | undefined
  } | undefined
}

export const patchCompaniesCompanyIdScoutTemplatesId = new BaseRequest<
  PatchCompaniesCompanyIdScoutTemplatesIdRequestBody,
  PatchCompaniesCompanyIdScoutTemplatesIdResponse,
  PatchCompaniesCompanyIdScoutTemplatesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/scout_templates/:id",
  tokenKey: "AUTH_TOKEN",
});
