const axios = require('axios');

// Microsoft configuration - you only need these for reference
//const MICROSOFT_CLIENT_ID = process.env.MICROSOFT_CLIENT_ID; // Optional for verification
//const MICROSOFT_TENANT_ID = process.env.MICROSOFT_TENANT_ID; // Optional for tenant-specific verification

// Microsoft Graph API endpoints
const MICROSOFT_GRAPH_ME_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';
const MICROSOFT_GRAPH_TOKEN_VALIDATION = 'https://graph.microsoft.com/v1.0/me';

// Microsoft token verification function
exports.verifyMicrosoftToken = async (accessToken) => {
    try {
        // Call Microsoft Graph API to verify token and get user info
        const response = await axios.get(MICROSOFT_GRAPH_ME_ENDPOINT, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        // If successful, return user data
        return response.data;
    } catch (error) {
        console.error('Microsoft token verification failed:', error.response?.data || error.message);
        return null;
    }
};

// Helper function to get additional user info if needed
exports.getMicrosoftUserProfile = async (accessToken) => {
    try {
        const response = await axios.get('https://graph.microsoft.com', {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        return {
            id: response.data.id,
            email: response.data.mail || response.data.userPrincipalName,
            name: response.data.displayName,
            firstName: response.data.givenName,
            lastName: response.data.surname,
            profilePicture: null // Can get this from /photo endpoint if needed
        };
    } catch (error) {
        console.error('Failed to get Microsoft user profile:', error);
        return null;
    }
};