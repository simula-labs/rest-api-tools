import BaseRequest from "../../baseRequest";
import type * as Types from "../../@types";

export type DeleteOfficialInformationsIdUrlParams = {
  id: string
} | undefined

export const DeleteOfficialInformationsId = new BaseRequest<
  undefined,
  undefined,
  DeleteOfficialInformationsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/admin",
  path: "/official_informations/:id",
});
