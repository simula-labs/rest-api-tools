import BaseRequest from "../../baseRequest";
import type * as Types from "../../@types";

export type GetAccountsIdUrlParams = {
  id: string
} | undefined

export type GetAccountsIdResponse = Types.Account

export const GetAccountsId = new BaseRequest<
  undefined,
  GetAccountsIdResponse,
  GetAccountsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/accounts/:id",
});
