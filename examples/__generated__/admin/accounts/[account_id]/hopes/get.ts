import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type GetAccountsAccountIdHopesUrlParams = {
  accountId: string
} | undefined
export type GetAccountsAccountIdHopesResponse = {
  hopes: Types.Hope[]
}
export const GetAccounts = new BaseRequest<>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/accounts/:account_id/hopes",
});