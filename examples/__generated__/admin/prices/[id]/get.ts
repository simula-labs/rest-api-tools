import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type GetPricesIdUrlParams = {
  id: string
} | undefined

export type GetPricesIdResponse = Types.Price

export const GetPricesId = new BaseRequest<
  undefined,
  GetPricesIdResponse,
  GetPricesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/prices/:id",
  tokenKey: "AUTH_TOKEN",
});
