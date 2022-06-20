/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

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
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/application",
  path: "/accounts/:accountId/rooms",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
