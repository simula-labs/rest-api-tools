/* eslint-disable */
export type Company = {
  id: string
  createdAt: string
  updatedAt: string
  type: 'account' | 'stub'
  name: string
  nameKana?: string | undefined
  headOfficeLocation?: string | undefined
  yearOfEstablishment?: string | undefined
  hpUrl?: string | undefined
  phone?: string | undefined
  /** 資本金（税の概念なし） */
  capital?: number | undefined
  isListed?: boolean | undefined
  representative?: string | undefined
  representativeKana?: string | undefined
  /** 前年度の売上高（税込） */
  netSales?: number | undefined
  numbersOfEmployees?: string | undefined
  averageAge?: number | undefined
  businessSummary?: string | undefined
  corporatePr?: string | undefined
  logoUrl?: string | undefined
  coverImageUrl?: string | undefined
  isSample?: boolean | undefined
  /** admin審査状態 */
  adminVerificationStatus: 'unspecified' | 'requested' | 'verified' | 'rejected' | 'canceled'
  publicVerificationStatus: 'unspecified' | 'requested' | 'verified' | 'rejected'
  /** 有料職業紹介事業許可番号 */
  employmentPlacementPermitNumber?: string | undefined
  deletedAt?: string | undefined
  /** admin指定の採用報告手数料率 */
  recruitmentFeeRatio?: number | undefined
  /** admin指定の紹介報告手数料率 */
  introductionFeeRatio?: number | undefined
  followerNums?: number | undefined
  ownerEmail?: string | undefined
}

export type Recruitment = {
  id: string
  createdAt: string
  updatedAt: string
  title: string
  /** 最低金額（税抜） */
  minAmountWithoutTax?: number | undefined
  /** 最低金額（税） */
  taxForMinAmount?: number | undefined
  /** 最低金額（税込） */
  minAmount?: number | undefined
  /** 最高金額（税抜） */
  maxAmountWithoutTax?: number | undefined
  /** 最高金額（税） */
  taxForMaxAmount?: number | undefined
  /** 最高金額（税込） */
  maxAmount?: number | undefined
  /** 「時給」「日給」「月給」「年収」「1案件」 */
  billingMethod?: 'hourly' | 'daily' | 'monthly' | 'yearly' | 'with_project' | undefined
  department?: string | undefined
  position?: string | undefined
  jobDescription?: string | undefined
  workConditions?: string | undefined
  /** 「屋内禁煙」「喫煙室設置」「対策なし」「その他」 */
  smokingRegulation?: 'no_smoking_indoors' | 'exist_smoking_room' | 'none' | 'other' | undefined
  /** 「未選択」「不可・時折（0-10%）」「可（10-90%）」「フルリモート（90%以上）」 */
  remoteWorkStatus?: 'unselected' | 'rarely' | 'normally' | 'full_remote' | undefined
  /** 勤務地詳細 */
  workplaceDescription?: string | undefined
  /** 勤務地不問か */
  canLiveAndWorkAnywhere?: boolean | undefined
  /** 年収・報酬の詳細 */
  salaryRemarks?: string | undefined
  qualificationRequirement?: string | undefined
  /** 採用人数 */
  maxNumberOfHiring?: string | undefined
  /** 選考プロセス */
  selectionProcess?: string | undefined
  /** サンプルか */
  isSample: boolean
  /** 掲載期間（開始） */
  publishedSinceDate?: string | undefined
  /** 掲載期間（終了） */
  publishedUntilDate?: string | undefined
  /** 「転職」「副業・フリーランス」 */
  type?: 'career' | 'project' | undefined
  /** 「下書き」「公開」「休止」「終了」「強制停止」 */
  publishmentStatus?: 'draft' | 'published' | 'suspending' | 'terminated' | 'rejected' | undefined
  /** 「全体公開（誰でも見れる）」「非公開（許可した人のみ見れる）」 */
  accessibleType?: 'public' | 'private' | undefined
  /** 「クライアント作成（企業）」「エージェント作成」「サービス作成（クローリング）」 */
  sourceType?: 'client' | 'agent' | 'service' | undefined
  /** 推定単価（税込） */
  estimatedUnitAmount?: number | undefined
  /** 募集元企業の状態「なし」「非公開」「某社」「指定あり」 */
  targetCompanyStatus?: 'none' | 'private' | 'certained' | 'specified' | undefined
  /** target_company_statusがcertainedの時、表示名を指定 */
  targetCompanyCertainName?: string | undefined
  /** 推薦ポイント */
  recommendedPoint?: string | undefined
  /** 企業内でのフラグ */
  isOrganizationalChecked?: boolean | undefined
  /** admin用のフラグ */
  isAdminChecked?: boolean | undefined
  /** 公開出来ない理由 */
  canNotReleaseReasons?: string[] | undefined
  isWorkedWithTargetAccount?: boolean | undefined
  pageViews?: number | undefined
  isInterested?: boolean | undefined
  isApplied?: boolean | undefined
  appliedAccounts?: number | undefined
  interestedAccounts?: number | undefined
}

