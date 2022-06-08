/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetCompaniesCompanyIdRoomsUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdRoomsResponse = {
  rooms: (Types.Room & {
    account?: Types.Account & {
      profile?: Types.Profile & {
        placeOfResidence?: Types.State | undefined
      } | undefined
    } | undefined
  } & {
    company?: Types.Company & {
      industries?: Types.Industry[] | undefined
    } & {
      features?: Types.Feature[] | undefined
    } | undefined
  } & {
    jobChangeCompletionReport?: Types.JobChangeCompletionReport | undefined
  } & {
    recruitmentCompletionReport?: Types.RecruitmentCompletionReport | undefined
  } & {
    introductionCompletionReport?: Types.IntroductionCompletionReport | undefined
  })[]
  totalDataNums: number
}

export type GetCompaniesCompanyIdRoomsQueryParams = {
  page?: number | undefined
}

export const getCompaniesCompanyIdRooms = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdRoomsResponse,
  GetCompaniesCompanyIdRoomsUrlParams,
  GetCompaniesCompanyIdRoomsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/rooms",
  tokenKey: "AUTH_TOKEN",
});
