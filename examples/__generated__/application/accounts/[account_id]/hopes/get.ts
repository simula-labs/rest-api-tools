import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type GetAccountsAccountIdHopeUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdHopeResponse = {
  hopes: (Types.Hope & {
    industries: Types.Industry[]
  } & {
    occupations: Types.Occupation[]
  } & {
    workplaces: Types.State[]
  })[]
}

export const getAccountsAccountIdHope = new BaseRequest<
  undefined,
  GetAccountsAccountIdHopeResponse,
  GetAccountsAccountIdHopeUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/application",
  path: "/accounts/:account_id/hopes",
  tokenKey: "AUTH_TOKEN",
});
