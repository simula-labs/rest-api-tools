import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type GetRecruitmentsIdUrlParams = {
  id: string
} | undefined
export type GetRecruitmentsIdResponse = Types.Recruitment
export const GetRecruitments = new BaseRequest<>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/recruitments/:id",
});