import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type PatchOfficialInformationsIdUrlParams = {
  id: string
} | undefined

export type PatchOfficialInformationsIdResponse = Types.OfficialInformation

export type PatchOfficialInformationsIdRequestBody = {
  officialInformation: {
    title: string
    content: string
    htmlContent: string
    isReleased: boolean
  }
}

export const PatchOfficialInformationsId = new BaseRequest<
  PatchOfficialInformationsIdRequestBody,
  PatchOfficialInformationsIdResponse,
  PatchOfficialInformationsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/admin",
  path: "/official_informations/:id",
  tokenKey: "AUTH_TOKEN",
});
