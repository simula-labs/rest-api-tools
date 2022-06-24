/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetAccountsAccountIdHopesUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdHopesResponse = {
  hopes: (Types.Hope & {
    industries?: Types.Industry[] | undefined
  } & {
    occupations?: Types.Occupation[] | undefined
  } & {
    workplaces?: Types.State[] | undefined
  })[]
}

export const getAccountsAccountIdHopes = new BaseRequest<
  undefined,
  GetAccountsAccountIdHopesResponse,
  GetAccountsAccountIdHopesUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/accounts/:accountId/hopes",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
