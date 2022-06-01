/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../../shared/index";

export type DeleteCompaniesCompanyIdScoutTemplatesScoutTemplateIdInterestedUrlParams = {
  companyId: string
  id: string
} | undefined

export type DeleteCompaniesCompanyIdScoutTemplatesScoutTemplateIdInterestedResponse = Types.ScoutTemplate & {
    company: Types.Company
  } & {
    account: Types.Account
  }

export const deleteCompaniesCompanyIdScoutTemplatesScoutTemplateIdInterested = new BaseRequest<
  undefined,
  DeleteCompaniesCompanyIdScoutTemplatesScoutTemplateIdInterestedResponse,
  DeleteCompaniesCompanyIdScoutTemplatesScoutTemplateIdInterestedUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/scout_templates/:id/interested",
  tokenKey: "AUTH_TOKEN",
});
