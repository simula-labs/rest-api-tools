import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type PostProductResponse = Types.Product
export type PostProductRequestBody = {
  product: {
    name: string
    description?: string | undefined
    active?: boolean | undefined
    /** good=買い切り商品, service=サブスク */
    type: 'good' | 'service'
    plan_type?: 'client' | 'agent' | undefined
  }
}
export const PostProducts = new BaseRequest<>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/admin",
  path: "/products",
});