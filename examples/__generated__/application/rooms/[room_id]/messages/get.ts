import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetAccountsAccountIdRoomsRoomIdMessagesUrlParams = {
  roomId: string
} | undefined

export type GetAccountsAccountIdRoomsRoomIdMessagesResponse = {
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

export const getAccountsAccountIdRoomsRoomIdMessages = new BaseRequest<
  undefined,
  GetAccountsAccountIdRoomsRoomIdMessagesResponse,
  GetAccountsAccountIdRoomsRoomIdMessagesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/rooms/:room_id/messages",
  tokenKey: "AUTH_TOKEN",
});
