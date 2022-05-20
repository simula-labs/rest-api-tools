import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../@types";

export type GetPayoutsResponse = {
  payouts: Types.Payout
}

export const getPayouts = new BaseRequest<
  undefined,
  GetPayoutsResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/payouts",
  tokenKey: "AUTH_TOKEN",
});
