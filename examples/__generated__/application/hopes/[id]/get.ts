/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type GetHopesIdUrlParams = {
  id: string
} | undefined

export type GetHopesIdResponse = Types.Hope & {
    industries: Types.Industry[]
  } & {
    occupations: Types.Occupation[]
  } & {
    workplaces: Types.State[]
  }

export const getHopesId = new BaseRequest<
  undefined,
  GetHopesIdResponse,
  GetHopesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/hopes/:id",
  tokenKey: "AUTH_TOKEN",
});
