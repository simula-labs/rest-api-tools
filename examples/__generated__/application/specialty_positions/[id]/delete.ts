import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type DeleteSpecialtyPositionsIdUrlParams = {
  id: string
} | undefined

export const deleteSpecialtyPositionsId = new BaseRequest<
  undefined,
  undefined,
  DeleteSpecialtyPositionsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://a pi.example.com/public",
  path: "/specialty_positions/:id",
  tokenKey: "AUTH_TOKEN",
});
