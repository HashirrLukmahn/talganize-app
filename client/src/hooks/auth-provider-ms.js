import { EventType, PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "../services/authService"

// Create MSAL instance outside component to prevent recreation on every render
const msalInstance = new PublicClientApplication(msalConfig);

// Initialize MSAL setup outside component
if (!msalInstance.getActiveAccount() && msalInstance.getAllAccounts().length > 0) {
    // Fixed: getAllAccounts() instead of getActiveAccount()
    msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
}

// Listen for sign-in event and set active account
msalInstance.addEventCallback((event) => {
    const authenticationResult = event.payload;
    const account = authenticationResult?.account;
    if (event.eventType === EventType.LOGIN_SUCCESS && account) {
        msalInstance.setActiveAccount(account);
    }
});

export { msalInstance };

export const loginWithMicrosoft = () => {
    return msalInstance.loginPopup({ scopes: ["user.read"] });
};

export const logoutFromMicrosoft = () => {
    return msalInstance.logoutPopup();
};
