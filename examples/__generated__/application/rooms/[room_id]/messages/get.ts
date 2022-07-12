/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetAccountsAccountIdRoomsRoomIdMessagesUrlParams = {
  roomId: string
} | undefined

export type GetAccountsAccountIdRoomsRoomIdMessagesResponse = {
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

export const getAccountsAccountIdRoomsRoomIdMessages = new BaseRequest<
  undefined,
  GetAccountsAccountIdRoomsRoomIdMessagesResponse,
  GetAccountsAccountIdRoomsRoomIdMessagesUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/rooms/:roomId/messages",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
