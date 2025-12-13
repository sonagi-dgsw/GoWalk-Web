export default interface SignInApiResponse {
    data?: {
        accessToken: string,
        refreshToken: string;
    },
    error?: {
        message: string;
    }
};