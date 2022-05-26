/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PostAccountsAccountIdRoomsRoomIdMessagesUrlParams = {
  roomId: string
} | undefined

export type PostAccountsAccountIdRoomsRoomIdMessagesResponse = Types.Message & {
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

export type PostAccountsAccountIdRoomsRoomIdMessagesRequestBody = {
  message: {
    /** 発言するaccountのid */
    senderId: string
    content: string
  }
}

export const postAccountsAccountIdRoomsRoomIdMessages = new BaseRequest<
  PostAccountsAccountIdRoomsRoomIdMessagesRequestBody,
  PostAccountsAccountIdRoomsRoomIdMessagesResponse,
  PostAccountsAccountIdRoomsRoomIdMessagesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://a pi.example.com/public",
  path: "/rooms/:roomId/messages",
  tokenKey: "AUTH_TOKEN",
});
