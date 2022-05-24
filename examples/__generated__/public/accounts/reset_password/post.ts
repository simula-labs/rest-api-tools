import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type PostAccountsResetPasswordRequestBody = {
  account: {
    email: string
  }
}

export const postAccountsResetPassword = new BaseRequest<
  PostAccountsResetPasswordRequestBody,
  undefined,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/public",
  path: "/accounts/reset_password",
  tokenKey: "AUTH_TOKEN",
});
