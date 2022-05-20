import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../@types";

export type GetWithdrawalsResponse = {
  withdrawals: {
    amount: number
    withdrawalMethod: 'manual' | 'automatic'
    createdAt: string
    account?: Types.Account | undefined
    company?: Types.Company | undefined
  }[]
  totalDataNums: number
}

export const getWithdrawals = new BaseRequest<
  undefined,
  GetWithdrawalsResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/withdrawals",
  tokenKey: "AUTH_TOKEN",
});
