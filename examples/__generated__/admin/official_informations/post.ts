import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type PostOfficialInformationsResponse = Types.OfficialInformation
export type PostOfficialInformationsRequestBody = {
  official_information: {
    title?: string | undefined
    content?: string | undefined
    html_content?: string | undefined
    is_released: boolean
  }
}
export const PostOfficialInformations = new BaseRequest<>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/admin",
  path: "/official_informations",
});