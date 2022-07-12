/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostRoomsRoomIdMarkAsReadUrlParams = {
  roomId: string
} | undefined

export const postRoomsRoomIdMarkAsRead = new BaseRequest<
  undefined,
  undefined,
  PostRoomsRoomIdMarkAsReadUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "post",
  baseURL: API_HOST,
  path: "/rooms/:roomId/mark_as_read",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
