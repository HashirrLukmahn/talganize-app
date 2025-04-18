import axiosInstance from "@/api/axiosInstance";
// import { registerUser, loginUser, googleLogin } from "../api/authApi";
import { LOGIN_WITH_EMAIL, LOGIN_WITH_GOOGLE, REGISTER_WITH_EMAIL } from "../api/authApi";


// // Register user
// export const register = async (email, password, role) => {
//     try {
//         return await registerUser(email, password, role);
//     } catch (error) {
//         throw error;
//     }
// }

// Login user
// export const login = async (email, password) => {
//     try {
//         const response = await loginUser(email, password);

//         if (response.status === 200) {

//             localStorage.setItem("user", JSON.stringify(response?.data)); // Store user session
//         }
//         return response.data;

//     } catch (error) {

//         throw error;
//     }
// }

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
// Logout user
export const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
}

// // Get logged-in user
// export const getCurrentUser = () => {
//     return JSON.parse(localStorage.getItem("user"));
// }
