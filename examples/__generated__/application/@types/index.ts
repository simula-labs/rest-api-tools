/* eslint-disable */
export type Account = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  email?: string | undefined
  emailVerificationStatus?: 'unspecified' | 'request' | 'verified' | undefined
  avatarUrl?: string | undefined
  lastSignInAt?: string | undefined
  lastNotificationReadAt?: string | undefined
  /** キャリアスカウト受け入れるか */
  isCareerScoutTarget?: boolean | undefined
  /** プロジェクトスカウト受け入れるか */
  isProjectScoutTarget?: boolean | undefined
  /** ProbWorksプロジェクト実績を公開するか */
  isPublicWithWork?: boolean | undefined
  identityVerificationStatus?: 'unspecified' | 'verified' | 'checking' | 'failed' | undefined
  /** 本人確認に足りない項目の配列（'external_account'は銀行口座、'individual.verification.document'は身分証明書） */
  identificationRequirements?: string[] | undefined
  /** 求職者必須項目の不足項目 */
  missingRequirementsForGeneral?: string[] | undefined
  /** エージェント必須項目の不足項目 */
  missingRequirementsForAgent?: string[] | undefined
  /** サンプルか */
  isSample?: boolean | undefined
  registerAs?: 'general' | 'organizational' | undefined
  /** 論理削除時刻 */
  deletedAt?: string | undefined
  /** 学生か */
  isStudent?: boolean | undefined
  isConcludedNda?: boolean | undefined
  isSupported?: boolean | undefined
  /** プロフィール完成度（%表記） */
  profileCompleteness?: number | undefined
}

export type Profile = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
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

  /** 履歴書等のPDFファイル */
  files?: {
    id?: string | undefined
    name?: string | undefined
    url?: string | undefined
    contentType?: string | undefined
    createdAt?: string | undefined
  } | undefined
}

export type SpecialtyCompanyType = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  content?: string | undefined
}

export type SpecialtyPosition = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  content?: string | undefined
}

export type OccupationMainCategory = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  name?: string | undefined
}

export type IndustryCategory = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  name?: string | undefined
}

export type Employment = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  email?: string | undefined
  /** 有効かどうか（招待しただけの状態はfalse） */
  isValid?: boolean | undefined
  /** 所属部署 */
  department?: string | undefined
  /** 役職 */
  position?: string | undefined
}

export type Company = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  type?: 'account' | 'stub' | undefined
  name?: string | undefined
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
  adminVerificationStatus?: 'unspecified' | 'requested' | 'verified' | 'rejected' | 'canceled' | undefined
  publicVerificationStatus?: 'unspecified' | 'requested' | 'verified' | 'rejected' | undefined
  /** 有料職業紹介事業許可番号 */
  employmentPlacementPermitNumber?: string | undefined
  /** admin指定の採用報告手数料率 */
  recruitmentFeeRatio?: number | undefined
  /** admin指定の紹介報告手数料率 */
  introductionFeeRatio?: number | undefined
  deletedAt?: string | undefined
  isFollowing?: boolean | undefined
  /** フォロワー数 */
  followerNums?: number | undefined
}

export type Role = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  /** 役割「general」「admin」など */
  name?: string | undefined
  type?: 'default' | 'organizational' | undefined
  description?: string | undefined
}

export type Message = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  content?: string | undefined
  actAs?: 'personal' | 'organizational' | undefined

  attachment?: {
    filename?: string | undefined
    contentType?: string | undefined
    url?: string | undefined
  } | undefined
}

export type Room = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined

  latestMessage?: Message | {
  } | undefined

  /** 未読メッセージがあればfalse */
  isReadMessage?: boolean | undefined
  /** 転職完了報告済みか */
  jobChangeCompletionReport?: boolean | undefined
}

export type State = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  countryCode?: string | undefined
  name?: string | undefined
}

export type Industry = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  name?: string | undefined
}

export type Feature = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  name?: string | undefined
  type?: 'default' | 'organizational' | undefined
  sourceType?: 'company' | 'recruitment' | undefined
}

export type Notification = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  subject?: string | undefined
  content?: string | undefined
  url?: string | undefined
  /** 「未読」「既読」 */
  isRead?: boolean | undefined
  /** 「通常通知」or「メッセージ通知」 */
  notificationType?: 'general' | 'message' | undefined
  /** Accountであればavatar_url、Companyであればlogo_url */
  iconUrl?: string | undefined
}

export type SearchCondition = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  title?: string | undefined
  target?: 'recruitment' | 'company' | 'account' | undefined
  filters?: {
    /** クエリパラメータのキー */
    key?: string | undefined
  }[] | undefined
}

export type Applicant = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}

