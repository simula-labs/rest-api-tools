import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type GetPricesIdUrlParams = {
  id: string
} | undefined
export type GetPricesIdResponse = Types.Price
export const GetPrices = new BaseRequest<>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/prices/:id",
});