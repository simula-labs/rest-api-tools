import BaseRequest from "../baseRequest";
import type * as Types from "../@types";

export type PostFeaturesResponse = Types.Feature

export type PostFeaturesRequestBody = {
  feature: {
    name: string
    sourceType: 'company' | 'recruitment'
  }
}

export const PostFeatures = new BaseRequest<
  PostFeaturesRequestBody,
  PostFeaturesResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/admin",
  path: "/features",
});