export type Recruitment = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  title?: string | undefined
  department?: string | undefined
  position?: string | undefined
  jobDescription?: string | undefined
  workConditions?: string | undefined
  /** 「屋内禁煙」「喫煙室設置」「対策なし」「その他」 */
  smokingRegulation?: 'no_smoking_indoors' | 'exist_smoking_room' | 'none' | 'other' | undefined
  /** 「未選択」「不可・時折（0-10%）」「可（10-90%）」「フルリモート（90%以上）」 */
  remoteWorkStatus?: 'unselected' | 'rarely' | 'normally' | 'full_remote' | undefined
  /** 求人管理ID */
  recruitmentManageId?: string | undefined
  /** 勤務地詳細 */
  workplaceDescription?: string | undefined
  /** 年収・報酬の詳細 */
  salaryRemarks?: string | undefined
  qualificationRequirement?: string | undefined
  /** 採用人数 */
  maxNumberOfHiring?: string | undefined
  /** 選考プロセス */
  selectionProcess?: string | undefined
  /** 「下書き」「公開」「休止」「終了」「強制停止」 */
  publishmentStatus?: 'draft' | 'published' | 'suspending' | 'terminated' | 'rejected' | undefined
  /** サンプルか */
  isSample?: boolean | undefined
  /** 「全体公開（誰でも見れる）」「非公開（許可した人のみ見れる）」 */
  accessibleType?: 'public' | 'private' | undefined
  /** 「転職」「副業・フリーランス」 */
  type?: 'career' | 'project' | undefined
  /** 最低金額（税込） */
  minAmount?: number | undefined
  /** 最高金額（税込） */
  maxAmount?: number | undefined
  /** 「時給」「日給」「月給」「年収」「1案件」 */
  billingMethod?: 'hourly' | 'daily' | 'monthly' | 'yearly' | 'with_project' | undefined
  /** 「クライアント作成（企業）」「エージェント作成」「サービス作成（クローリング）」 */
  sourceType?: 'client' | 'agent' | 'service' | undefined
  /** 推定単価（税込） */
  estimatedUnitAmount?: number | undefined
  /** 募集元企業の状態「なし」「非公開」「某社」「指定あり」 */
  targetCompanyStatus?: 'none' | 'private' | 'certained' | 'specified' | undefined
  /** 推薦ポイント */
  recommendedPoint?: string | undefined
  /** target_company_statusがcertainedの時、表示名を指定 */
  targetCompanyCertainName?: string | undefined
  nearestStation?: string | undefined
  projectNumber?: string | undefined
  /** 掲載期間（開始） */
  publishedSinceDate?: string | undefined
  /** 掲載期間（終了） */
  publishedUntilDate?: string | undefined
  /** 企業内でのフラグ */
  isOrganizationalChecked?: boolean | undefined
  /** admin用のフラグ */
  isAdminChecked?: boolean | undefined
  isInterested?: boolean | undefined
  isApplied?: boolean | undefined
  /** PV数 */
  pageViews?: number | undefined
  /** 候補者数 */
  appliedAccounts?: number | undefined
  /** その募集を気になるしてるアカウントの数 */
  interestedAccounts?: number | undefined

  targetCompany?: Company | null | undefined
}

export type EmploymentStatus = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  name?: string | undefined
  type?: 'CAREER' | 'PROJECT' | undefined
  /** 「請負」「準委任」「業務委託」 */
  projectClassification?: 'contract' | 'quasi_mandate' | 'outsourcing' | undefined
  /** 募集作成の時に選択可能か */
  isSelectable?: boolean | undefined
}

export type Occupation = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  name?: string | undefined
}

export type WorkHistory = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  name?: string | undefined
  /** 「在職中」「離職中」 */
  isEmployed?: boolean | undefined
  position?: string | undefined
  sinceDate?: string | undefined
  untilDate?: string | undefined
  department?: string | undefined
}

export type ProjectHistory = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  name?: string | undefined
  position?: string | undefined
  businessContent?: string | undefined
  sinceDate?: string | undefined
  untilDate?: string | undefined
  isEmployed?: boolean | undefined
}

export type AcademicHistory = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  name?: string | undefined
  faculty?: string | undefined
  sinceDate?: string | undefined
  untilDate?: string | undefined
  /** 「大学院（博士）」「大学院（修士）」「大学」「高専」「専門学校」「短期大学」「高校」 */
  type?: 'graduate_school_doctor' | 'graduate_school_master' | 'university' | 'technical_college' | 'vocational_school' | 'junior_college' | 'high_school' | undefined
}

export type Subscription = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  status?: 'active' | 'past_due' | 'unpaid' | 'canceled' | 'incomplete' | 'incomplete_expired' | 'trialing' | 'all' | 'ended' | 'pending' | undefined
  sinceDate?: string | undefined
  untilDate?: string | undefined
}

export type Price = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  active?: string | undefined
  currency?: string | undefined
  /** 価格（税抜） */
  unitAmountWithoutTax?: number | undefined
  /** 価格（税） */
  taxForUnitAmount?: number | undefined
  /** 価格（税込） */
  unitAmount?: number | undefined
}

