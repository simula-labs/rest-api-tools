import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

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
  baseURL: "https://api.example.com/application",
  path: "/specialty_positions/:id",
  tokenKey: "AUTH_TOKEN",
});
