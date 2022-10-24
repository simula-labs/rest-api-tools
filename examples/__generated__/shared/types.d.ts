/* eslint-disable */
export type AdminAccount = {
  createdAt: string
  email: string
  id: string
  updatedAt: string
}

export type Account = {
  alreadyKeepFromCurrentCompany: boolean
  createdAt: string
  email: string
  emailVerificationStatus: 'unspecified' | 'request' | 'verified'
  existsApplicantResourceFromCurrentCompany: boolean
  id: string
  identityVerificationStatus: 'unspecified' | 'verified' | 'checking' | 'failed'
  /** キャリアスカウト受け入れるか */
  isCareerScoutTarget: boolean
  isConcludedNda: boolean
  /** プロジェクトスカウト受け入れるか */
  isProjectScoutTarget: boolean
  /** ProbWorksプロジェクト実績を公開するか */
  isPublicWithWork: boolean
  /** サンプルか */
  isSample: boolean
  isSupported: boolean
  lastSignInAt: string
  /** エージェント必須項目の不足項目 */
  missingRequirementsForAgent: string[]
  /** 求職者必須項目の不足項目 */
  missingRequirementsForGeneral: string[]
  profileCompleteness: number
  registerAs: 'general' | 'company' | 'agent' | null
  updatedAt: string
  workExperienced: boolean
  isReadAccountInterest: boolean
  isFollowingCurrentCompany: boolean
}

export type Employment = {
  createdAt: string
  email: string
  id: string
  /** 有効かどうか（招待しただけの状態はfalse） */
  isValid: boolean
  updatedAt: string
}

export type Profile = {
  createdAt: string
  /** 「日常会話レベル」「ビジネス会話レベル」「ネイティブレベル」「なし」 */
  englishSkill: 'daily_conversation' | 'business_conversation' | 'native' | 'nothing'
  firstName: string
  gender: 'male' | 'female' | 'other'
  id: string
  /** 「日常会話レベル」「ビジネス会話レベル」「ネイティブレベル」「なし」 */
  japaneseSkill: 'daily_conversation' | 'business_conversation' | 'native' | 'nothing'
  lastName: string
  /** マネジメント経験人数 */
  managementExperience: 'from_6_to_10' | 'from_11_to_20' | 'from_21_to_50' | 'from_51_to_100' | 'from_101_to_500' | 'more_than_501' | 'nothing' | 'less_than_5'
  maritalStatus: 'single' | 'married' | null
  updatedAt: string
}

export type AccountWithTokenRes = {
  account: Account & {
    employments: Employment[]
  }

  profile: Profile
  token: string
}

export type WorkHistory = {
  createdAt: string
  department: string
  id: string
  /** 「在職中」「離職中」 */
  isEmployed: boolean
  name: string
  position: string
  sinceDate: string
  updatedAt: string
}