/** 業種 */
export type Industry = {
  id: string
  createdAt: string
  updatedAt: string
  name: string
}

export type Feature = {
  id: string
  createdAt: string
  updatedAt: string
  name: string
  type: 'default' | 'organizational'
  sourceType: 'company' | 'recruitment'
}

export type Account = {
  id: string
  createdAt: string
  updatedAt: string
  email?: string | undefined
  emailVerificationStatus: 'unspecified' | 'request' | 'verified'
  avatarUrl?: string | undefined
  lastSignInAt?: string | undefined
  lastNotificationReadAt?: string | undefined
  /** キャリアスカウト受け入れるか */
  isCareerScoutTarget: boolean
  /** プロジェクトスカウト受け入れるか */
  isProjectScoutTarget: boolean
  /** ProbWorksプロジェクト実績を公開するか */
  isPublicWithWork: boolean
  identityVerificationStatus: 'unspecified' | 'verified' | 'checking' | 'failed'
  /** 本人確認に足りない項目の配列（'external_account'は銀行口座、'individual.verification.document'は身分証明書） */
  identificationRequirements?: string[] | undefined
  /** 求職者必須項目の不足項目 */
  missingRequirementsForGeneral?: string[] | undefined
  /** エージェント必須項目の不足項目 */
  missingRequirementsForAgent?: string[] | undefined
  /** サンプルか */
  isSample: boolean
  registerAs?: 'general' | 'organizational' | undefined
  displayName?: string | undefined
  /** 論理削除時刻 */
  deletedAt?: string | undefined
  isStudent: boolean
  isConcludedNda?: boolean | undefined
  isSupported?: boolean | undefined
  profileCompleteness?: number | undefined
  existsApplicantResourceFromCurrentCompany?: boolean | undefined
  alreadyKeepFromCurrentCompany?: boolean | undefined
}

export type Profile = {
  id: string
  createdAt: string
  updatedAt: string
  firstName?: string | undefined
  lastName?: string | undefined
  firstNameKana?: string | undefined
  lastNameKana?: string | undefined
  gender?: 'MALE' | 'FEMALE' | 'OTHER' | undefined
  phone?: string | undefined
  nationality?: string | undefined
  postalCode?: string | undefined
  address?: string | undefined
  /** 「日常会話レベル」「ビジネス会話レベル」「ネイティブレベル」「なし」 */
  englishSkill?: 'daily_conversation' | 'business_conversation' | 'native' | 'nothing' | undefined
  dateOfBirth?: string | undefined
  biography?: string | undefined
  /** 「日常会話レベル」「ビジネス会話レベル」「ネイティブレベル」「なし」 */
  japaneseSkill?: 'daily_conversation' | 'business_conversation' | 'native' | 'nothing' | undefined
  /** 直近の年収（税の概念なし） */
  recentIncomeAmount?: number | undefined
  /** マネジメント経験人数 */
  managementExperience?: 'nothing' | 'less_than_5' | 'from_6_to_10' | 'from_11_to_20' | 'from_21_to_50' | 'from_51_to_100' | 'from_101_to_500' | 'more_than_501' | undefined
  /** 転職回数 */
  numberOfJobChanges?: number | undefined
  academicBackground?: string | undefined
  yearOfAgentExperience?: number | undefined
  agentAreaInCharge?: string | undefined
  agentSelfMessage?: string | undefined
  agentSelfIntroduction?: string | undefined
  agentAchievement?: string | undefined
  maritalStatus?: 'single' | 'married' | undefined
  files?: {
    id?: string | undefined
    name?: string | undefined
    contentType?: string | undefined
    url?: string | undefined
    createdAt?: string | undefined
  }[] | undefined
}

