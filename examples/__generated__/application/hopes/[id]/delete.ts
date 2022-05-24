import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type DeleteHopesIdUrlParams = {
  id: string
} | undefined

export const deleteHopesId = new BaseRequest<
  undefined,
  undefined,
  DeleteHopesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/application",
  path: "/hopes/:id",
  tokenKey: "AUTH_TOKEN",
});