import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type PatchPricesIdUrlParams = {
  id: string
} | undefined
export type PatchPricesIdResponse = Types.Price
export type PatchPricesIdRequestBody = {
  price: {
    active: boolean
  }
}
export const PatchPrices = new BaseRequest<>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/admin",
  path: "/prices/:id",
});