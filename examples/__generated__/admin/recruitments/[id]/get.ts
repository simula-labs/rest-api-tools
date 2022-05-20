import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type GetRecruitmentsIdUrlParams = {
  id: string
} | undefined

export type GetRecruitmentsIdResponse = Types.Recruitment

export const GetRecruitmentsId = new BaseRequest<
  undefined,
  GetRecruitmentsIdResponse,
  GetRecruitmentsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/recruitments/:id",
  tokenKey: "AUTH_TOKEN",
});
