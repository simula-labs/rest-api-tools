/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetAccountsAccountIdMessagesUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdMessagesResponse = {
  messages: (Types.Message & {
    sender?: Types.Account & {
      profile?: Types.Profile & {
        placeOfResidence?: Types.State[] | undefined
        specialtyCompanyTypes?: Types.SpecialtyCompanyType[] | undefined
        specialtyPositions?: Types.SpecialtyPosition[] | undefined
        occupationMainCategories?: Types.OccupationMainCategory[] | undefined
        industryCategories?: Types.IndustryCategory[] | undefined
      } | undefined
    } | undefined

    recruitment?: Types.Recruitment & {
      workplace?: Types.State | undefined
      author?: Types.Account | undefined
      externalService?: Types.ExternalService | undefined
      employmentStatuses?: Types.EmploymentStatus[] | undefined
      occupations?: Types.Occupation[] | undefined
      industries?: Types.Industry[] | undefined
      properties?: string | undefined
    } | undefined

    room?: Types.Room | undefined
  })[]
  totalDataNums: number
}

export type GetAccountsAccountIdMessagesQueryParams = {
  companyId: string
  page?: number | undefined
}

export const getAccountsAccountIdMessages = new BaseRequest<
  undefined,
  GetAccountsAccountIdMessagesResponse,
  GetAccountsAccountIdMessagesUrlParams,
  GetAccountsAccountIdMessagesQueryParams
>({
  requiredAuth: false,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/accounts/:accountId/messages",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
