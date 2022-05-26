/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetAccountsAccountIdRoomsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdRoomsResponse = {
  rooms: Types.Room & {
    account: Types.Account & {
      profile: Types.Profile & {
        placeOfResidence: Types.State
      }
    }
  } & {
    company: Types.Company & {
      industries: Types.Industry[]
    } & {
      features: Types.Feature[]
    }
  }

  totalDataNums: number
}

export const getAccountsAccountIdRooms = new BaseRequest<
  undefined,
  GetAccountsAccountIdRoomsResponse,
  GetAccountsAccountIdRoomsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/accounts/:accountId/rooms",
  tokenKey: "AUTH_TOKEN",
});
