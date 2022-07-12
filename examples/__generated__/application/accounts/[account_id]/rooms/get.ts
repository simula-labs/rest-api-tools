/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetAccountsAccountIdRoomsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdRoomsResponse = {
  rooms: (Types.Room & {
    account: Types.Account & {
      profile?: Types.Profile & {
        placeOfResidence?: Types.State | undefined
      } | undefined
    }

    company: Types.Company & {
      industries?: Types.Industry[] | undefined
      features?: Types.Feature[] | undefined
    }

    lastMessage?: Types.Message | undefined
    jobChangeCompletionReport?: Types.JobChangeCompletionReport | undefined
  })[]
  totalDataNums: number
}

export type GetAccountsAccountIdRoomsQueryParams = {
  page?: number | undefined
}

export const getAccountsAccountIdRooms = new BaseRequest<
  undefined,
  GetAccountsAccountIdRoomsResponse,
  GetAccountsAccountIdRoomsUrlParams,
  GetAccountsAccountIdRoomsQueryParams
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/rooms",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
