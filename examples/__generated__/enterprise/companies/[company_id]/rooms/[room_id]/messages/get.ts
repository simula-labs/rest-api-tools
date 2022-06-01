/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../../shared/index";

export type GetCompaniesCompanyIdRoomsRoomIdMessagesUrlParams = {
  companyId: string
  roomId: string
} | undefined

export type GetCompaniesCompanyIdRoomsRoomIdMessagesResponse = {
  messages: Types.Message & {
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
  }

  totalDataNums: number
}

export const getCompaniesCompanyIdRoomsRoomIdMessages = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdRoomsRoomIdMessagesResponse,
  GetCompaniesCompanyIdRoomsRoomIdMessagesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/rooms/:roomId/messages",
  tokenKey: "AUTH_TOKEN",
});
