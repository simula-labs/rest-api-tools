/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type DeleteHopesIdUrlParams = {
  id: string
} | undefined

export const deleteHopesId = new BaseRequest<
  undefined,
  undefined,
  DeleteHopesIdUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "delete",
  baseURL: "https://api.example.com/public",
  path: "/hopes/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
