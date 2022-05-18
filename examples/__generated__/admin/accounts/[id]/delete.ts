import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type DeleteAccountsIdUrlParams = {
  id: string
} | undefined
export const DeleteAccounts = new BaseRequest<>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/admin",
  path: "/accounts/:id",
});