/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../../shared/index";

export type PostCompaniesCompanyIdKeepingListsKeepingListIdAccountsUrlParams = {
  companyId: string
  keepingListId: string
} | undefined

export type PostCompaniesCompanyIdKeepingListsKeepingListIdAccountsResponse = Types.KeepingList & {
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
  }

export type PostCompaniesCompanyIdKeepingListsKeepingListIdAccountsRequestBody = {
  keepingList?: {
    accountId: string
  } | undefined
}

export const postCompaniesCompanyIdKeepingListsKeepingListIdAccounts = new BaseRequest<
  PostCompaniesCompanyIdKeepingListsKeepingListIdAccountsRequestBody,
  PostCompaniesCompanyIdKeepingListsKeepingListIdAccountsResponse,
  PostCompaniesCompanyIdKeepingListsKeepingListIdAccountsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/keeping_lists/:keepingListId/accounts",
  tokenKey: "AUTH_TOKEN",
});
