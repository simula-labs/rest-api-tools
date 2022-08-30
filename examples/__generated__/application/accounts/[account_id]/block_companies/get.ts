/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetAccountsAccountIdBlockCompaniesUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdBlockCompaniesResponse = {
  companies: (Types.Company & {
    recruitments?: Types.Recruitment[] | undefined
  } & {
    industries?: Types.Industry[] | undefined
  } & {
    features?: Types.Feature[] | undefined
  })[]
  totalDataNums: number
}

export const getAccountsAccountIdBlockCompanies = new BaseRequest<
  undefined,
  GetAccountsAccountIdBlockCompaniesResponse,
  GetAccountsAccountIdBlockCompaniesUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/block_companies",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
