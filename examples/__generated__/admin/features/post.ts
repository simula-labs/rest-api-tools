import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../@types";

export type PostFeaturesResponse = Types.Feature

export type PostFeaturesRequestBody = {
  feature: {
    name: string
    sourceType: 'company' | 'recruitment'
  }
}

export const postFeatures = new BaseRequest<
  PostFeaturesRequestBody,
  PostFeaturesResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/admin",
  path: "/features",
  tokenKey: "AUTH_TOKEN",
});
