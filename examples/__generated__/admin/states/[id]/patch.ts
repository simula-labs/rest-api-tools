import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type PatchStatesIdUrlParams = {
  id: string
} | undefined
export type PatchStatesIdResponse = Types.State
export type PatchStatesIdRequestBody = {
  state: {
    name: string
    country_code: string
  }
}
export const PatchStates = new BaseRequest<>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/admin",
  path: "/states/:id",
});