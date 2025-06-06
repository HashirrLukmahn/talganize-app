import axiosInstance from "@/api/axiosInstance";
// import { registerUser, loginUser, googleLogin } from "../api/authApi";
import { LOGIN_WITH_EMAIL, LOGIN_WITH_GOOGLE, LOGIN_WITH_MICROSOFT, REGISTER_WITH_EMAIL, SEND_EMAIL_VERIFICATION_LINK, VERIFY_EMAIL_TOKEN } from "../api/authApi";
import { LogLevel } from '@azure/msal-browser';

const clientID = process.env.REACT_APP_MICROSOFT_AUTH_APPLICATION_ID
//const tenantID = process.env.REACT_APP_MICROSOFT_TENANT_ID
 
// Login user Google Account
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

//Login user Microsoft Account
export const loginWithMicrosoft = async (microsoftData) => {
    try {
        // This will call the backend endpoint for Microsoft authentication
        const result = await axiosInstance.post(LOGIN_WITH_MICROSOFT, microsoftData);
        return result.data;
    } catch (error) {
        console.error('Microsoft backend login error:', error);
        throw error || "Microsoft login failed";
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

// Logout user Google Account
export const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
}

//Login User Microsoft

export const msalConfig = {
     auth: {
         clientId: clientID, // This is the ONLY mandatory field that you need to supply.
         authority: 'https://login.microsoftonline.com/common/', // Replace the placeholder with your tenant info
         redirectUri: 'http://localhost:3000', // Points to window.location.origin. You must register this URI on Microsoft Entra admin center/App Registration.
         postLogoutRedirectUri: '/', // Indicates the page to navigate after logout.
         navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
     },
     cache: {
         cacheLocation: 'sessionStorage', // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
         storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
     },
     system: {
         loggerOptions: {
             loggerCallback: (level, message, containsPii) => {
                 if (containsPii) {
                     return;
                 }
                 switch (level) {
                     case LogLevel.Error:
                         console.error(message);
                         return;
                     case LogLevel.Info:
                         console.info(message);
                         return;
                     case LogLevel.Verbose:
                         console.debug(message);
                         return;
                     case LogLevel.Warning:
                         console.warn(message);
                         return;
                     default:
                         return;
                 }
             },
         },
     },
 };

 /**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit: 
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
 export const loginRequest = {
     scopes: ["User.Read"],
 };

 /**
 * Add here the scopes to request when obtaining an access token for MS Graph API. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};

 /**
 * An optional silentRequest object can be used to achieve silent SSO
 * between applications by providing a "login_hint" property.
 */
 // export const silentRequest = {
 //     scopes: ["openid", "profile"],
 //     loginHint: "example@domain.net"
 // };

// // Get logged-in user
// export const getCurrentUser = () => {
//     return JSON.parse(localStorage.getItem("user"));
// }
