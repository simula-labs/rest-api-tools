import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../@types";

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
  baseURL: "https://api.example.com/public",
  path: "/accounts/:account_id/academic_histories",
  tokenKey: "AUTH_TOKEN",
});