export type State = {
  id: string
  createdAt: string
  updatedAt: string
  /** 国名コードの数字 */
  countryCode: number
  name: string
}

export type Subscription = {
  id: string
  createdAt: string
  updatedAt: string
  status: 'active' | 'past_due' | 'unpaid' | 'canceled' | 'incomplete' | 'incomplete_expired' | 'trialing' | 'all' | 'ended' | 'pending'
  sinceDate: string
  untilDate: string
}

export type Price = {
  id: string
  createdAt: string
  updatedAt: string
  active: string
  currency: string
  /** 価格（税抜） */
  unitAmountWithoutTax?: number | undefined
  /** 価格（税） */
  taxForUnitAmount?: number | undefined
  /** 価格（税込） */
  unitAmount: number
}

export type Product = {
  id: string
  createdAt: string
  updatedAt: string
  name: string
  description?: string | undefined
  active: boolean
  type: 'good' | 'service'
  planType?: 'standard' | 'agent' | 'starter' | undefined
}

export type PaymentMethod = {
  id: string
  createdAt: string
  updatedAt: string
  brand: 'visa' | 'mastercard' | 'jcb' | 'american_express' | 'diners'
  expMonth: string
  expYear: string
  last4: string
  isDefault: boolean
}

export type SpecialtyCompanyType = {
  id: string
  createdAt: string
  updatedAt: string
  content: string
}

export type SpecialtyPosition = {
  id: string
  createdAt: string
  updatedAt: string
  content: string
}

/** 職種「大項目」 */
export type OccupationMainCategory = {
  id: string
  createdAt: string
  updatedAt: string
  name: string
}

/** 業種カテゴリー */
export type IndustryCategory = {
  id: string
  createdAt: string
  updatedAt: string
  name: string
}

/** クローリングサービス */
export type ExternalService = {
  id: string
  createdAt: string
  updatedAt: string
  name: string
  isContracted: boolean
}

export type EmploymentStatus = {
  id: string
  createdAt: string
  updatedAt: string
  name: string
  type: 'CAREER' | 'PROJECT'
  /** 「請負」「準委任」「業務委託」 */
  projectClassification?: 'contract' | 'quasi_mandate' | 'outsourcing' | undefined
  /** 募集作成の時に選択可能か */
  isSelectable: boolean
}

/** 職種 */
export type Occupation = {
  id: string
  createdAt: string
  updatedAt: string
  name: string
}

export type Applicant = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}

export type Employment = {
  id: string
  createdAt: string
  updatedAt: string
  email: string
  /** 所属部署 */
  department?: string | undefined
  /** 役職 */
  position?: string | undefined
  lastNotificationReadAt?: string | undefined
  /** 有効かどうか（招待しただけの状態はfalse） */
  isValid: boolean
}

export type Role = {
  id: string
  createdAt: string
  updatedAt: string
  /** 役割「general」「admin」など */
  name: string
  type: 'default' | 'organizational'
  description?: string | undefined
}

export type Policy = {
  id: string
  createdAt: string
  updatedAt: string
  name: string
  category: 'unspecified' | 'account' | 'applicant' | 'recruitment' | 'payment'
}

export type Permission = {
  id: string
  createdAt: string
  updatedAt: string
  /** 権限「read:recruitment」「create:recruitment」など */
  action: string
  conditions?: string | undefined
}

