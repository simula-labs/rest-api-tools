import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type GetAccountsAccountIdMessagesUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdMessagesResponse = {
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

export const getAccountsAccountIdMessages = new BaseRequest<
  undefined,
  GetAccountsAccountIdMessagesResponse,
  GetAccountsAccountIdMessagesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/application",
  path: "/accounts/:account_id/rooms",
  tokenKey: "AUTH_TOKEN",
});
