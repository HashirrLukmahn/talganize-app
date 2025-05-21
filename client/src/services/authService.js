import axiosInstance from "@/api/axiosInstance";
// import { registerUser, loginUser, googleLogin } from "../api/authApi";
import { LOGIN_WITH_EMAIL, LOGIN_WITH_GOOGLE, REGISTER_WITH_EMAIL, SEND_EMAIL_VERIFICATION_LINK, VERIFY_EMAIL_TOKEN } from "../api/authApi";


// Login user
export const loginWithGoogle = async (code) => {

    try {
        let data = {
            code: code
        }
        const result = await axiosInstance.post(LOGIN_WITH_GOOGLE, data)
        return result.data;

    } catch (error) {
        throw error || "Login failed";
    }
}
export const registerWithEmail = async (data) => {

    try {

        const result = await axiosInstance.post(REGISTER_WITH_EMAIL, data)
        return result.data;

    } catch (error) {
        throw error || "Register failed";
    }
}
export const loginWithEmail = async (data) => {

    try {

        const result = await axiosInstance.post(LOGIN_WITH_EMAIL, data)
        return result.data;

    } catch (error) {
        throw error || "Login failed";
    }
}

export const verifyEmailToken = async (data) => {
    try {

        const result = await axiosInstance.post(VERIFY_EMAIL_TOKEN, data)
        return result.data;

    } catch (error) {
        throw error || "Email failed.";
    }
}
export const sendEmailVerificationLink = async (data) => {
    try {

        const result = await axiosInstance.post(SEND_EMAIL_VERIFICATION_LINK, data)
        return result.data;

    } catch (error) {
        throw error || "Failed to send verifcation link.";
    }
}

// Logout user
export const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
}

// // Get logged-in user
// export const getCurrentUser = () => {
//     return JSON.parse(localStorage.getItem("user"));
// }
