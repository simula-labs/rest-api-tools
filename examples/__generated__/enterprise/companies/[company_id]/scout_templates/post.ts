/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PostCompaniesCompanyIdScoutTemplatesUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdScoutTemplatesResponse = Types.ScoutTemplate & {
    company?: Types.Company | undefined
  } & {
    account?: Types.Account | undefined
  }

export type PostCompaniesCompanyIdScoutTemplatesRequestBody = {
  scoutTemplate: {
    name: string
    content: string
    accountId: string
  }
}

export const postCompaniesCompanyIdScoutTemplates = new BaseRequest<
  PostCompaniesCompanyIdScoutTemplatesRequestBody,
  PostCompaniesCompanyIdScoutTemplatesResponse,
  PostCompaniesCompanyIdScoutTemplatesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/scout_templates",
  tokenKey: "AUTH_TOKEN",
});
