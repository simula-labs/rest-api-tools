/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostAccountsAccountIdBlockCompaniesUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdBlockCompaniesResponse = {
  companies: (Types.Company & {
    recruitments?: Types.Recruitment[] | undefined
  } & {
    industries?: Types.Industry[] | undefined
  } & {
    features?: Types.Feature[] | undefined
  })[]
  totalDataNums: number
}

export type PostAccountsAccountIdBlockCompaniesRequestBody = {
  blockCompany: {
    companyIds?: string[] | undefined
  }
}

export const postAccountsAccountIdBlockCompanies = new BaseRequest<
  PostAccountsAccountIdBlockCompaniesRequestBody,
  PostAccountsAccountIdBlockCompaniesResponse,
  PostAccountsAccountIdBlockCompaniesUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/block_companies",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
