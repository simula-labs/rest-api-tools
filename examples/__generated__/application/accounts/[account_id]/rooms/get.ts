import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../@types";

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
  baseURL: "https://api.example.com/public",
  path: "/accounts/:account_id/rooms",
  tokenKey: "AUTH_TOKEN",
});
