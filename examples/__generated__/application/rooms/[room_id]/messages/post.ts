/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostAccountsAccountIdRoomsRoomIdMessagesUrlParams = {
  roomId: string
} | undefined

export type PostAccountsAccountIdRoomsRoomIdMessagesResponse = Types.Message & {
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

export type PostAccountsAccountIdRoomsRoomIdMessagesRequestBody = {
  message: {
    /** 発言するaccountのid */
    senderId: string
    content?: string | undefined
    /** 添付ファイルのこと、つかいたかはSpecのREADME見て */
    attachment?: File | undefined
  }
}

export const postAccountsAccountIdRoomsRoomIdMessages = new BaseRequest<
  PostAccountsAccountIdRoomsRoomIdMessagesRequestBody,
  PostAccountsAccountIdRoomsRoomIdMessagesResponse,
  PostAccountsAccountIdRoomsRoomIdMessagesUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "post",
  baseURL: API_HOST,
  path: "/rooms/:roomId/messages",
  tokenKey: "AUTH_TOKEN",
  contentType: "formData",
});
