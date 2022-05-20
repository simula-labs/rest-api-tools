import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type PatchStatesIdUrlParams = {
  id: string
} | undefined

export type PatchStatesIdResponse = Types.State

export type PatchStatesIdRequestBody = {
  state: {
    name: string
    countryCode: string
  }
}

export const PatchStatesId = new BaseRequest<
  PatchStatesIdRequestBody,
  PatchStatesIdResponse,
  PatchStatesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/admin",
  path: "/states/:id",
  tokenKey: "AUTH_TOKEN",
});
