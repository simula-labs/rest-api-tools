import BaseRequest from "../baseRequest";
import type * as Types from "../@types";

export type PostOfficialInformationsResponse = Types.OfficialInformation

export type PostOfficialInformationsRequestBody = {
  officialInformation: {
    title?: string | undefined
    content?: string | undefined
    htmlContent?: string | undefined
    isReleased: boolean
  }
}

export const PostOfficialInformations = new BaseRequest<
  PostOfficialInformationsRequestBody,
  PostOfficialInformationsResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/admin",
  path: "/official_informations",
});
