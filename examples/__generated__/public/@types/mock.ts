/* eslint-disable */
 import type * as Types from "../@types";
 
export const mockCompany = (modification?: Partial< Types.Company>): Types.Company => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    type: 'account',
    name: "string",
    nameKana: "string",
    headOfficeLocation: "string",
    yearOfEstablishment: "string",
    hpUrl: "string",
    phone: "string",
    capital: 0,
    isListed: false,
    representative: "string",
    representativeKana: "string",
    netSales: 0,
    numbersOfEmployees: "string",
    averageAge: 0,
    businessSummary: "string",
    corporatePr: "string",
    logoUrl: "string",
    coverImageUrl: "string",
    isSample: false,
    adminVerificationStatus: 'unspecified',
    publicVerificationStatus: 'unspecified',
    employmentPlacementPermitNumber: "string",
    recruitmentFeeRatio: 0,
    introductionFeeRatio: 0,
    deletedAt: "string",
    followerNums: 0,
    ...modification
  }
}

export const mockRecruitment = (modification?: Partial< Types.Recruitment>): Types.Recruitment => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    title: "string",
    department: "string",
    position: "string",
    jobDescription: "string",
    workConditions: "string",
    smokingRegulation: 'no_smoking_indoors',
    remoteWorkStatus: 'unselected',
    recruitmentManageId: "string",
    workplaceDescription: "string",
    salaryRemarks: "string",
    qualificationRequirement: "string",
    maxNumberOfHiring: "string",
    selectionProcess: "string",
    publishmentStatus: 'draft',
    isSample: false,
    accessibleType: 'public',
    type: 'career',
    minAmount: 0,
    maxAmount: 0,
    billingMethod: 'hourly',
    sourceType: 'client',
    estimatedUnitAmount: 0,
    targetCompanyStatus: 'none',
    recommendedPoint: "string",
    targetCompanyCertainName: "string",
    nearestStation: "string",
    projectNumber: "string",
    publishedSinceDate: "string",
    publishedUntilDate: "string",
    isOrganizationalChecked: false,
    isAdminChecked: false,
    pageViews: 0,
    appliedAccounts: 0,
    interestedAccounts: 0,
    targetCompany: mockCompany(),
    ...modification
  }
}

export const mockIndustry = (modification?: Partial< Types.Industry>): Types.Industry => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    name: "string",
    ...modification
  }
}

export const mockFeature = (modification?: Partial< Types.Feature>): Types.Feature => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    name: "string",
    type: 'default',
    sourceType: 'company',
    ...modification
  }
}

export const mockState = (modification?: Partial< Types.State>): Types.State => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    countryCode: "string",
    name: "string",
    ...modification
  }
}

export const mockAccount = (modification?: Partial< Types.Account>): Types.Account => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    emailVerificationStatus: 'unspecified',
    avatarUrl: "string",
    lastSignInAt: "string",
    lastNotificationReadAt: "string",
    isCareerScoutTarget: false,
    isProjectScoutTarget: false,
    isPublicWithWork: false,
    identityVerificationStatus: 'unspecified',
    identificationRequirements: [],
    missingRequirementsForGeneral: [],
    missingRequirementsForAgent: [],
    isSample: false,
    deletedAt: "string",
    registerAs: 'general',
    ...modification
  }
}

export const mockProfile = (modification?: Partial< Types.Profile>): Types.Profile => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    gender: 'MALE',
    nationality: "string",
    englishSkill: 'daily_conversation',
    dateOfBirth: "string",
    biography: "string",
    japaneseSkill: 'daily_conversation',
    recentIncomeAmount: 0,
    managementExperience: 'nothing',
    numberOfJobChanges: 0,
    academicBackground: "string",
    yearOfAgentExperience: 0,
    agentAreaInCharge: "string",
    agentSelfMessage: "string",
    agentSelfIntroduction: "string",
    agentAchievement: "string",

    files: {
      id: "string",
      name: "string",
      url: "string",
      contentType: "string",
      createdAt: "string",
    
    },
    ...modification
  }
}

export const mockSpecialtyCompanyType = (modification?: Partial< Types.SpecialtyCompanyType>): Types.SpecialtyCompanyType => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    content: "string",
    ...modification
  }
}

export const mockSpecialtyPosition = (modification?: Partial< Types.SpecialtyPosition>): Types.SpecialtyPosition => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    content: "string",
    ...modification
  }
}

export const mockOccupationMainCategory = (modification?: Partial< Types.OccupationMainCategory>): Types.OccupationMainCategory => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    name: "string",
    ...modification
  }
}

export const mockIndustryCategory = (modification?: Partial< Types.IndustryCategory>): Types.IndustryCategory => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    name: "string",
    ...modification
  }
}

export const mockExternalService = (modification?: Partial< Types.ExternalService>): Types.ExternalService => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    name: "string",
    isContracted: false,
    ...modification
  }
}

export const mockEmploymentStatus = (modification?: Partial< Types.EmploymentStatus>): Types.EmploymentStatus => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    name: "string",
    type: 'CAREER',
    projectClassification: 'contract',
    isSelectable: false,
    ...modification
  }
}

export const mockOccupation = (modification?: Partial< Types.Occupation>): Types.Occupation => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    name: "string",
    ...modification
  }
}

export const mockPrivacyPolicyHistory = (modification?: Partial< Types.PrivacyPolicyHistory>): Types.PrivacyPolicyHistory => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    content: "string",
    version: "string",
    ...modification
  }
}

export const mockTermHistory = (modification?: Partial< Types.TermHistory>): Types.TermHistory => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    content: "string",
    version: "string",
    type: 'common',
    ...modification
  }
}

export const mockEmployment = (modification?: Partial< Types.Employment>): Types.Employment => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    email: "string",
    lastNotificationReadAt: "string",
    isValid: false,
    department: "string",
    position: "string",
    ...modification
  }
}

export const mockStateCategory = (modification?: Partial< Types.StateCategory>): Types.StateCategory => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    name: "string",
    countryType: 'japan',
    ...modification
  }
}

export const mockPrice = (modification?: Partial< Types.Price>): Types.Price => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    active: "string",
    currency: "string",
    unitAmountWithoutTax: 0,
    taxForUnitAmount: 0,
    unitAmount: 0,
    ...modification
  }
}

export const mockProduct = (modification?: Partial< Types.Product>): Types.Product => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    name: "string",
    description: "string",
    active: false,
    type: 'good',
    planType: 'standard',
    number: 0,
    prices: [],
    ...modification
  }
}
