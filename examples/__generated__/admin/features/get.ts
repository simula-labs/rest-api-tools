import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type GetFeaturesResponse = {
  features: Types.Feature[]
}
export type GetFeaturesQueryParams = {
  /** 「default」or「organizational」 */
  type?: 'default' | 'organizational' | undefined
  /** feature名を前方一致で検索 */
  keyword?: string | undefined
  /** 「company」or「recruitment」 */
  source_type?: 'company' | 'recruitment' | undefined
} | undefined
export const GetFeatures = new BaseRequest<>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/features",
});