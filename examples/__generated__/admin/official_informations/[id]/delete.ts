import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type DeleteOfficialInformationsIdUrlParams = {
  id: string
} | undefined

export const deleteOfficialInformationsId = new BaseRequest<
  undefined,
  undefined,
  DeleteOfficialInformationsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/admin",
  path: "/official_informations/:id",
  tokenKey: "AUTH_TOKEN",
});
