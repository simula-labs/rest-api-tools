/* eslint-disable */
import { postAccountsResetPassword } from "./accounts/reset_password/post";
import { patchAccountsId } from "./accounts/[id]/patch";
import { getCompanies } from "./companies/get";
import { getCompaniesRecommended } from "./companies/recommended/get";
import { getCompaniesCompanyIdRecruitments } from "./companies/[company_id]/recruitments/get";
import { getCompaniesId } from "./companies/[id]/get";
import { getConsumptionTaxes } from "./consumption_taxes/get";
import { getEmploymentContractTerms } from "./employment_contract_terms/get";
import { getEmploymentStatuses } from "./employment_statuses/get";
import { getEmploymentStatusesId } from "./employment_statuses/[id]/get";
import { getEmploymentsId } from "./employments/[id]/get";
import { deleteEmploymentsId } from "./employments/[id]/delete";
import { getFeatures } from "./features/get";
import { getIndustryCategories } from "./industry_categories/get";
import { getOccupationMainCategories } from "./occupation_main_categories/get";
import { getPrivacyPolicyHistoriesLatest } from "./privacy_policy_histories/latest/get";
import { getPlans } from "./products/get";
import { getPlansId } from "./products/[id]/get";
import { getRecruitments } from "./recruitments/get";
import { getRecruitmentsRecommended } from "./recruitments/recommended/get";
import { getRecruitmentsId } from "./recruitments/[id]/get";
import { getCities } from "./state_categories/get";
import { getTechStack } from "./tech_stacks/get";
import { getTermHistoriesLatest } from "./term_histories/latest/get"

export const publicApi = {
  postAccountsResetPassword,
  patchAccountsId,
  getCompanies,
  getCompaniesRecommended,
  getCompaniesCompanyIdRecruitments,
  getCompaniesId,
  getConsumptionTaxes,
  getEmploymentContractTerms,
  getEmploymentStatuses,
  getEmploymentStatusesId,
  getEmploymentsId,
  deleteEmploymentsId,
  getFeatures,
  getIndustryCategories,
  getOccupationMainCategories,
  getPrivacyPolicyHistoriesLatest,
  getPlans,
  getPlansId,
  getRecruitments,
  getRecruitmentsRecommended,
  getRecruitmentsId,
  getCities,
  getTechStack,
  getTermHistoriesLatest
};