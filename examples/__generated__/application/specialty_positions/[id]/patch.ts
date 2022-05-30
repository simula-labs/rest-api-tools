/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type PatchSpecialtyPositionsIdUrlParams = {
  id: string
} | undefined

export type PatchSpecialtyPositionsIdResponse = Types.SpecialtyPosition

export type PatchSpecialtyPositionsIdRequestBody = {
  specialtyPosition: {
    content: string
  }
}

export const patchSpecialtyPositionsId = new BaseRequest<
  PatchSpecialtyPositionsIdRequestBody,
  PatchSpecialtyPositionsIdResponse,
  PatchSpecialtyPositionsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/public",
  path: "/specialty_positions/:id",
  tokenKey: "AUTH_TOKEN",
});
