import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type GetAccountsAccountIdRoomsRoomIdMessagesIdUrlParams = {
  id: string
} | undefined

export type GetAccountsAccountIdRoomsRoomIdMessagesIdResponse = Types.Message & {
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

export const getAccountsAccountIdRoomsRoomIdMessagesId = new BaseRequest<
  undefined,
  GetAccountsAccountIdRoomsRoomIdMessagesIdResponse,
  GetAccountsAccountIdRoomsRoomIdMessagesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/messages/:id",
  tokenKey: "AUTH_TOKEN",
});
