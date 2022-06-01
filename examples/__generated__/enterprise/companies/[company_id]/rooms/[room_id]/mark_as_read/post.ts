/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../../shared/index";

export type PostCompaniesCompanyIdRoomsRoomIdMarkAsReadUrlParams = {
  companyId: string
  roomId: string
} | undefined

export const postCompaniesCompanyIdRoomsRoomIdMarkAsRead = new BaseRequest<
  undefined,
  undefined,
  PostCompaniesCompanyIdRoomsRoomIdMarkAsReadUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/rooms/:roomId/mark_as_read",
  tokenKey: "AUTH_TOKEN",
});
