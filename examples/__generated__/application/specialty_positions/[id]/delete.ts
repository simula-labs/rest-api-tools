/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type DeleteSpecialtyPositionsIdUrlParams = {
  id: string
} | undefined

export const deleteSpecialtyPositionsId = new BaseRequest<
  undefined,
  undefined,
  DeleteSpecialtyPositionsIdUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "delete",
  baseURL: API_HOST,
  path: "/specialty_positions/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
