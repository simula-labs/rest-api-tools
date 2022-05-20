/* eslint-disable */
 import type * as Types from "../@types";
 
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

export const mockConsentMatter = (modification?: Partial< Types.ConsentMatter>): Types.ConsentMatter => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    content: "string",
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

export const mockJobChangeCompletionReport = (modification?: Partial< Types.JobChangeCompletionReport>): Types.JobChangeCompletionReport => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    amount: 0,
    ...modification
  }
}

export const mockRecruitmentCompletionReport = (modification?: Partial< Types.RecruitmentCompletionReport>): Types.RecruitmentCompletionReport => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    amount: 0,
    systemFeeRatio: 0,
    systemFeeWithoutTax: 0,
    taxForSystemFee: 0,
    systemFee: 0,
    paymentStatus: 'unpaid',
    joinedDate: "string",
    memo: "string",
    isEnable: false,
    ...modification
  }
}

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
    ownerEmail: "string",
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
    targetCompanyCertainName: "string",
    recommendedPoint: "string",
    nearestStation: "string",
    projectNumber: "string",
    publishedSinceDate: "string",
    publishedUntilDate: "string",
    isApplied: false,
    isOrganizationalChecked: false,
    isAdminChecked: false,
    canNotReleaseReasons: [],
    pageViews: 0,
    appliedAccounts: 0,
    interestedAccounts: 0,

    targetCompany: mockCompany(),
    ...modification
  }
}

export const mockAccount = (modification?: Partial< Types.Account>): Types.Account => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    email: "string",
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
    isStudent: false,
    displayName: "string",
    isConcludedNda: false,
    profileCompleteness: 0,
    companies: [],
    ...modification
  }
}

export const mockProfile = (modification?: Partial< Types.Profile>): Types.Profile => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    firstName: "string",
    lastName: "string",
    firstNameKana: "string",
    lastNameKana: "string",
    gender: 'MALE',
    phone: "string",
    nationality: "string",
    postalCode: "string",
    address: "string",
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

export const mockSubscription = (modification?: Partial< Types.Subscription>): Types.Subscription => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    status: 'active',
    sinceDate: "string",
    untilDate: "string",
    ...modification
  }
}

export const mockIndustryHistory = (modification?: Partial< Types.IndustryHistory>): Types.IndustryHistory => {
  return {
    id: "string",
    yearOfExperience: 0,

    industry: {
      name: "string",
    
    },
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

export const mockAcademicHistory = (modification?: Partial< Types.AcademicHistory>): Types.AcademicHistory => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    name: "string",
    faculty: "string",
    sinceDate: "string",
    untilDate: "string",
    type: 'graduate_school_doctor',
    ...modification
  }
}

export const mockWorkHistory = (modification?: Partial< Types.WorkHistory>): Types.WorkHistory => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    name: "string",
    isEmployed: false,
    position: "string",
    sinceDate: "string",
    untilDate: "string",
    department: "string",
    ...modification
  }
}

export const mockSkill = (modification?: Partial< Types.Skill>): Types.Skill => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    name: "string",
    ...modification
  }
}

export const mockHope = (modification?: Partial< Types.Hope>): Types.Hope => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    type: 'career',
    amount: 0,
    billingMethod: 'hourly',
    timeToChangeJob: 0,
    specialNote: "string",
    ...modification
  }
}

export const mockJob = (modification?: Partial< Types.Job>): Types.Job => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    status: 'in_progress',
    isSample: false,
    ...modification
  }
}

export const mockProjectResult = (modification?: Partial< Types.ProjectResult>): Types.ProjectResult => {
  return {
    totalRate: 0,
    skills: [],
    totalJobsNum: 0,
    jobs: [],
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

export const mockOccupationHistory = (modification?: Partial< Types.OccupationHistory>): Types.OccupationHistory => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    yearOfExperience: 0,
    occupation: mockOccupation(),
    ...modification
  }
}

export const mockAchievement = (modification?: Partial< Types.Achievement>): Types.Achievement => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    content: "string",
    createdDate: "string",
    description: "string",
    ...modification
  }
}

export const mockPayout = (modification?: Partial< Types.Payout>): Types.Payout => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    amount: 0,
    currency: "string",
    status: 'pending',
    arrivalDate: "string",
    ...modification
  }
}

export const mockOfficialInformation = (modification?: Partial< Types.OfficialInformation>): Types.OfficialInformation => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    title: "string",
    content: "string",
    htmlContent: "string",
    isReleased: false,
    ...modification
  }
}
