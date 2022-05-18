import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type GetAccountsIdUrlParams = {
  id: string
} | undefined
export type GetAccountsIdResponse = Types.Account
export const GetAccounts = new BaseRequest<>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/accounts/:id",
});