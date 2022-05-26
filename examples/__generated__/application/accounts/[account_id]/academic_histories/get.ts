/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetAccountsAccountIdAcademicHistoriesUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdAcademicHistoriesResponse = {
  academicHistories: Types.AcademicHistory[]
}

export const getAccountsAccountIdAcademicHistories = new BaseRequest<
  undefined,
  GetAccountsAccountIdAcademicHistoriesResponse,
  GetAccountsAccountIdAcademicHistoriesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/accounts/:accountId/academic_histories",
  tokenKey: "AUTH_TOKEN",
});
