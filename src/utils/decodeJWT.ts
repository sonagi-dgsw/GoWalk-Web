import { jwtDecode } from 'jwt-decode';

const decodeJwtToken = (token) => {
    try {
        return jwtDecode(token);
    } catch (error) {
        console.error('Failed to decode token:', error);
        return null;
    }
};

export default decodeJwtToken;