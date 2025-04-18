import { BASE_URL } from '@/app-routes/Constants';

const AUTH_API = "/auth";

export const LOGIN_WITH_GOOGLE = `${BASE_URL}${AUTH_API}/google`;
export const REGISTER_WITH_EMAIL = `${BASE_URL}${AUTH_API}/register`;
export const LOGIN_WITH_EMAIL = `${BASE_URL}${AUTH_API}/login`;

