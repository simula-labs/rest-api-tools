/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

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
  baseURL: API_HOST,
  path: "/accounts/:accountId/recruitment_interests",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
