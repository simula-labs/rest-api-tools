/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetAccountsAccountIdRecruitmentInterestsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdRecruitmentInterestsResponse = {
  recruitments: (Types.Recruitment & {
    occupations?: Types.Occupation[] | undefined
    industries?: Types.Industry[] | undefined
    workplace?: Types.State | undefined
    company?: Types.Company | undefined
  })[]
  totalDataNums: number
}

export type GetAccountsAccountIdRecruitmentInterestsQueryParams = {
  page?: number | undefined
}

export const getAccountsAccountIdRecruitmentInterests = new BaseRequest<
  undefined,
  GetAccountsAccountIdRecruitmentInterestsResponse,
  GetAccountsAccountIdRecruitmentInterestsUrlParams,
  GetAccountsAccountIdRecruitmentInterestsQueryParams
>({
  requiredAuth: false,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/accounts/:accountId/recruitment_interests",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
