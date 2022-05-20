import { Account } from "../@types";
import BaseRequest from "../../baseRequest";

export type GetAccountsUrlParams = {
  id: string;
};

const mockGetAccountUrlParams = (
  modification: Partial<GetAccountsUrlParams> = {}
): GetAccountsUrlParams => {
  return {
    id: "string",
    ...modification,
  };
};

export type GetAccountsPayload = Account;

export const GetAccounts = new BaseRequest<
  undefined,
  GetAccountsPayload,
  GetAccountsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/application",
  path: "/accounts",
});
