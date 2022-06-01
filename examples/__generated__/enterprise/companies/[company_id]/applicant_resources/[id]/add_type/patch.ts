/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../../shared/index";

export type PatchCompaniesCompanyIdApplicantResourcesIdAddUrlParams = {
  companyId: string
  id: string
} | undefined

export type PatchCompaniesCompanyIdApplicantResourcesIdAddResponse = Types.ApplicantResource & {
    account?: Types.Account & {
      jobs?: (Types.Job & {
        jobReviews?: (Types.JobReview & {
          skills?: Types.Skill[] | undefined
        })[] | undefined
      } & {
        jobOrder?: Types.JobOrder & {
          recruitment?: Types.Recruitment & {
            workplace?: Types.State | undefined
          } & {
            occupations?: Types.Occupation[] | undefined
          } & {
            industries?: Types.Industry[] | undefined
          } | undefined
        } | undefined
      } & {
        invoices?: Types.Invoice[] | undefined
      } & {
        company?: Types.Company | undefined
      })[] | undefined
    } & {
      profile?: Types.Profile & {
        placeOfResidence?: Types.State | undefined
      } | undefined
    } & {
      scoutFromCurrentCompany?: (Types.Scout & {
        message?: Types.Message & {
          recruitment?: Types.Recruitment | undefined
        } | undefined
      })[] | undefined
    } & {
      hopes?: (Types.Hope & {
        occupations?: Types.Occupation[] | undefined
      } & {
        industries?: Types.Industry[] | undefined
      } & {
        workplaces?: Types.State[] | undefined
      })[] | undefined
    } | undefined
  } & {
    room?: Types.Room & {
      account?: Types.Account | undefined
    } & {
      company?: Types.Company | undefined
    } | undefined
  }

export const patchCompaniesCompanyIdApplicantResourcesIdAdd = new BaseRequest<
  undefined,
  PatchCompaniesCompanyIdApplicantResourcesIdAddResponse,
  PatchCompaniesCompanyIdApplicantResourcesIdAddUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/applicant_resources/:id/add_type",
  tokenKey: "AUTH_TOKEN",
});