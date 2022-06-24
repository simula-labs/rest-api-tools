/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../shared/index";

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
  baseURL: "https://api.example.com/public",
  path: "/content_matters",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
