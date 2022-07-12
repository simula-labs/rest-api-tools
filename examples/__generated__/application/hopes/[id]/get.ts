/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

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
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/hopes/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
