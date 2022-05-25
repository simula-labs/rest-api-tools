import { getCompanies } from "./companies/get";
import { getCompaniesRecommended } from "./companies/recommended/get";
import { getCompaniesId } from "./companies/[id]/get";
import { getCompaniesCompanyIdRecruitments } from "./companies/[company_id]/recruitments/get";
import { getRecruitments } from "./recruitments/get";
import { getRecruitmentsRecommended } from "./recruitments/recommended/get";
import { getRecruitmentsId } from "./recruitments/[id]/get";
import { getPrivacyPolicyHistoriesLatest } from "./privacy_policy_histories/latest/get";
import { getTermHistoriesLatest } from "./term_histories/latest/get";
import { patchAccountsId } from "./accounts/[id]/patch";
import { postAccountsResetPassword } from "./accounts/reset_password/post";
import { getEmploymentsId } from "./employments/[id]/get";
import { deleteEmploymentsId } from "./employments/[id]/delete";
import { getCities } from "./state_categories/get";
import { getOccupationMainCategories } from "./occupation_main_categories/get";
import { getIndustryCategories } from "./industry_categories/get";
import { getPlans } from "./products/get";
import { getPlansId } from "./products/[id]/get";
import { getEmploymentStatuses } from "./employment_statuses/get";
import { getEmploymentStatusesId } from "./employment_statuses/[id]/get";
import { getFeatures } from "./features/get"

export const publicApi = {
  getCompanies,
  getCompaniesRecommended,
  getCompaniesId,
  getCompaniesCompanyIdRecruitments,
  getRecruitments,
  getRecruitmentsRecommended,
  getRecruitmentsId,
  getPrivacyPolicyHistoriesLatest,
  getTermHistoriesLatest,
  patchAccountsId,
  postAccountsResetPassword,
  getEmploymentsId,
  deleteEmploymentsId,
  getCities,
  getOccupationMainCategories,
  getIndustryCategories,
  getPlans,
  getPlansId,
  getEmploymentStatuses,
  getEmploymentStatusesId,
  getFeatures
};