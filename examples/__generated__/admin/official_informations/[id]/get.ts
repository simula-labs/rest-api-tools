import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type GetOfficialInformationsIdUrlParams = {
  id: string
} | undefined

export type GetOfficialInformationsIdResponse = Types.OfficialInformation

export const GetOfficialInformationsId = new BaseRequest<
  undefined,
  GetOfficialInformationsIdResponse,
  GetOfficialInformationsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/official_informations/:id",
  tokenKey: "AUTH_TOKEN",
});
