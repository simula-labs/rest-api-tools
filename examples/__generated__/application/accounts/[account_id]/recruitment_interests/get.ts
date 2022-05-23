import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

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
  baseURL: "https://api.example.com/application",
  path: "/accounts/:account_id/recruitment_interests",
  tokenKey: "AUTH_TOKEN",
});
