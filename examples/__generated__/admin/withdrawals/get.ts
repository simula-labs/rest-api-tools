import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type GetWithdrawalsResponse = {
  withdrawals: {
    amount: number
    withdrawal_method: 'manual' | 'automatic'
    created_at: string
    account?: Types.Account | undefined
    company?: Types.Company | undefined
  }[]
  total_data_nums: number
}
export const GetWithdrawals = new BaseRequest<>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/withdrawals",
});