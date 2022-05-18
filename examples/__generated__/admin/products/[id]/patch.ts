import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type PatchProductsIdUrlParams = {
  id: string
} | undefined
export type PatchProductsIdResponse = Types.Product
export type PatchProductsIdRequestBody = {
  product: {
    name: string
    description: string
    active: boolean
  }
}
export const PatchProducts = new BaseRequest<>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/admin",
  path: "/products/:id",
});