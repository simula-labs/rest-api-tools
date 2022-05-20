import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type GetProductsIdUrlParams = {
  id: string
} | undefined

export type GetProductsIdResponse = Types.Product

export const getProductsId = new BaseRequest<
  undefined,
  GetProductsIdResponse,
  GetProductsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/products/:id",
  tokenKey: "AUTH_TOKEN",
});
