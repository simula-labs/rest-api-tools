import BaseRequest from "../baseRequest";
import type * as Types from "../@types";

export type GetOfficialInformationsResponse = {
  officialInformations: Types.OfficialInformation[]
}

export type GetOfficialInformationsQueryParams = {
  /** 公開中か */
  isReleased?: boolean | undefined
} | undefined

export const GetOfficialInformations = new BaseRequest<
  undefined,
  GetOfficialInformationsResponse,
  undefined,
  GetOfficialInformationsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/official_informations",
});
