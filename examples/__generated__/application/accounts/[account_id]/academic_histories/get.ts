/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

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
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/academic_histories",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
