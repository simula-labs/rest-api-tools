import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type PatchOfficialInformationsIdUrlParams = {
  id: string
} | undefined
export type PatchOfficialInformationsIdResponse = Types.OfficialInformation
export type PatchOfficialInformationsIdRequestBody = {
  official_information: {
    title: string
    content: string
    html_content: string
    is_released: boolean
  }
}
export const PatchOfficialInformations = new BaseRequest<>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/admin",
  path: "/official_informations/:id",
});