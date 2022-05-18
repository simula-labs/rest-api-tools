import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type GetPayoutsResponse = {
  payouts: Types.Payout
}
export const GetPayouts = new BaseRequest<>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/payouts",
});