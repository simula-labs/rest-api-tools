import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../@types";

export type PostStatesResponse = Types.State

export type PostStatesRequestBody = {
  state: {
    name: string
    countryCode: string
  }
}

export const postStates = new BaseRequest<
  PostStatesRequestBody,
  PostStatesResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/admin",
  path: "/states",
  tokenKey: "AUTH_TOKEN",
});