export type Product = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  name?: string | undefined
  description?: string | undefined
  active?: boolean | undefined
  type?: 'good' | 'service' | undefined
  planType?: 'standard' | 'agent' | 'starter' | undefined
  number?: number | undefined
}

export type Policy = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  name?: string | undefined
  category?: 'unspecified' | 'account' | 'applicant' | 'recruitment' | 'payment' | undefined
}

export type Permission = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  /** 権限「read:recruitment」「create:recruitment」など */
  action?: string | undefined
  conditions?: string | undefined
}

export type Skill = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  name?: string | undefined
}

export type ExternalService = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  name?: string | undefined
  isContracted?: boolean | undefined
}

export type IncomeHistory = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  name?: string | undefined
  amount?: number | undefined
}

export type Withdrawal = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  amount?: number | undefined
  feeAmount?: number | undefined
  totalAmount?: number | undefined
}

export type BankAccount = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  bankName?: string | undefined
  branchName?: string | undefined
  accountNumber?: string | undefined
  accountHolderName?: string | undefined
  bankCode?: string | undefined
  branchCode?: string | undefined
}

export type JobOrder = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  /** 「下書き」「先方確認中」「締結済み」「却下」 */
  status?: 'draft' | 'applied' | 'certificated' | 'rejected' | undefined
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
  isSample?: boolean | undefined
}

export type Job = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  /** 「進行中」「完了」 */
  status?: 'in_progress' | 'completed' | undefined
  isSample?: boolean | undefined
}

export type JobServiceItem = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  /** 項目名 */
  description?: string | undefined
  /** 数量 */
  quantity?: number | undefined
  /** 単位 */
  unitLabel?: string | undefined
  /** 単価 */
  unitPrice?: number | undefined
  /** 消費税 */
  taxRatio?: string | undefined
  /** 合計金額 */
  amount?: number | undefined
}

export type RecruitmentInterest = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}

export type Support = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  project?: boolean | undefined
  career?: boolean | undefined
}

export type ProjectResult = {
  totalRate?: number | undefined
  skills?: Skill[] | undefined
  totalJobsNum?: number | undefined
}

export type JobReview = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  starRating?: number | undefined
  /** スキルの詳細 */
  skillDescription?: string | undefined
  /** もっとこうして欲しかった点 */
  improvementPoint?: string | undefined
  /** サンプルか */
  isSample?: boolean | undefined
}

export type Achievement = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  content?: string | undefined
  createdDate?: string | undefined
  description?: string | undefined
}

export type Hope = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  type?: 'career' | 'project' | undefined
  amount?: number | undefined
  /** 「時給」「日給」「月給」「年収」「1案件」 */
  billingMethod?: 'hourly' | 'daily' | 'monthly' | 'yearly' | 'with_project' | undefined
  /** 転職希望時期・案件開始時期 */
  timeToChangeJob?: number | undefined
  /** 特筆事項 */
  specialNote?: string | undefined
}

export type IndustryHistory = {
  id?: string | undefined
  /** 年単位 */
  yearOfExperience?: number | undefined
}

export type OccupationHistory = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  /** 年単位 */
  yearOfExperience?: number | undefined
}

export type ConsentMatter = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  content?: string | undefined
}

export type JobChangeCompletionReport = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  amount?: number | undefined
}

export type StateCategory = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  name?: string | undefined
  /** 「日本」「海外」「その他」 */
  countryType?: 'japan' | 'international' | 'other' | undefined
}

export type OccupationSubCategory = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  name?: string | undefined
}

export type PaymentMethod = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  brand?: 'visa' | 'mastercard' | 'jcb' | 'american_express' | 'diners' | undefined
  expMonth?: string | undefined
  expYear?: string | undefined
  last4?: string | undefined
  isDefault?: boolean | undefined
}

export type Nda = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  content?: string | undefined
  version?: string | undefined
}

export type ConsentNda = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  name?: string | undefined
  address?: string | undefined
}

export type Invoice = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  title?: string | undefined
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
  /** 支払期日 */
  deadline?: string | undefined
  /** サンプルか */
  isSample?: boolean | undefined
  /** 備考 */
  note?: string | undefined

  /** PDFファイル */
  files?: {
    id?: string | undefined
    name?: string | undefined
    url?: string | undefined
    contentType?: string | undefined
    createdAt?: string | undefined
  } | undefined
}

export type InvoiceDetailedItem = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  /** 項目名 */
  description?: string | undefined
  /** 数量 */
  quantity?: number | undefined
  /** 単位 */
  unitLabel?: string | undefined
  /** 単価 */
  unitPrice?: number | undefined
  /** 消費税 */
  taxRatio?: number | undefined
  /** 金額 */
  amount?: number | undefined
}
