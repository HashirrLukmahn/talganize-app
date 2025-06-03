import { BASE_URL } from '@/app-routes/Constants';

const AUTH_API = "/auth";
const JOB_API = "/job"
const EMPLOYER = "/employer"

export const LOGIN_WITH_GOOGLE = `${BASE_URL}${AUTH_API}/google`;
export const LOGIN_WITH_MICROSOFT = `${BASE_URL}${AUTH_API}/microsoft`; //added this function to assist with backend calls for MSAL
export const REGISTER_WITH_EMAIL = `${BASE_URL}${AUTH_API}/register`;
export const LOGIN_WITH_EMAIL = `${BASE_URL}${AUTH_API}/login`;
export const VERIFY_EMAIL_TOKEN = `${BASE_URL}${AUTH_API}/verifyEmailToken`;
export const SEND_EMAIL_VERIFICATION_LINK = `${BASE_URL}${AUTH_API}/sendEmailVerificationLink`;

//Employer
export const ADD_NEW_SKILL = `${BASE_URL}${EMPLOYER}/addNewSkill`;
export const GET_SKILLS = `${BASE_URL}${EMPLOYER}/getSkills`;

//Job seeker
export const SAVE_JOB = `${BASE_URL}${JOB_API}/saveJob`
export const UNSAVE_JOB = `${BASE_URL}${JOB_API}/unsaveJob`
export const SAVED_IDS = `${BASE_URL}${JOB_API}/savedIds`
