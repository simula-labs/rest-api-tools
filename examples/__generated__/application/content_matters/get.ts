/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetContentMattersResponse = {
  consentMatters: Types.ConsentMatter[]
}

export const getContentMatters = new BaseRequest<
  undefined,
  GetContentMattersResponse,
  undefined,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/content_matters",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
