import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type GetAccountsAccountIdAcademicHistoriesUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdAcademicHistoriesResponse = {
  academicHistories: Types.AcademicHistory[]
}

export type GetAccountsAccountIdAcademicHistoriesQueryParams = {
} | undefined

export const GetAccountsAccountIdAcademicHistories = new BaseRequest<
  undefined,
  GetAccountsAccountIdAcademicHistoriesResponse,
  GetAccountsAccountIdAcademicHistoriesUrlParams,
  GetAccountsAccountIdAcademicHistoriesQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/accounts/:account_id/academic_histories",
  tokenKey: "AUTH_TOKEN",
});
