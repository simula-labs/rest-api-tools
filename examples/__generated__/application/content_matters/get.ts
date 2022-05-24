import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type GetContentMattersResponse = {
  consentMatters: Types.ConsentMatter[]
}

export const getContentMatters = new BaseRequest<
  undefined,
  GetContentMattersResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/content_matters",
  tokenKey: "AUTH_TOKEN",
});
