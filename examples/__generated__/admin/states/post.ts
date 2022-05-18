import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type PostStatesResponse = Types.State
export type PostStatesRequestBody = {
  state: {
    name: string
    country_code: string
  }
}
export const PostStates = new BaseRequest<>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/admin",
  path: "/states",
});