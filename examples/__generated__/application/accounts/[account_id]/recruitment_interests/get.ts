/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetAccountsAccountIdRecruitmentInterestsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdRecruitmentInterestsResponse = {
  recruitmentInterests: (Types.RecruitmentInterest & {
    recruitment: Types.Recruitment
  })[]
  totalDataNums: number
}

export const getAccountsAccountIdRecruitmentInterests = new BaseRequest<
  undefined,
  GetAccountsAccountIdRecruitmentInterestsResponse,
  GetAccountsAccountIdRecruitmentInterestsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/accounts/:accountId/recruitment_interests",
  tokenKey: "AUTH_TOKEN",
});
