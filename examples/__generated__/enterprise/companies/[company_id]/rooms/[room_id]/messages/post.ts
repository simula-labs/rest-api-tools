/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../../shared/index";

export type PostCompaniesCompanyIdRoomsRoomIdMessagesUrlParams = {
  companyId: string
  roomId: string
} | undefined

export type PostCompaniesCompanyIdRoomsRoomIdMessagesResponse = Types.Message & {
    sender: Types.Account & {
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
    }
  } & {
    recruitment: Types.Recruitment & {
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
    }
  } & {
    room: Types.Room
  }

export type PostCompaniesCompanyIdRoomsRoomIdMessagesRequestBody = {
  message: {
    /** 発言するaccountのid */
    senderId: string
    content: string
    recruitmentId?: string | undefined
  }
}

export const postCompaniesCompanyIdRoomsRoomIdMessages = new BaseRequest<
  PostCompaniesCompanyIdRoomsRoomIdMessagesRequestBody,
  PostCompaniesCompanyIdRoomsRoomIdMessagesResponse,
  PostCompaniesCompanyIdRoomsRoomIdMessagesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/rooms/:roomId/messages",
  tokenKey: "AUTH_TOKEN",
});
