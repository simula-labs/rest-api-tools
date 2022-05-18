import { Account } from "../../@types";
import BaseRequest from "../../../baseRequest";

export type GetAccounts_id_UrlParams = {
  id: string;
};

export type GetAccounts_id_Payload = Account;

export const GetAccounts_id = new BaseRequest<undefined, GetAccounts_id_Payload, GetAccounts_id_UrlParams, undefined>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/application",
  path: "/accounts/:id",
});