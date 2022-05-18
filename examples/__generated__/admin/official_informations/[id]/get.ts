import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type GetOfficialInformationsIdUrlParams = {
  id: string
} | undefined
export type GetOfficialInformationsIdResponse = Types.OfficialInformation
export const GetOfficialInformations = new BaseRequest<>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/official_informations/:id",
});