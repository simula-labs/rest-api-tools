/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetCompaniesCompanyIdKeepingListsUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdKeepingListsResponse = {
  keepingLists?: Types.KeepingList & {
    accounts?: (Types.Account & {
      profile?: Types.Profile & {
        placeOfResidence?: Types.State | undefined
      } | undefined
    } & {
      hopes?: (Types.Hope & {
        occupations?: Types.Occupation[] | undefined
      } & {
        employmentStatuses?: Types.EmploymentStatus[] | undefined
      })[] | undefined
    })[] | undefined
  } | undefined

  totalDataNums?: number | undefined
}

export type GetCompaniesCompanyIdKeepingListsQueryParams = {
  scope?: 'only_mine' | 'except_mine' | undefined
  targetAccountId?: string | undefined
}

export const getCompaniesCompanyIdKeepingLists = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdKeepingListsResponse,
  GetCompaniesCompanyIdKeepingListsUrlParams,
  GetCompaniesCompanyIdKeepingListsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/keeping_lists",
  tokenKey: "AUTH_TOKEN",
});
