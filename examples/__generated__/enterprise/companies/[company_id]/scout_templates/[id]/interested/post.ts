/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../../shared/index";

export type PostCompaniesCompanyIdScoutTemplatesScoutTemplateIdInterestedUrlParams = {
  companyId: string
  id: string
} | undefined

export type PostCompaniesCompanyIdScoutTemplatesScoutTemplateIdInterestedResponse = Types.ScoutTemplate & {
    company: Types.Company
  } & {
    account: Types.Account
  }

export const postCompaniesCompanyIdScoutTemplatesScoutTemplateIdInterested = new BaseRequest<
  undefined,
  PostCompaniesCompanyIdScoutTemplatesScoutTemplateIdInterestedResponse,
  PostCompaniesCompanyIdScoutTemplatesScoutTemplateIdInterestedUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/scout_templates/:id/interested",
  tokenKey: "AUTH_TOKEN",
});
