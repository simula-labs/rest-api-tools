import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../@types";

export type GetOfficialInformationsResponse = {
  officialInformations: Types.OfficialInformation[]
}

export type GetOfficialInformationsQueryParams = {
  /** 公開中か */
  isReleased?: boolean | undefined
} | undefined

export const getOfficialInformations = new BaseRequest<
  undefined,
  GetOfficialInformationsResponse,
  undefined,
  GetOfficialInformationsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/official_informations",
  tokenKey: "AUTH_TOKEN",
});
