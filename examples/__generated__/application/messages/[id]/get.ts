/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetAccountsAccountIdRoomsRoomIdMessagesIdUrlParams = {
  id: string
} | undefined

export type GetAccountsAccountIdRoomsRoomIdMessagesIdResponse = Types.Message & {
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

export const getAccountsAccountIdRoomsRoomIdMessagesId = new BaseRequest<
  undefined,
  GetAccountsAccountIdRoomsRoomIdMessagesIdResponse,
  GetAccountsAccountIdRoomsRoomIdMessagesIdUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/messages/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
