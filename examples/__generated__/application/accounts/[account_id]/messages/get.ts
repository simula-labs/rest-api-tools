import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../@types";

export type GetAccountsAccountIdMessagesUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdMessagesResponse = {
  messages: Types.Message & {
    sender: Types.Account & {
      profile: Types.Profile & {
        placeOfResidence: Types.State[]
      } & {
        specialtyCompanyTypes: Types.SpecialtyCompanyType[]
      } & {
        specialtyPositions: Types.SpecialtyPosition[]
      } & {
        occupationMainCategories: Types.OccupationMainCategory[]
      } & {
        industryCategories: Types.IndustryCategory[]
      }
    }
  } & {
    recruitment: Types.Recruitment & {
      workplace: Types.State
    } & {
      author: Types.Account
    } & {
      externalService: Types.ExternalService
    } & {
      employmentStatuses: Types.EmploymentStatus[]
    } & {
      occupations: Types.Occupation[]
    } & {
      industries: Types.Industry[]
    } & {
      company: Types.Company
    }
  } & {
    room: Types.Room
  }

  totalDataNums: number
}

export type GetAccountsAccountIdMessagesQueryParams = {
  companyId: string
} | undefined

export const getAccountsAccountIdMessages = new BaseRequest<
  undefined,
  GetAccountsAccountIdMessagesResponse,
  GetAccountsAccountIdMessagesUrlParams,
  GetAccountsAccountIdMessagesQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/accounts/:account_id/messages",
  tokenKey: "AUTH_TOKEN",
});
