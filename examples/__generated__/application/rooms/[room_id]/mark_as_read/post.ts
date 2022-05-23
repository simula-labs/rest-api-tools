import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

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
  baseURL: "https://api.example.com/application",
  path: "/rooms/:room_id/mark_as_read",
  tokenKey: "AUTH_TOKEN",
});
