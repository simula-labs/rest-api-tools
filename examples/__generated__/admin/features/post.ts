import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type PostFeaturesResponse = Types.Feature
export type PostFeaturesRequestBody = {
  feature: {
    name: string
    source_type: 'company' | 'recruitment'
  }
}
export const PostFeatures = new BaseRequest<>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/admin",
  path: "/features",
});