import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type DeleteRecruitmentsIdUrlParams = {
  id: string
} | undefined

export const DeleteRecruitmentsId = new BaseRequest<
  undefined,
  undefined,
  DeleteRecruitmentsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/admin",
  path: "/recruitments/:id",
  tokenKey: "AUTH_TOKEN",
});