export type State = {
  /** 国名コードの数字 */
  countryCode: number
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

/** 職歴に紐付くプロジェクト経歴（name・positionどちらかは必須） */
export type ProjectHistory = {
  createdAt: string
  id: string
  isEmployed: boolean
  name: string
  sinceDate: string
  updatedAt: string
}

export type AcademicHistory = {
  createdAt: string
  id: string
  name: string
  sinceDate: string
  /** 「大学院（博士）」「大学院（修士）」「大学」「高専」「専門学校」「短期大学」「高校」 */
  type: 'graduate_school_doctor' | 'graduate_school_master' | 'university' | 'technical_college' | 'vocational_school' | 'junior_college' | 'high_school'
  untilDate: string
  updatedAt: string
}

export type Hope = {
  /** 「時給」「月給」「年収」「1案件」 */
  billingMethod: 'hourly' | 'monthly' | 'yearly' | 'with_project'
  createdAt: string
  id: string
  ratioOfOperation: 'once_a_week' | 'few_days_a_week' | 'four_days_a_week' | null
  type: 'career' | 'project'
  updatedAt: string
}

export type Skill = {
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

export type Achievement = {
  content: string
  createdAt: string
  createdDate: string
  id: string
  updatedAt: string
}

export type OccupationHistory = {
  createdAt: string
  id: string
  updatedAt: string
  /** 年単位 */
  yearOfExperience: number
}

/** 職種 */
export type Occupation = {
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

export type IndustryHistory = {
  createdAt: string
  id: string
  updatedAt: string
  /** 年単位 */
  yearOfExperience: number
}

/** 業種 */
export type Industry = {
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

export type Job = {
  createdAt: string
  id: string
  /** 公開するか */
  isPublic: boolean
  isSample: boolean
  /** 「進行中」「完了」 */
  status: 'in_progress' | 'completed'
  updatedAt: string
}

export type Applicant = {
  createdAt: string
  id: string
  updatedAt: string
}

export type Recruitment = {
  accessibleType: 'public' | 'private'
  appliedAccounts: number
  /** 「時給」「日給」「月給」「年収」「1案件」 */
  billingMethod: 'hourly' | 'monthly' | 'yearly' | 'with_project'
  /** 勤務地不問か */
  canLiveAndWorkAnywhere: boolean
  createdAt: string
  id: string
  interestedAccounts: number
  /** admin用のフラグ */
  isAdminChecked: boolean
  isApplied: boolean
  isInterested: boolean
  /** 企業内でのフラグ */
  isOrganizationalChecked: boolean
  /** サンプルか */
  isSample: boolean
  isWorkedWithTargetAccount: boolean
  pageViews: number
  /** 「下書き」「公開」「休止」「終了」「強制停止」 */
  publishmentStatus: 'draft' | 'published' | 'suspending' | 'terminated' | 'rejected'
  /** 「不可・時折（0-10%）」「可（10-90%）」「フルリモート（90%以上）」 */
  remoteWorkStatus: 'rarely' | 'normally' | 'full_remote' | null
  /** 「屋内禁煙」「喫煙室設置」「対策なし」「その他」 */
  smokingRegulation: 'no_smoking_indoors' | 'exist_smoking_room' | 'none' | 'other' | null
  /** 「クライアント作成（企業）」「エージェント作成」「サービス作成（クローリング）」 */
  sourceType: 'client' | 'agent' | 'service'
  /** 募集元企業の状態「なし」「非公開」「某社」「指定あり」 */
  targetCompanyStatus: 'none' | 'private' | 'certained' | 'specified' | null
  title: string
  /** 「転職」「副業・フリーランス」 */
  type: 'CareerRecruitment' | 'ProjectRecruitment'
  updatedAt: string
}

export type RecruitmentInterest = {
  createdAt: string
  id: string
  updatedAt: string
}

export type Scout = {
  /** 自動リマンド期間 */
  autoRemainderPeriod: 'nothing' | 'three_days' | 'five_days' | 'seven_days'
  createdAt: string
  id: string
  /** 重要フラグ */
  isChecked: boolean
  /** 開封済みか */
  isOpened: boolean
  /** 送信者種別(通常orエージェント) */
  senderType: 'basic' | 'agent'
  title: string
  type: 'CareerScout' | 'ProjectScout'
  updatedAt: string
  senderId: string
}

export type Message = {
  actAs: 'personal' | 'organizational'

  attachment: {
    filename: string
    contentType: string
    url: string
  } | null

  /** 企業側のみ返ってくる */
  content: string
  createdAt: string
  id: string
  isDraft: boolean
  /** general側のみ返ってくる */
  transformedContent: string
  updatedAt: string
}

export type AccountRes = Account & {
  latestWorkHistory: WorkHistory

  profile: Profile & {
    placeOfResidence: State
  }

  workHistories: (WorkHistory & {
    projectHistories: ProjectHistory[]
  })[]
  academicHistories: AcademicHistory[]
  hopes: Hope[]
  skills: Skill[]
  achievements: Achievement[]
  occupationHistories: (OccupationHistory & {
    occupation: Occupation
  })[]
  industryHistories: (IndustryHistory & {
    industry: Industry
  })[]
  jobs: Job[]
  applicantContactHistoriesFromCurrentCompany: {
    typename: 'RecruitmentInterest' | 'Applicant'
    timestamp: string

    resource: Partial<Applicant & {
      recruitment?: Recruitment | undefined
    } & RecruitmentInterest & {
      recruitment?: Recruitment | undefined
    }>
  }[]
  scoutsFromCurrentCompany: (Scout & {
    sender: Account
    message: Message
    recruitments: Recruitment[]
  })[]
}

export type AcademicHistoryRes = AcademicHistory

export type AcademicHistoriesRes = {
  academicHistories: AcademicHistory[]
}

export type AchievementsRes = {
  achievements: (Achievement)[]
  totalDataNums: number
}

export type AchievementRes = Achievement

export type AgentProfile = {
  /** admin審査状態 */
  adminVerificationStatus: 'pending' | 'requested' | 'verified' | 'rejected' | 'canceled' | 'deleted'
  id: string
  status: 'pending'
  updatedAt: string
  offerLetterUrls: string[]
}

export type SpecialtyCompanyType = {
  content: string
  createdAt: string
  id: string
  updatedAt: string
}

export type SpecialtyPosition = {
  content: string
  createdAt: string
  id: string
  updatedAt: string
}

/** 職種「大項目」 */
export type OccupationMainCategory = {
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

/** 業種カテゴリー */
export type IndustryCategory = {
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

export type AgentProfileRes = AgentProfile & {
  specialtyCompanyTypes?: SpecialtyCompanyType[] | undefined
  specialtyPositions?: SpecialtyPosition[] | undefined
  occupationMainCategories?: OccupationMainCategory[] | undefined
  industryCategories?: IndustryCategory[] | undefined
}

export type SpecialtyCompanyTypesRes = {
  specialtyCompanyTypes: (SpecialtyCompanyType)[]
}

export type SpecialtyCompanyTypeRes = SpecialtyCompanyType

export type SpecialtyPositionsRes = {
  specialtyPositions: (SpecialtyPosition)[]
}

export type SpecialtyPositionRes = SpecialtyPosition

export type Company = {
  /** admin審査状態 */
  adminVerificationStatus: 'unspecified' | 'requested' | 'verified' | 'rejected' | 'canceled'
  createdAt: string
  id: string
  /** admin指定の紹介報告手数料率 */
  introductionFeeRatio: number
  isFollowing: boolean
  isListed: boolean
  isSample: boolean
  name: string
  publicVerificationStatus: 'unspecified' | 'requested' | 'verified' | 'rejected'
  type: 'account' | 'stub'
  updatedAt: string
}

export type EmploymentStatus = {
  createdAt: string
  id: string
  /** 募集作成の時に選択可能か */
  isSelectable: boolean
  name: string
  /** 「請負」「準委任」「業務委託」 */
  projectClassification: 'contract' | 'quasi_mandate' | 'outsourcing' | null
  type: 'CAREER' | 'PROJECT'
  updatedAt: string
}

export type ApplicantsRes = {
  applicants: (Applicant & {
    recruitment: Recruitment & {
      company?: Company & {
        industries?: Industry[] | undefined
      } | undefined

      workplace?: State | undefined
      employmentStatus?: EmploymentStatus | undefined
      occupations?: Occupation[] | undefined
      industries?: Industry[] | undefined
    }

    account: Account
  })[]
  totalDataNums: number
}

export type ApplicantRes = Applicant & {
  recruitment: Recruitment
  account: Account
}

/** STIを使って実装する */
export type BankAccount = {
  accountHolderName: string
  accountNumber: string
  bankCode: string
  bankName: string
  branchCode: string
  branchName: string
  createdAt: string
  id: string
  updatedAt: string
}

export type BankAccountRes = BankAccount & {
  company: Company
}

export type Feature = {
  createdAt: string
  id: string
  name: string
  sourceType: 'company' | 'recruitment'
  type: 'default' | 'organizational'
  updatedAt: string
}

export type CompaniesRes = {
  companies: (Company & {
    recruitments: Recruitment[]
    industries: Industry[]
    features: Feature[]
  })[]
  totalDataNums: number
}

export type Channel = {
  createdAt: string
  id: string
  /** 未読メッセージがあればfalse */
  isReadMessage: boolean
  title: string
  updatedAt: string
}

export type OrgUnit = {
  createdAt: string
  id: string
  isRoot: boolean
  name: string
  updatedAt: string
}

export type ChannelsRes = {
  channels: (Channel & {
    latestMessage: Message
    scout: Scout
    applicant: Applicant
    messages: Message[]
    principalOrgUnits: OrgUnit[]
    principalEmployments: (Employment & {
      account?: Account | undefined
    })[]
  })[]
  totalDataNums: number
}

export type Subscription = {
  createdAt: string
  id: string
  sinceDate: string
  status: 'active' | 'past_due' | 'unpaid' | 'canceled' | 'incomplete' | 'incomplete_expired' | 'trialing' | 'all' | 'ended' | 'pending'
  untilDate: string
  updatedAt: string
}

export type Price = {
  active: string
  createdAt: string
  currency: string
  id: string
  /** 価格（税込） */
  unitAmount: number
  updatedAt: string
}

export type Product = {
  active: boolean
  createdAt: string
  id: string
  name: string
  planType: 'standard' | 'agent' | 'starter'
  type: 'good' | 'service'
  updatedAt: string
}

export type Role = {
  category: 'owner' | 'manager' | 'member' | 'guest'
  createdAt: string
  id: string
  /** 役割「general」「admin」など */
  name: string
  type: 'official' | 'custom'
  updatedAt: string
}

export type Policy = {
  category: 'unspecified' | 'account' | 'applicant' | 'recruitment' | 'payment'
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

export type Permission = {
  /** 権限「read:recruitment」「create:recruitment」など */
  action: string
  createdAt: string
  id: string
  updatedAt: string
}

export type EmploymentsRes = {
  employments: (Employment & {
    account: Account & {
      profile?: Profile & {
        placeOfResidence?: State | undefined
      } | undefined
    }

    company: Company & {
      owner?: Account & {
        profile?: Profile & {
          placeOfResidence?: State | undefined
        } | undefined
      } | undefined

      subscription?: Subscription & {
        price?: Price & {
          product?: Product | undefined
        } | undefined
      } | undefined

      features?: Feature[] | undefined
      industries?: Industry[] | undefined
    }

    roles: (Role & {
      policies?: (Policy & {
        permissions?: Permission[] | undefined
      })[] | undefined
    })[]
    orgUnits: OrgUnit[]
  })[]
}

export type HopesRes = {
  hopes: (Hope & {
    industries: Industry[]
  } & {
    occupations: Occupation[]
  } & {
    workplaces: State[]
  })[]
}

export type HopeRes = Hope & {
  industries: Industry[]
} & {
  occupations: Occupation[]
} & {
  workplaces: State[]
}

export type IncomeHistory = {
  amount: number
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

export type IncomeHistoriesRes = {
  incomeHistories: (IncomeHistory & {
    account: Account
  })[]
  totalDataNums: number
}

export type IndustryHistoriesRes = {
  industryHistories: (IndustryHistory & {
    account: Account
    industry: Industry
  })[]
}

export type IndustryHistoryRes = IndustryHistory & {
  account: Account
  industry: Industry
}

export type JobChangeCompletionReport = {
  /** 年収（税の概念なし） */
  amount: number
  createdAt: string
  id: string
  updatedAt: string
}

export type JobChangeCompletionReportsRes = {
  jobChangeCompletionReports: (JobChangeCompletionReport & {
    account: Account
  } & {
    company: Company
  })[]
}

export type JobChangeCompletionReportRes = JobChangeCompletionReport & {
  account: Account
} & {
  company: Company
}

/** appliedの場合はcustomer_name以外必須 */
export type JobOrder = {
  /** 消費税計算方法 */
  consumptionTaxCalculationMethod: 'floor' | 'ceil' | 'round'
  createdAt: string
  /** 稼働報酬制の単位（「一月あたり」「一日あたり」「一時間あたり」） */
  feeCalculationSpan: 'monthly' | 'daily' | 'hourly' | null
  /** 「稼働報酬制」「固定報酬制」 */
  feeType: 'time_based' | 'fixed'
  id: string
  isPublic: boolean
  isSample: boolean
  /** 稼動報酬制の源泉徴収の対象か */
  isTargetWithholdingTax: boolean
  /** 「下書き」「先方確認中」「締結済み」「却下」 */
  status: 'draft' | 'applied' | 'certificated' | 'rejected'
  updatedAt: string
  /** 源泉徴収税計算に消費税を含めるか */
  withholdingIncludedConsumptionTax: boolean
}

/** クローリングサービス */
export type ExternalService = {
  createdAt: string
  id: string
  isContracted: boolean
  name: string
  updatedAt: string
}

/** 固定報酬制の場合の各品目 */
export type JobServiceItem = {
  /** 合計金額 */
  amount: number
  createdAt: string
  /** 品目名 */
  description: string
  id: string
  /** 源泉徴収の対象か */
  isTargetWithholding: boolean
  /** 数量 */
  quantity: number
  /** 単位 */
  unitLabel: string
  /** 単価 */
  unitPrice: number
  updatedAt: string
}

/** 消費税 */
export type ConsumptionTax = {
  country: 'jpn'
  id: string
  /** 表示名 */
  name: string
  /** 税率 */
  ratio: number
}

/** 発注で、消費税率ごとに金額を保持するテーブル */
export type JobOrderConsumptionTaxPrice = {
  amount: number
  id: string
}

/** 発注で、源泉徴収税率ごとに金額を保持するテーブル */
export type JobOrderWithholdingTaxPrice = {
  amount: number
  id: string
}

export type JobOrdersRes = {
  jobOrders: (JobOrder & {
    account: Account

    company: Company & {
      industries?: string | undefined
      owner?: string | undefined
    }

    recruitment: Recruitment & {
      workplace?: State | undefined
      author?: Account | undefined
      externalService?: ExternalService | undefined
      employmentStatuses?: EmploymentStatus[] | undefined
      occupations?: Occupation[] | undefined
      industries?: Industry[] | undefined
      company?: Company | undefined
    }

    job: Job & {
      ''?: Account | undefined
    }

    jobServiceItems: (JobServiceItem & {
      consumptionTax?: ConsumptionTax | undefined
    })[]
    jobOrderConsumptionTaxPrices: (JobOrderConsumptionTaxPrice & {
      consumptionTax?: ConsumptionTax | undefined
    })[]
    jobOrderWithholdingTaxPrice: JobOrderWithholdingTaxPrice
  })[]
  totalDataNums: number
}

export type JobsRes = {
  jobs: (Job & {
    account: Account
  } & {
    company: Company & {
      industries?: Industry[] | undefined
    } & {
      owner?: Account & {
        profile?: Profile & {
          placeOfResidence?: State | undefined
        } | undefined
      } | undefined
    }
  } & {
    jobOrder: JobOrder & {
      recruitment?: Recruitment & {
        workplace?: State | undefined
      } & {
        author?: Account | undefined
      } & {
        employmentStatuses?: EmploymentStatus[] | undefined
      } & {
        occupations?: Occupation[] | undefined
      } & {
        industries?: Industry[] | undefined
      } & {
        company?: Company | undefined
      } | undefined
    } & {
      account?: Account | undefined
    }
  } & {
    jobReviews: string
  } & {
    invoices: string
  })[]
  totalDataNums: number
}

export type MessagesRes = {
  messages: (Message & {
    sender: Account & {
      profile?: Profile & {
        placeOfResidence?: State[] | undefined
        specialtyCompanyTypes?: SpecialtyCompanyType[] | undefined
        specialtyPositions?: SpecialtyPosition[] | undefined
        occupationMainCategories?: OccupationMainCategory[] | undefined
        industryCategories?: IndustryCategory[] | undefined
      } | undefined
    }

    recruitments: (Recruitment & {
      workplace?: State | undefined
      author?: Account | undefined
      externalService?: ExternalService | undefined
      employmentStatuses?: EmploymentStatus[] | undefined
      occupations?: Occupation[] | undefined
      industries?: Industry[] | undefined
      properties?: string | undefined
    })[]
    channel: Channel
  })[]
  totalDataNums: number
}

export type ConsentMatter = {
  content: string
  createdAt: string
  id: string
  updatedAt: string
}

export type Notification = {
  content: string
  createdAt: string
  id: string
  /** 「未読」「既読」 */
  isRead: boolean
  /** 「通常通知」or「メッセージ通知」 */
  notificationType: 'general' | 'message'
  updatedAt: string
  url: string
}

export type Room = {
  createdAt: string
  /** 未返信メッセージがあるか */
  existsNotReplied: boolean
  id: string
  /** 未読メッセージがあればfalse */
  isReadMessage: boolean
  updatedAt: string
}

export type NotificationsRes = {
  notifications: (Notification & {
    account?: Account | undefined
    company?: Company | undefined
    employment?: Employment | undefined
    room?: Room | undefined
  })[]
  totalDataNums?: number | undefined
}

export type OccupationHistoriesRes = {
  occupationHistories: (OccupationHistory & {
    account: Account
    occupation: Occupation
  })[]
}

export type OccupationHistoryRes = OccupationHistory & {
  account: Account
  occupation: Occupation
}

export type ProfileRes = Profile & {
  placeOfResidence: State
}

export type ProjectResult = {
  totalJobsNum: number
  totalRate: number
}

export type JobReview = {
  createdAt: string
  id: string
  /** サンプルか */
  isSample: boolean
  starRating: number
  updatedAt: string
}

export type ProjectResultRes = ProjectResult & {
  jobs: (Job & {
    jobOrder: JobOrder & {
      recruitment?: Recruitment & {
        workplace?: State | undefined
        occpations?: Occupation[] | undefined
        industries?: Industry[] | undefined
      } | undefined
    }

    jobReviews: (JobReview & {
      skills?: Skill[] | undefined
    })[]
  })[]
  skills: Skill[]
}

export type RecruitmentInterestsRes = {
  recruitments: (Recruitment & {
    occupations: Occupation[]
    industries: Industry[]
    workplace: State
    company: Company
  })[]
  totalDataNums: number
}

export type EmploymentContractTerm = {
  createdAt: string
  id: string
  name: string
  /** 「1ヵ月未満」「1ヵ月以上3ヵ月未満」「3ヵ月以上6ヵ月未満」「6ヵ月以上」 */
  term: 'less_than_one_month' | 'one_to_three_months' | 'three_to_six_months' | 'more_than_six_months'
  updatedAt: string
}

export type TechStack = {
  accessibility: 'public' | 'private'
  category: 'language' | 'framework' | 'infrastructure' | 'design_tool' | 'other'
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

export type RecruitmentRes = Recruitment & {
  company: Company
  workplace: State

  author: Account & {
    profile: Profile & {
      placeOfResidence?: State | undefined
      specialtyCompanyTypes?: SpecialtyCompanyType[] | undefined
      specialtyPositions?: SpecialtyPosition[] | undefined
      occupationMainCategories?: OccupationMainCategory[] | undefined
      industryCategories?: IndustryCategory[] | undefined
    }

    agentProfile: AgentProfile
  }

  externalService: ExternalService
  employmentStatuses: EmploymentStatus[]
  occupations: Occupation[]
  industries: Industry[]
  features: Feature[]
  employmentContractTerms: EmploymentContractTerm[]
  techStack: TechStack[]
  targetCompany: Company
}

export type ScoutTemplate = {
  category: 'career' | 'project' | 'career_remainder' | 'project_remainder'
  content: string
  createdAt: string
  id: string
  /** お気に入りしているか */
  isInterested: boolean
  name: string
  /** 並び順 */
  position: number
  scope: 'mine' | 'organizational'
  title: string
  updatedAt: string
}

export type ScoutsRes = {
  scouts: (Scout & {
    company: Company
    receiver: Account
    sender: Account
    message: Message
    autoRemainderTemplate: ScoutTemplate
    recruitments: Recruitment[]
    principalOrgUnits: OrgUnit[]
    principalEmployments: (Employment & {
      account?: Account | undefined
    })[]
  })[]
  totalDataNums: number
}

export type SkillsRes = {
  skills: Skill[]
}

export type Support = {
  career: boolean
  createdAt: string
  id: string
  project: boolean
  updatedAt: string
}

export type SupportRes = Support & {
  account: Account
}

/** STIを使って実装する */
export type Withdrawal = {
  amount: number
  createdAt: string
  feeAmount: number
  id: string
  totalAmount: number
  updatedAt: string
}

export type WithdrawalsRes = {
  withdrawals: (Withdrawal & {
    account: Account
  })[]
  totalDataNums: number
}

export type WithdrawalRes = Withdrawal & {
  account: Account
}

export type WorkHistoriesRes = {
  workHistories: (WorkHistory & {
    account: Account
  } & {
    projectHistories: ProjectHistory[]
  })[]
  totalDataNums: number
}

export type WorkHistoryRes = WorkHistory & {
  account: Account
} & {
  projectHistories: ProjectHistory[]
}

export type AccountsRes = {
  accounts: (Account & {
    latestWorkHistory: WorkHistory

    profile: Profile & {
      placeOfResidence?: State | undefined
    }

    workHistories: (WorkHistory & {
      projectHistories?: ProjectHistory[] | undefined
    })[]
    academicHistories: AcademicHistory[]
    hopes: Hope[]
    skills: Skill[]
    achievements: Achievement[]
    occupationHistories: (OccupationHistory & {
      occupation?: Occupation | undefined
    })[]
    industryHistories: (IndustryHistory & {
      industry?: Industry | undefined
    })[]
    jobs: Job[]
    applicantContactHistoriesFromCurrentCompany: {
      typename?: 'RecruitmentInterest' | 'Applicant' | undefined
      timestamp?: string | undefined

      resource?: Partial<Applicant & {
        recruitment?: Recruitment | undefined
      } & RecruitmentInterest & {
        recruitment?: Recruitment | undefined
      }> | undefined
    }[]
    scoutsFromCurrentCompany: (Scout & {
      sender: Account
      message: Message
      recruitments: Recruitment[]
    })[]
    scoutsFromCurrentAccount?: (Scout & {
      sender: Account
      message: Message
      recruitments: Recruitment[]
    })[] | undefined
  })[]
  totalDataNums: number
}

export type MessageRes = Message & {
  sender: Account & {
    profile: Profile & {
      placeOfResidence?: State[] | undefined
      specialtyCompanyTypes?: SpecialtyCompanyType[] | undefined
      specialtyPositions?: SpecialtyPosition[] | undefined
      occupationMainCategories?: OccupationMainCategory[] | undefined
      industryCategories?: IndustryCategory[] | undefined
    }
  }

  recruitments: (Recruitment & {
    workplace: State
    author: Account
    externalService: ExternalService
    employmentStatuses: EmploymentStatus[]
    occupations: Occupation[]
    industries: Industry[]
    company: Company
  })[]
  channel: Channel
}

export type ChannelRes = Channel & {
  latestMessage: Message
  scout: Scout
  applicant: Applicant
  messages: Message[]
  principalOrgUnits: OrgUnit[]
  principalEmployments: (Employment & {
    account: Account
  })[]
}

export type PaymentMethod = {
  brand: 'visa' | 'mastercard' | 'jcb' | 'american_express' | 'diners'
  createdAt: string
  expMonth: string
  expYear: string
  id: string
  isDefault: boolean
  last4: string
  updatedAt: string
}

export type CompanyRes = Company & {
  owner: Account & {
    profile: Profile & {
      placeOfResidence?: State | undefined
    }
  }

  subscription: Subscription & {
    price: Price & {
      product?: Product | undefined
    }
  }

  recruitments: Recruitment[]
  industries: Industry[]
  features: Feature[]
  paymentMethods: PaymentMethod[]
  orgUnits: OrgUnit[]
  externalServices: ExternalService[]
}

export type RecruitmentsRes = {
  recruitments: (Recruitment & {
    company: Company
    workplace: State

    author: Account & {
      profile?: Profile & {
        placeOfResidence?: State | undefined
        specialtyCompanyTypes?: SpecialtyCompanyType[] | undefined
        specialtyPositions?: SpecialtyPosition[] | undefined
        occupationMainCategories?: OccupationMainCategory[] | undefined
        industryCategories?: IndustryCategory[] | undefined
      } | undefined
    }

    externalService: ExternalService
    employmentStatuses: EmploymentStatus[]
    occupations: Occupation[]
    industries: Industry[]
    features: Feature[]
  })[]
  totalDataNums: number
}

export type IndustryCategoriesRes = {
  industryCategories: (IndustryCategory & {
    industries: Industry[]
  })[]
}

export type Invoice = {
  /** 消費税計算方法 */
  consumptionTaxCalculationMethod: 'floor' | 'ceil' | 'round'
  createdAt: string
  id: string
  /** 承認済みか */
  isApproved: boolean
  /** サンプルか */
  isSample: boolean
  /** 「下書き」「公開」「取り下げ済み」 */
  issuingStatus: 'draft' | 'fixed' | 'withdrawn'
  paymentMethod: 'bank' | 'credit_card'
  /** 「支払い待ち」「決済待ち」「支払いおよび決済待ち」「決済失敗」「完了」 */
  status: 'waiting_for_payment' | 'waiting_for_settlement' | 'waiting_for_payment_and_settlement' | 'failed_settlement' | 'completed'
  updatedAt: string
  /** 源泉徴収税計算に消費税を含めるか */
  withholdingIncludedConsumptionTax: boolean
}

export type InvoiceDetailedItem = {
  /** 金額(税込) */
  amount: number
  createdAt: string
  /** 項目名 */
  description: string
  id: string
  /** 数量 */
  quantity: number
  /** 単位 */
  unitLabel: string
  /** 単価 */
  unitPrice: number
  updatedAt: string
}

/** 請求で、消費税率ごとに金額を保持するテーブル */
export type InvoiceConsumptionTaxPrice = {
  amount: number
  id: string
}

/** 請求で、源泉徴収税率ごとに金額を保持するテーブル */
export type InvoiceWithholdingTaxPrice = {
  amount: number
  id: string
}

export type InvoiceRes = Invoice & {
  job: Job & {
    jobOrder: JobOrder
  }

  invoiceDetailedItems: (InvoiceDetailedItem & {
    consumptionTax: ConsumptionTax
  })[]
  invoiceConsumptionTaxPrices: (InvoiceConsumptionTaxPrice & {
    consumptionTax: ConsumptionTax
  })[]
  invoiceWithholdingTaxPrice: InvoiceWithholdingTaxPrice
}

export type JobOrderRes = JobOrder & {
  account: Account

  company: Company & {
    industries: string
    owner: string
  }

  recruitment: Recruitment & {
    workplace: State
    author: Account
    externalService: ExternalService
    employmentStatuses: EmploymentStatus[]
    occupations: Occupation[]
    industries: Industry[]
    company: Company
  }

  job: Job & {
    account: Account
  }

  jobServiceItems: (JobServiceItem & {
    consumptionTax: ConsumptionTax
  })[]
  jobOrderConsumptionTaxPrices: (JobOrderConsumptionTaxPrice & {
    consumptionTax: ConsumptionTax
  })[]
  jobOrderWithholdingTaxPrice: JobOrderWithholdingTaxPrice
}

export type JobReviewRes = JobReview & {
  skills: Skill[]
} & {
  job: Job
}

export type JobRes = Job & {
  account: Account
} & {
  company: Company & {
    industries: Industry[]
  } & {
    owner: Account & {
      profile?: Profile & {
        placeOfResidence?: State | undefined
      } | undefined
    }
  }
} & {
  jobOrder: JobOrder & {
    recruitment: Recruitment & {
      workplace?: State | undefined
    } & {
      author?: Account | undefined
    } & {
      employmentStatuses?: EmploymentStatus[] | undefined
    } & {
      occupations?: Occupation[] | undefined
    } & {
      industries?: Industry[] | undefined
    } & {
      company?: Company | undefined
    }
  } & {
    account: Account
  }
} & {
  jobReviews: string
} & {
  invoices: string
}

export type InvoicesRes = {
  invoices: (Invoice & {
    job: Job & {
      jobOrder?: JobOrder | undefined
    }

    invoiceDetailedItems: (InvoiceDetailedItem & {
      consumptionTax?: ConsumptionTax | undefined
    })[]
    invoiceConsumptionTaxPrices: (InvoiceConsumptionTaxPrice & {
      consumptionTax?: ConsumptionTax | undefined
    })[]
    invoiceWithholdingTaxPrice: InvoiceWithholdingTaxPrice
  })[]
  totalDataNums: number
}

export type JobReviewsRes = {
  jobReviews: (JobReview & {
    skills: Skill[]
  } & {
    job: Job
  })[]
  totalDataNums: number
}

export type Nda = {
  content: string
  createdAt: string
  id: string
  updatedAt: string
  version: string
}

export type ConsentNda = {
  address: string
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

/** 職種「中項目」 */
export type OccupationSubCategory = {
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

export type OccupationMainCategoriesRes = {
  occupationMainCategories: (OccupationMainCategory & {
    occupationSubCategories: (OccupationSubCategory & {
      occupations?: Occupation[] | undefined
    })[]
  })[]
}

export type PoliciesRes = {
  policies: (Policy & {
    permissions: Permission[]
  })[]
}

export type ScoutRes = Scout & {
  company: Company
  receiver: Account
  sender: Account
  message: Message
  autoRemainderTemplate: ScoutTemplate
  recruitments: Recruitment[]
  principalOrgUnits: OrgUnit[]
  principalEmployments: (Employment & {
    account: Account
  })[]
}

export type SkillRes = Skill

export type StateCategory = {
  /** 「日本」「海外」「その他」 */
  countryType: 'japan' | 'international' | 'other' | null
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

export type StateCategoriesRes = {
  stateCategories: (StateCategory & {
    states: State[]
  })[]
}

export type StateCategoryRes = StateCategory & {
  states: State[]
}

export type TechStackRes = TechStack

export type ProjectHistoriesRes = {
  projectHistories: (ProjectHistory & {
    workHistory: WorkHistory
  })[]
  totalDataNums: number
}

export type ProjectHistoryRes = ProjectHistory & {
  workHistory: WorkHistory
}

export type RecruitmentCompletionReport = {
  /** 年収（税の概念なし） */
  amount: number
  /** 請求先メールアドレス */
  createdAt: string
  id: string
  isEnable: boolean
  paymentStatus: 'unpaid' | 'paid' | 'failed' | 'pending'
  /** 手数料（税込） */
  systemFee: number
  updatedAt: string
}

export type IntroductionCompletionReport = {
  /** 年収 */
  amount: number
  createdAt: string
  id: string
  isEnable: boolean
  paymentStatus: 'unpaid' | 'paid' | 'failed' | 'pending'
  updatedAt: string
}

export type RoomRes = Room & {
  latestMessage: Message

  account: Account & {
    profile: Profile & {
      placeOfResidence?: State | undefined
    }
  }

  company: Company & {
    industries: Industry[]
    features: Feature[]
  }

  jobChangeCompletionReport: JobChangeCompletionReport
  recruitmentCompletionReport: RecruitmentCompletionReport
  introductionCompletionReport: IntroductionCompletionReport
  channels: (Channel & {
    messages: Message[]
    principalOrgUnits: OrgUnit[]
    principalEmployments: (Employment & {
      account?: Account | undefined
    })[]
  })[]
}

export type RoomsRes = {
  rooms: (Room & {
    latestMessage: Message

    account: Account & {
      profile?: Profile & {
        placeOfResidence?: State | undefined
      } | undefined
    }

    company: Company & {
      industries?: Industry[] | undefined
      features?: Feature[] | undefined
    }

    jobChangeCompletionReport: JobChangeCompletionReport
    recruitmentCompletionReport: RecruitmentCompletionReport
    introductionCompletionReport: IntroductionCompletionReport
    channels: (Channel & {
      messages?: Message[] | undefined
      principalOrgUnits?: OrgUnit[] | undefined
      principalEmployments?: (Employment & {
        account?: Account | undefined
      })[] | undefined
    })[]
  })[]
  totalDataNums: number
}

export type EmploymentContractTermsRes = {
  employmentContractTerms: (EmploymentContractTerm)[]
  totalDataNums: number
}

export type EmploymentStatusesRes = {
  employmentStatuses: (EmploymentStatus)[]
  totalDataNums: number
}

export type EmploymentStatusRes = EmploymentStatus

export type FeaturesRes = {
  features: (Feature)[]
}

export type PrivacyPolicyHistory = {
  content: string
  createdAt: string
  id: string
  updatedAt: string
  version: string
}

export type ProductsRes = {
  products: (Product)[]
}

export type ProductRes = Product

export type TechStacksRes = {
  techStacks: (TechStack)[]
  totalDataNums: string
}

export type TermHistory = {
  content: string
  createdAt: string
  id: string
  type: 'common' | 'plan'
  updatedAt: string
  version: string
}

export type AccountSearchCondition = {
  academicBackground?: 'graduate_school_doctor' | 'graduate_school_master' | 'university' | 'technical_college' | 'vocational_school' | 'junior_college' | 'high_school' | undefined
  createdAt: string
  currentCompanyName?: string | undefined
  currentCompanyNameOr?: boolean | undefined
  currentStateIds?: string[] | undefined
  cvUpdatedIn?: 'three_day' | 'one_week' | 'one_month' | 'three_month' | 'half_year' | undefined
  employmentStatus?: 'employed' | 'unemployed' | undefined
  englishSkill?: 'daily_conversation' | 'business_conversation' | 'native' | undefined
  gender?: 'male' | 'female' | 'other' | undefined
  hopingIndustryIds?: string[] | undefined
  hopingMaxIncomeAmount?: number | undefined
  hopingMinIncomeAmount?: number | undefined
  hopingOccupationIds?: string[] | undefined
  hopingStateIds?: string[] | undefined
  id: string
  industryHistories?: {
    name: string
    industryId: string
    yearOfIndustryExperience: number
  }[] | undefined
  interestedInCompany?: boolean | undefined
  interestedInRecruitment?: boolean | undefined
  japaneseSkill?: 'daily_conversation' | 'business_conversation' | 'native' | undefined
  keyword?: string | undefined
  keywordOr?: boolean | undefined
  lastUsedDate: string
  lastSignInAt?: 'within_one_day' | 'within_one_week' | 'within_one_month' | undefined
  managementExperience?: 'everything' | 'from_6_to_10' | 'from_11_to_20' | 'from_21_to_50' | 'from_51_to_100' | 'from_101_to_500' | 'more_than_501' | undefined
  maritalStatus?: 'single' | 'married' | undefined
  maxAge?: number | undefined
  maxRecentIncomeAmount?: number | undefined
  minAge?: number | undefined
  minRecentIncomeAmount?: number | undefined
  numberOfJobChanges?: 'unspecified' | 'nothing' | 'one' | 'two' | 'three' | 'four' | undefined
  occupationHistories?: {
    name: string
    occupationId: string
    yearOfOccupationExperience: number
  }[] | undefined
  position: number
  positionName?: string | undefined
  positionNameOr?: boolean | undefined
  recruitmentPageView?: boolean | undefined
  scoutSettings?: ('career' | 'project')[] | undefined
  sortAscLastSignInAt?: boolean | undefined
  sortAscProfileUpdatedAt?: boolean | undefined
  title: string
  updatedAt: string
}

export type AccountSearchConditionsRes = {
  accountSearchConditions: (AccountSearchCondition & {
    company: Company
  })[]
  totalDataNums: number
}

export type AccountSearchConditionRes = AccountSearchCondition & {
  company: Company
}

export type ApplicantResource = {
  careerStatus: 'backlog' | 'checked' | 'interviewing' | 'offered' | 'joined' | 'rejected'
  createdAt: string
  id: string
  /** 企業側の管理用フラグ（転職） */
  isCheckedCareer: boolean
  /** 企業側の管理用フラグ（副業・フリーランス） */
  isCheckedProject: boolean
  /** サンプルか */
  isSample: boolean
  /** 閲覧したか（Newマークの有無）（転職） */
  isWatchedCareer: boolean
  /** 閲覧したか（Newマークの有無）（副業・フリーランス） */
  isWatchedProject: boolean
  /** 人材管理追加のきっかけ */
  origin: 'applicant' | 'scout'
  projectStatus: 'backlog' | 'in_progress' | 'closed'
  /** 応募したRecruitmentのSourceType（応募じゃなければnil） */
  recruitmentSourceType: 'client' | 'agent'
  type: 'CareerApplicantResource' | 'ProjectApplicantResource'
  updatedAt: string
}

export type ApplicantResourcesRes = {
  applicantResources: (ApplicantResource & {
    account: Account & {
      jobs?: (Job & {
        jobReviews?: (JobReview & {
          skills?: Skill[] | undefined
        })[] | undefined

        jobOrder?: JobOrder & {
          recruitment?: Recruitment & {
            workplace?: State | undefined
            occupations?: Occupation[] | undefined
            industries?: Industry[] | undefined
          } | undefined
        } | undefined

        invoices?: Invoice[] | undefined
        company?: Company | undefined
      })[] | undefined

      profile?: Profile & {
        placeOfResidence?: State | undefined
      } | undefined

      scoutFromCurrentCompany?: (Scout & {
        message?: Message & {
          recruitment?: Recruitment | undefined
        } | undefined
      })[] | undefined
      hopes?: (Hope & {
        occupations?: Occupation[] | undefined
        industries?: Industry[] | undefined
        workplaces?: State[] | undefined
      })[] | undefined
    }

    room: Room & {
      account?: Account | undefined
      company?: Company | undefined
    }

    principalOrgUnits: OrgUnit[]
    principalEmployments: (Employment & {
      account?: Account | undefined
    })[]
  })[]
  totalDataNums: number
}

export type ApplicantResourceRes = ApplicantResource & {
  account: Account & {
    jobs: (Job & {
      jobReviews?: (JobReview & {
        skills?: Skill[] | undefined
      })[] | undefined

      jobOrder?: JobOrder & {
        recruitment?: Recruitment & {
          workplace?: State | undefined
          occupations?: Occupation[] | undefined
          industries?: Industry[] | undefined
        } | undefined
      } | undefined

      invoices?: Invoice[] | undefined
      company?: Company | undefined
    })[]

    profile: Profile & {
      placeOfResidence?: State | undefined
    }

    scoutFromCurrentCompany: (Scout & {
      message?: Message & {
        recruitment?: Recruitment | undefined
      } | undefined
    })[]
    hopes: (Hope & {
      occupations?: Occupation[] | undefined
      industries?: Industry[] | undefined
      workplaces?: State[] | undefined
    })[]
  }

  room: Room & {
    account: Account
    company: Company
  }

  principalOrgUnits: OrgUnit[]
  principalEmployments: (Employment & {
    account: Account
  })[]
}

export type EmploymentRes = Employment & {
  account: Account & {
    profile: Profile & {
      placeOfResidence?: State | undefined
    }
  }

  company: Company & {
    owner: Account & {
      profile?: Profile & {
        placeOfResidence?: State | undefined
      } | undefined
    }

    subscription: Subscription & {
      price?: Price & {
        product?: Product | undefined
      } | undefined
    }

    features: Feature[]
    industries: Industry[]
  }

  roles: (Role & {
    policies: (Policy & {
      permissions?: Permission[] | undefined
    })[]
  })[]
  orgUnits: OrgUnit[]
}

export type IntroductionCompletionReportsRes = {
  introductionCompletionReports: (IntroductionCompletionReport & {
    account: Account
    company: Company
    agent: Account
    occupation: Occupation
    industry: Industry
  })[]
}

export type IntroductionCompletionReportRes = IntroductionCompletionReport & {
  account: Account
  company: Company
  agent: Account
  occupation: Occupation
  industry: Industry
}

export type KeepingList = {
  createdAt: string
  id: string
  /** リスト名 */
  name: string
  position: number
  /** params[target_account_id]がそのリストに存在するか */
  targetAccountExist: boolean
  updatedAt: string
}

export type KeepingListsRes = {
  keepingLists: (KeepingList & {
    lastUpdatedByAccount: Account
    principalOrgUnits: OrgUnit[]
    principalEmployments: (Employment & {
      account?: Account | undefined
    })[]
  })[]
  totalDataNums: number
}

export type KeepingListRes = KeepingList & {
  lastUpdatedByAccount: Account
  principalOrgUnits: OrgUnit[]
  principalEmployments: (Employment & {
    account: Account
  })[]
}

export type OrgUnitRes = OrgUnit & {
  childOrgUnits: (OrgUnit & {
    childOrgUnits: (OrgUnit & {
      childOrgUnits?: OrgUnit[] | undefined
    })[]
  })[]
}

export type OrgUnitsRes = {
  orgUnits: OrgUnit[]
}

export type PaymentHistory = {
  amount: number
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

export type PaymentHistoriesRes = {
  paymentHistories: (PaymentHistory & {
    company: Company
    paymentMethod: PaymentMethod
    price: Price
  })[]
  totalDataNums: number
}

export type PaymentHistoryRes = PaymentHistory & {
  company: Company
  paymentMethod: PaymentMethod
  price: Price
}

export type PaymentMethodsRes = {
  paymentMethods: (PaymentMethod & {
    company: Company
  })[]
}

export type PaymentMethodRes = PaymentMethod & {
  company: Company
}

export type RecruitmentCompletionReportsRes = {
  recruitmentCompletionReports: (RecruitmentCompletionReport & {
    company: Company
    account: Account
    occupation: Occupation
    industry: Industry
  })[]
  totalDataNums: number
}

export type RecruitmentCompletionReportRes = RecruitmentCompletionReport & {
  company: Company
  account: Account
  occupation: Occupation
  industry: Industry
}

export type RolesRes = {
  roles: (Role & {
    policies: Policy[]
    company: Company
  })[]
}

export type RoleRes = Role & {
  policies: Policy[]
  company: Company
}

export type ScoutTemplatesRes = {
  scoutTemplates: (ScoutTemplate & {
    company: Company
    creator: Account
    principalOrgUnits: OrgUnit[]
    principalEmployments: (Employment & {
      account?: Account | undefined
    })[]
  })[]
  totalDataNums: number
}

export type ScoutTemplateRes = ScoutTemplate & {
  company: Company
  creator: Account
  principalOrgUnits: OrgUnit[]
  principalEmployments: (Employment & {
    account: Account
  })[]
}

export type ScoutTicket = {
  createdAt: string
  id: string
  type: 'free' | 'bought'
  updatedAt: string
}

export type ScoutTicketsRes = {
  scoutTickets: ScoutTicket[]
  totalDataNums: number
}

export type SubscriptionRes = Subscription & {
  company: Company
  price: Price
}
