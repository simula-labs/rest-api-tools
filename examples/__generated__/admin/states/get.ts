import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../@types";

export type GetStatesResponse = {
  states: Types.State[]
}

export const GetStates = new BaseRequest<
  undefined,
  GetStatesResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/states",
  tokenKey: "AUTH_TOKEN",
});
