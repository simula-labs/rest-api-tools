/* eslint-disable */
 import type * as Types from "../@types";
 
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
    registerAs: 'general',
    deletedAt: "string",
    isStudent: false,
    isConcludedNda: false,
    isSupported: false,
    profileCompleteness: 0,
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
    maritalStatus: 'single',

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

export const mockEmployment = (modification?: Partial< Types.Employment>): Types.Employment => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    email: "string",
    isValid: false,
    department: "string",
    position: "string",
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
    isFollowing: false,
    followerNums: 0,
    ...modification
  }
}

export const mockRole = (modification?: Partial< Types.Role>): Types.Role => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    name: "string",
    type: 'default',
    description: "string",
    ...modification
  }
}

export const mockMessage = (modification?: Partial< Types.Message>): Types.Message => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    content: "string",
    actAs: 'personal',

    attachment: {
      filename: "string",
      contentType: "string",
      url: "string",
    
    },
    ...modification
  }
}

export const mockRoom = (modification?: Partial< Types.Room>): Types.Room => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",

    latestMessage: mockMessage(),

    isReadMessage: false,
    jobChangeCompletionReport: false,
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

export const mockNotification = (modification?: Partial< Types.Notification>): Types.Notification => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    subject: "string",
    content: "string",
    url: "string",
    isRead: false,
    notificationType: 'general',
    iconUrl: "string",
    ...modification
  }
}

export const mockSearchCondition = (modification?: Partial< Types.SearchCondition>): Types.SearchCondition => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    title: "string",
    target: 'recruitment',
    filters: [],
    ...modification
  }
}

export const mockApplicant = (modification?: Partial< Types.Applicant>): Types.Applicant => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
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
    isInterested: false,
    isApplied: false,
    pageViews: 0,
    appliedAccounts: 0,
    interestedAccounts: 0,

    targetCompany: mockCompany(),
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

export const mockProjectHistory = (modification?: Partial< Types.ProjectHistory>): Types.ProjectHistory => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    name: "string",
    position: "string",
    businessContent: "string",
    sinceDate: "string",
    untilDate: "string",
    isEmployed: false,
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
    ...modification
  }
}

export const mockPolicy = (modification?: Partial< Types.Policy>): Types.Policy => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    name: "string",
    category: 'unspecified',
    ...modification
  }
}

export const mockPermission = (modification?: Partial< Types.Permission>): Types.Permission => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    action: "string",
    conditions: "string",
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

export const mockIncomeHistory = (modification?: Partial< Types.IncomeHistory>): Types.IncomeHistory => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    name: "string",
    amount: 0,
    ...modification
  }
}

export const mockWithdrawal = (modification?: Partial< Types.Withdrawal>): Types.Withdrawal => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    amount: 0,
    feeAmount: 0,
    totalAmount: 0,
    ...modification
  }
}

export const mockBankAccount = (modification?: Partial< Types.BankAccount>): Types.BankAccount => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    bankName: "string",
    branchName: "string",
    accountNumber: "string",
    accountHolderName: "string",
    bankCode: "string",
    branchCode: "string",
    ...modification
  }
}

export const mockJobOrder = (modification?: Partial< Types.JobOrder>): Types.JobOrder => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    status: 'draft',
    customerName: "string",
    jobName: "string",
    number: "string",
    orderDate: "string",
    sinceDate: "string",
    untilDate: "string",
    feeType: 'time_based',
    feeCalculationSpan: 'monthly',
    unitTimeFee: 0,
    taxRatio: 0,
    fixedSubTotal: 0,
    fixedTax: 0,
    fixedAmount: 0,
    fixedTotalAmount: 0,
    jobDescription: "string",
    otherConditions: "string",
    reviewComment: "string",
    logicalFeeAmount: 0,
    isSample: false,
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

export const mockJobServiceItem = (modification?: Partial< Types.JobServiceItem>): Types.JobServiceItem => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    description: "string",
    quantity: 0,
    unitLabel: "string",
    unitPrice: 0,
    taxRatio: "string",
    amount: 0,
    ...modification
  }
}

export const mockRecruitmentInterest = (modification?: Partial< Types.RecruitmentInterest>): Types.RecruitmentInterest => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockSupport = (modification?: Partial< Types.Support>): Types.Support => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    project: false,
    career: false,
    ...modification
  }
}

export const mockProjectResult = (modification?: Partial< Types.ProjectResult>): Types.ProjectResult => {
  return {
    totalRate: 0,
    skills: [],
    totalJobsNum: 0,
    ...modification
  }
}

export const mockJobReview = (modification?: Partial< Types.JobReview>): Types.JobReview => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    starRating: 0,
    skillDescription: "string",
    improvementPoint: "string",
    isSample: false,
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

export const mockIndustryHistory = (modification?: Partial< Types.IndustryHistory>): Types.IndustryHistory => {
  return {
    id: "string",
    yearOfExperience: 0,
    ...modification
  }
}

export const mockOccupationHistory = (modification?: Partial< Types.OccupationHistory>): Types.OccupationHistory => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    yearOfExperience: 0,
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

export const mockJobChangeCompletionReport = (modification?: Partial< Types.JobChangeCompletionReport>): Types.JobChangeCompletionReport => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    amount: 0,
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

export const mockOccupationSubCategory = (modification?: Partial< Types.OccupationSubCategory>): Types.OccupationSubCategory => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    name: "string",
    ...modification
  }
}

export const mockPaymentMethod = (modification?: Partial< Types.PaymentMethod>): Types.PaymentMethod => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    brand: 'visa',
    expMonth: "string",
    expYear: "string",
    last4: "string",
    isDefault: false,
    ...modification
  }
}

export const mockNda = (modification?: Partial< Types.Nda>): Types.Nda => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    content: "string",
    version: "string",
    ...modification
  }
}

export const mockConsentNda = (modification?: Partial< Types.ConsentNda>): Types.ConsentNda => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    name: "string",
    address: "string",
    ...modification
  }
}

export const mockInvoice = (modification?: Partial< Types.Invoice>): Types.Invoice => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    title: "string",
    subTotal: 0,
    tax: 0,
    amount: 0,
    feeAmount: 0,
    totalAmount: 0,
    issuedAt: "string",
    status: 'unpaid',
    deadline: "string",
    isSample: false,
    note: "string",

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

export const mockInvoiceDetailedItem = (modification?: Partial< Types.InvoiceDetailedItem>): Types.InvoiceDetailedItem => {
  return {
    id: "string",
    createdAt: "string",
    updatedAt: "string",
    description: "string",
    quantity: 0,
    unitLabel: "string",
    unitPrice: 0,
    taxRatio: 0,
    amount: 0,
    ...modification
  }
}
