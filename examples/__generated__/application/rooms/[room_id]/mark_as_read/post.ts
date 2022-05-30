/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PostRoomsRoomIdMarkAsReadUrlParams = {
  roomId: string
} | undefined

export const postRoomsRoomIdMarkAsRead = new BaseRequest<
  undefined,
  undefined,
  PostRoomsRoomIdMarkAsReadUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/public",
  path: "/rooms/:roomId/mark_as_read",
  tokenKey: "AUTH_TOKEN",
});
