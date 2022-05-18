import BaseRequest from "../../baseRequest";
import type * as Types from "../../@types";

export type GetProductsIdUrlParams = {
  id: string
} | undefined

export type GetProductsIdResponse = Types.Product

export const GetProductsId = new BaseRequest<
  undefined,
  GetProductsIdResponse,
  GetProductsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/products/:id",
});
