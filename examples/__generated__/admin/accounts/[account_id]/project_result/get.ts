import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type GetAccountsAccountIdProjectResultUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdProjectResultResponse = Types.ProjectResult

export const getAccountsAccountIdProjectResult = new BaseRequest<
  undefined,
  GetAccountsAccountIdProjectResultResponse,
  GetAccountsAccountIdProjectResultUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/accounts/:account_id/project_result",
  tokenKey: "AUTH_TOKEN",
});
