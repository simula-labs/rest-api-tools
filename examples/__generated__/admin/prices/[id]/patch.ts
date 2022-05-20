import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type PatchPricesIdUrlParams = {
  id: string
} | undefined

export type PatchPricesIdResponse = Types.Price

export type PatchPricesIdRequestBody = {
  price: {
    active: boolean
  }
}

export const PatchPricesId = new BaseRequest<
  PatchPricesIdRequestBody,
  PatchPricesIdResponse,
  PatchPricesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/admin",
  path: "/prices/:id",
  tokenKey: "AUTH_TOKEN",
});
