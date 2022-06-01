/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetCompaniesCompanyIdMessagesUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdMessagesResponse = {
  messages?: Types.Message & {
    sender?: Types.Account & {
      profile?: Types.Profile & {
        placeOfResidence?: Types.State[] | undefined
      } & {
        specialtyCompanyTypes?: Types.SpecialtyCompanyType[] | undefined
      } & {
        specialtyPositions?: Types.SpecialtyPosition[] | undefined
      } & {
        occupationMainCategories?: Types.OccupationMainCategory[] | undefined
      } & {
        industryCategories?: Types.IndustryCategory[] | undefined
      } | undefined
    } | undefined
  } & {
    recruitment?: Types.Recruitment & {
      workplace?: Types.State | undefined
    } & {
      author?: Types.Account | undefined
    } & {
      externalService?: Types.ExternalService | undefined
    } & {
      employmentStatuses?: Types.EmploymentStatus[] | undefined
    } & {
      occupations?: Types.Occupation[] | undefined
    } & {
      industries?: Types.Industry[] | undefined
    } & {
      company?: Types.Company | undefined
    } | undefined
  } & {
    room?: Types.Room | undefined
  } | undefined

  totalDataNums?: number | undefined
}

export type GetCompaniesCompanyIdMessagesQueryParams = {
  accountId: string
}

export const getCompaniesCompanyIdMessages = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdMessagesResponse,
  GetCompaniesCompanyIdMessagesUrlParams,
  GetCompaniesCompanyIdMessagesQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/messages",
  tokenKey: "AUTH_TOKEN",
});
