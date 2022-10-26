/* eslint-disable */
import { postInviteSignUp } from "./invite_sign_up/post";
import { postSignIn } from "./sign_in/post";
import { postSignUp } from "./sign_up/post";
import { getVerifyEmail } from "./verify_email/get";
import { postVerifyNewEmail } from "./verify_new_email/post";
import { postVerifyNewEmploymentEmail } from "./verify_new_employment_email/post"

export const authApi = {
  postInviteSignUp,
  postSignIn,
  postSignUp,
  getVerifyEmail,
  postVerifyNewEmail,
  postVerifyNewEmploymentEmail
};