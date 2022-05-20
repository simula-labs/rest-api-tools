import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

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

export const PatchProductsId = new BaseRequest<
  PatchProductsIdRequestBody,
  PatchProductsIdResponse,
  PatchProductsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/admin",
  path: "/products/:id",
  tokenKey: "AUTH_TOKEN",
});