export type KeepingList = {
  id: string
  createdAt: string
  updatedAt: string
  /** リスト名 */
  name: string
  /** params[target_account_id]がそのリストに存在するか */
  targetAccountExist?: boolean | undefined
}

export type Hope = {
  id: string
  createdAt: string
  updatedAt: string
  /** 転職希望時期・案件開始時期 */
  timeToChangeJobs?: number | undefined
  amount?: number | undefined
  /** 「時給」「日給」「月給」「年収」「1案件」 */
  billingMethod: 'hourly' | 'daily' | 'monthly' | 'yearly' | 'with_project'
  type: 'career' | 'project'
  /** 特筆事項 */
  specialNote?: string | undefined
  ratioOfOperation?: 'once_a_week' | 'few_days_a_week' | 'four_days_a_week' | undefined
}

export type Room = {
  id: string
  createdAt: string
  updatedAt: string
  /** 未読メッセージがあればfalse */
  isReadMessage: boolean
  /** 未返信メッセージがあるか */
  existsNotReplied: boolean
}

export type Message = {
  id: string
  createdAt: string
  updatedAt: string
  content: string
  actAs: 'personal' | 'organizational'

  attachment?: {
    filename?: string | undefined
    contentType?: string | undefined
    url?: string | undefined
  } | undefined
}

export type PaymentHistory = {
  id: string
  createdAt: string
  updatedAt: string
  name: string
  amount: number
}

export type RecruitmentCompletionReport = {
  id: string
  createdAt: string
  updatedAt: string
  /** 年収（税の概念なし） */
  amount: number
  systemFeeRatio: number
  /** 手数料（税抜） */
  systemFeeWithoutTax?: number | undefined
  /** 手数料（税） */
  taxForSystemFee?: number | undefined
  /** 手数料（税込） */
  systemFee: number
  paymentStatus: 'unpaid' | 'paid' | 'failed' | 'pending'
  joinedDate?: string | undefined
  memo?: string | undefined
  isEnable?: boolean | undefined
}

export type Scout = {
  id: string
  createdAt: string
  updatedAt: string
  type: 'career' | 'project'
}

/** STIを使って実装する */
export type Notification = {
  id: string
  createdAt: string
  updatedAt: string
  subject?: string | undefined
  content: string
  url?: string | undefined
  /** 「未読」「既読」 */
  isRead: boolean
  /** 「通常通知」or「メッセージ通知」 */
  notificationType: 'general' | 'message'
  /** Accountであればavatar_url、Companyであればlogo_url */
  iconUrl?: string | undefined
}

/** appliedの場合はcustomer_name以外必須 */
export type JobOrder = {
  id: string
  createdAt: string
  updatedAt: string
  /** 「下書き」「先方確認中」「締結済み」「却下」 */
  status: 'draft' | 'applied' | 'certificated' | 'rejected'
  /** 取引先名 */
  customerName?: string | undefined
  /** 業務名 */
  jobName?: string | undefined
  /** 発注番号 */
  number?: string | undefined
  /** 発注日 */
  orderDate?: string | undefined
  /** 開始日 */
  sinceDate?: string | undefined
  /** 終了日 */
  untilDate?: string | undefined
  /** 「稼働報酬制」「固定報酬制」 */
  feeType?: 'time_based' | 'fixed' | undefined
  /** 稼働報酬制の単位（「一月あたり」「一日あたり」「一時間あたり」） */
  feeCalculationSpan?: 'monthly' | 'daily' | 'hourly' | undefined
  /** 稼働報酬制の金額 */
  unitTimeFee?: number | undefined
  /** 稼働報酬制の税率 */
  taxRatio?: number | undefined
  /** 固定報酬制の小計 */
  fixedSubTotal?: number | undefined
  /** 固定報酬制の税額 */
  fixedTax?: number | undefined
  /** 固定報酬制の金額（税込） */
  fixedAmount?: number | undefined
  /** 固定報酬制の金額（税込）と論理手数料を合わせた総額 */
  fixedTotalAmount?: number | undefined
  /** 仕事内容 */
  jobDescription?: string | undefined
  /** 諸条件 */
  otherConditions?: string | undefined
  /** 受注者からのコメント */
  reviewComment?: string | undefined
  /** 論理手数料（報酬額ときっかけを元に算出する手数料の予定額） */
  logicalFeeAmount?: number | undefined
  isSample: boolean
}

