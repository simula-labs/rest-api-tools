import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type PostProductsIdPricesUrlParams = {
  id: string
} | undefined
export type PostProductsIdPricesResponse = Types.Price
export type PostProductsIdPricesRequestBody = {
  price: {
    active?: boolean | undefined
    /** ISO 4217 */
    currency: string
    unit_amount: number
    /** 買い切りかサブスクか */
    type: 'one_time' | 'recurring'
    /** サブスクの場合のみ必須 */
    interval?: 'day' | 'week' | 'month' | 'year' | undefined
    /** 請求周期, 3日に1回とか */
    interval_count?: string | undefined
  }
}
export const PostProducts = new BaseRequest<>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/admin",
  path: "/products/:id/prices",
});