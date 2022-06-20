/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetAccountsAccountIdHopeUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdHopeResponse = {
  hopes: (Types.Hope & {
    industries?: Types.Industry[] | undefined
  } & {
    occupations?: Types.Occupation[] | undefined
  } & {
    workplaces?: Types.State[] | undefined
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
  path: "/accounts/:accountId/hopes",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