export type Job = {
  id: string
  createdAt: string
  updatedAt: string
  /** 「進行中」「完了」 */
  status: 'in_progress' | 'completed'
  /** 公開するか */
  isPublic: boolean
  isSample: boolean
}

export type JobServiceItem = {
  id: string
  createdAt: string
  updatedAt: string
  /** 項目名 */
  description: string
  /** 数量 */
  quantity: number
  /** 単位 */
  unitLabel: string
  /** 単価 */
  unitPrice: number
  /** 消費税 */
  taxRatio: string
  /** 合計金額 */
  amount: number
}

export type JobReview = {
  id: string
  createdAt: string
  updatedAt: string
  starRating?: number | undefined
  /** スキルの詳細 */
  skillDescription?: string | undefined
  /** もっとこうして欲しかった点 */
  improvementPoint?: string | undefined
  /** サンプルか */
  isSample: boolean
}

export type Skill = {
  id: string
  createdAt: string
  updatedAt: string
  name: string
}

export type Invoice = {
  id: string
  createdAt: string
  updatedAt: string
  /** 小計 */
  subTotal?: number | undefined
  /** 税額 */
  tax?: number | undefined
  /** 請求額（税込） */
  amount?: number | undefined
  /** 請求額に応じた手数料 */
  feeAmount?: number | undefined
  /** 小計・税・手数料を合わせた総額 */
  totalAmount?: number | undefined
  /** 請求日 */
  issuedAt?: string | undefined
  /** 「未払い」「支払済み」「決済失敗」「確認中」 */
  status?: 'unpaid' | 'paid' | 'failed' | 'pending' | undefined
  title?: string | undefined
  /** 支払期日 */
  deadline?: string | undefined
  /** サンプルか */
  isSample: boolean
  /** 備考 */
  note?: string | undefined
  files?: {
    id?: string | undefined
    name?: string | undefined
    contentType?: string | undefined
    url?: string | undefined
    createdAt?: string | undefined
  }[] | undefined
}

export type InvoiceDetailedItem = {
  id: string
  createdAt: string
  updatedAt: string
  /** 項目名 */
  description: string
  /** 数量 */
  quantity: number
  /** 単位 */
  unitLabel: string
  /** 単価 */
  unitPrice: number
  /** 消費税 */
  taxRatio: number
  /** 金額 */
  amount: number
}

export type IncomeHistory = {
  id: string
  createdAt: string
  updatedAt: string
  name: string
  amount: number
}

/** STIを使って実装する */
export type Withdrawal = {
  id: string
  createdAt: string
  updatedAt: string
  amount: number
  feeAmount: number
  totalAmount: number
}

/** STIを使って実装する */
export type BankAccount = {
  id: string
  createdAt: string
  updatedAt: string
  bankName: string
  branchName: string
  accountNumber: string
  accountHolderName: string
  bankCode: string
  branchCode: string
}

export type ApplicantResource = {
  id: string
  createdAt: string
  updatedAt: string
  careerStatus?: 'backlog' | 'checked' | 'interviewing' | 'offered' | 'joined' | 'rejected' | undefined
  projectStatus?: 'backlog' | 'in_progress' | 'closed' | undefined
  /** 企業側の管理用フラグ（転職） */
  isCheckedCareer: boolean
  /** 企業側の管理用フラグ（副業・フリーランス） */
  isCheckedProject: boolean
  /** 閲覧したか（Newマークの有無）（転職） */
  isWatchedCareer: boolean
  /** 閲覧したか（Newマークの有無）（副業・フリーランス） */
  isWatchedProject: boolean
  /** サンプルか */
  isSample: boolean
  /** 人材管理追加のきっかけ */
  origin?: 'applicant' | 'scout' | undefined
  /** 論理削除時刻 */
  deletedAt?: string | undefined
  /** 応募したRecruitmentのSourceType（応募じゃなければnil） */
  recruitmentSourceType?: 'client' | 'agent' | undefined
}

