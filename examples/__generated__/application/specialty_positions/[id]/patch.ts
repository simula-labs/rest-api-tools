/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type PatchSpecialtyPositionsIdUrlParams = {
  id: string
} | undefined

export type PatchSpecialtyPositionsIdResponse = Types.SpecialtyPosition

export type PatchSpecialtyPositionsIdRequestBody = {
  specialtyPosition: {
    content?: string | undefined
  }
}

export const patchSpecialtyPositionsId = new BaseRequest<
  PatchSpecialtyPositionsIdRequestBody,
  PatchSpecialtyPositionsIdResponse,
  PatchSpecialtyPositionsIdUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "patch",
  baseURL: API_HOST,
  path: "/specialty_positions/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
