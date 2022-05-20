import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type PostProductsIdPricesUrlParams = {
  id: string
} | undefined

export type PostProductsIdPricesResponse = Types.Price

export type PostProductsIdPricesRequestBody = {
  price: {
    active?: boolean | undefined
    /** ISO 4217 */
    currency: string
    unitAmount: number
    /** 買い切りかサブスクか */
    type: 'one_time' | 'recurring'
    /** サブスクの場合のみ必須 */
    interval?: 'day' | 'week' | 'month' | 'year' | undefined
    /** 請求周期, 3日に1回とか */
    intervalCount?: string | undefined
  }
}

export const postProductsIdPrices = new BaseRequest<
  PostProductsIdPricesRequestBody,
  PostProductsIdPricesResponse,
  PostProductsIdPricesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/admin",
  path: "/products/:id/prices",
  tokenKey: "AUTH_TOKEN",
});
