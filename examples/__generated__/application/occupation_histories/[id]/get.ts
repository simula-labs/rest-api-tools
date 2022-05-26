import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type GetOccupationHistoriesIdUrlParams = {
  id: string
} | undefined

export type GetOccupationHistoriesIdResponse = Types.OccupationHistory & {
    account: Types.Account
  } & {
    occupation: Types.Occupation
  }

export const getOccupationHistoriesId = new BaseRequest<
  undefined,
  GetOccupationHistoriesIdResponse,
  GetOccupationHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/occupation_histories/:id",
  tokenKey: "AUTH_TOKEN",
});