export type ScoutTicket = {
  id: string
  createdAt: string
  updatedAt: string
  type: 'free' | 'bought'
  usedAt?: string | undefined
}

export type IntroductionCompletionReport = {
  id: string
  createdAt: string
  updatedAt: string
  /** 年収 */
  amount: number
  /** システム手数料比率 */
  systemFeeRatio: number
  /** 手数料（税抜） */
  systemFeeWithoutTax?: number | undefined
  /** 手数料（税） */
  taxForSystemFee?: number | undefined
  /** 手数料（税込） */
  systemFee: number
  /** 紹介料比率 */
  commissionFeeRatio?: number | undefined
  /** 紹介料（税抜） */
  commissionFeeWithoutTax?: number | undefined
  /** 紹介料（税） */
  taxForCommissionFee?: number | undefined
  /** 紹介料（年収 x 紹介料比率） */
  commissionFee: number
  paymentStatus: 'unpaid' | 'paid' | 'failed' | 'pending'
  joinedDate?: string | undefined
  memo?: string | undefined
  isEnable?: boolean | undefined
}

export type ScoutTemplate = {
  id: string
  createdAt: string
  updatedAt: string
  name?: string | undefined
  content?: string | undefined
  /** お気に入りしているか */
  isInterested?: boolean | undefined
}

export type AcademicHistory = {
  id: string
  createdAt: string
  updatedAt: string
  name: string
  faculty?: string | undefined
  sinceDate: string
  untilDate: string
  /** 「大学院（博士）」「大学院（修士）」「大学」「高専」「専門学校」「短期大学」「高校」 */
  type: 'graduate_school_doctor' | 'graduate_school_master' | 'university' | 'technical_college' | 'vocational_school' | 'junior_college' | 'high_school'
}

export type Achievement = {
  id: string
  createdAt: string
  updatedAt: string
  content: string
  createdDate: string
  description?: string | undefined
}

export type IndustryHistory = {
  id: string
  createdAt: string
  updatedAt: string
  /** 年単位 */
  yearOfExperience: number
}

export type JobChangeCompletionReport = {
  id: string
  createdAt: string
  updatedAt: string
  /** 年収（税の概念なし） */
  amount: number
}

export type OccupationHistory = {
  id: string
  createdAt: string
  updatedAt: string
  /** 年単位 */
  yearOfExperience: number
}

/** 職種「中項目」 */
export type OccupationSubCategory = {
  id: string
  createdAt: string
  updatedAt: string
  name: string
}

/** 職歴に紐付くプロジェクト経歴（name・positionどちらかは必須） */
export type ProjectHistory = {
  id: string
  createdAt: string
  updatedAt: string
  name?: string | undefined
  position?: string | undefined
  businessContent?: string | undefined
  sinceDate: string
  untilDate?: string | undefined
  isEmployed: boolean
}

export type WorkHistory = {
  id: string
  createdAt: string
  updatedAt: string
  name: string
  /** 「在職中」「離職中」 */
  isEmployed: boolean
  position: string
  sinceDate: string
  untilDate?: string | undefined
  department: string
}

export type ProjectResult = {
  totalRate?: number | undefined
  totalJobsNum?: number | undefined
}

export type RecruitmentInterest = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}

export type StateCategory = {
  id: string
  createdAt: string
  updatedAt: string
  name: string
  /** 「日本」「海外」「その他」 */
  countryType?: 'JAPAN' | 'INTERNATIONAL' | 'OTHER' | undefined
}

export type Support = {
  id: string
  createdAt: string
  updatedAt: string
  project: boolean
  career: boolean
}
