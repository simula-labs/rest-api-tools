import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type GetStatesIdUrlParams = {
  id: string
} | undefined
export type GetStatesIdResponse = Types.State
export const GetStates = new BaseRequest<>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/states/:id",
});