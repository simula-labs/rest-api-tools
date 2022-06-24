/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type GetAccountsAccountIdRoomsIdUrlParams = {
  id: string
} | undefined

export type GetAccountsAccountIdRoomsIdResponse = Types.Room & {
    account: Types.Account & {
      profile?: Types.Profile & {
        placeOfResidence?: Types.State | undefined
      } | undefined
    }
  } & {
    company: Types.Company & {
      industries?: Types.Industry[] | undefined
    } & {
      features?: Types.Feature[] | undefined
    }
  }

export const getAccountsAccountIdRoomsId = new BaseRequest<
  undefined,
  GetAccountsAccountIdRoomsIdResponse,
  GetAccountsAccountIdRoomsIdUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/rooms/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
