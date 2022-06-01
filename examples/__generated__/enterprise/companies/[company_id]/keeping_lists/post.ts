/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PostCompaniesCompanyIdKeepingListsUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdKeepingListsResponse = Types.KeepingList & {
    accounts: (Types.Account & {
      profile?: Types.Profile & {
        placeOfResidence?: Types.State | undefined
      } | undefined
    } & {
      hopes?: (Types.Hope & {
        occupations?: Types.Occupation[] | undefined
      } & {
        employmentStatuses?: Types.EmploymentStatus[] | undefined
      })[] | undefined
    })[]
  }

export type PostCompaniesCompanyIdKeepingListsRequestBody = {
  keepingList: {
    name: string
    accountIds?: string[] | undefined
    accountId: string
  }
}

export const postCompaniesCompanyIdKeepingLists = new BaseRequest<
  PostCompaniesCompanyIdKeepingListsRequestBody,
  PostCompaniesCompanyIdKeepingListsResponse,
  PostCompaniesCompanyIdKeepingListsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/keeping_lists",
  tokenKey: "AUTH_TOKEN",
});
