import type { ReadStream } from 'fs'

import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type PatchAccountsIdUrlParams = {
  id: string
} | undefined

export type PatchAccountsIdResponse = Types.Account

export type PatchAccountsIdRequestBody = {
  account: {
    email: string
    avatar: (File | ReadStream)
    isCareerScoutTarget: boolean
    isProjectScoutTarget: boolean
    isPublicWork: boolean
  }
}

export const patchAccountsId = new BaseRequest<
  PatchAccountsIdRequestBody,
  PatchAccountsIdResponse,
  PatchAccountsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/admin",
  path: "/accounts/:id",
  tokenKey: "AUTH_TOKEN",
});
