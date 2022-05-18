import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type GetOfficialInformationsResponse = {
  official_informations: Types.OfficialInformation[]
}
export type GetOfficialInformationsQueryParams = {
  /** 公開中か */
  is_released?: boolean | undefined
} | undefined
export const GetOfficialInformations = new BaseRequest<>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/official_informations",
});