import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../@types";

export type GetFeaturesResponse = {
  features: Types.Feature[]
}

export type GetFeaturesQueryParams = {
  /** 「default」or「organizational」 */
  type?: 'default' | 'organizational' | undefined
  /** feature名を前方一致で検索 */
  keyword?: string | undefined
  /** 「company」or「recruitment」 */
  sourceType?: 'company' | 'recruitment' | undefined
} | undefined

export const getFeatures = new BaseRequest<
  undefined,
  GetFeaturesResponse,
  undefined,
  GetFeaturesQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/features",
  tokenKey: "AUTH_TOKEN",
});
