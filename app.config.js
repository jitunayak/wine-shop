require("dotenv").config();

export default ({ config }) => {
    const appConfig = ({
        ...config,
        extra: {
            ENV_RAZORPAY_API_KEY: process.env.RAZORPAY_API_KEY,
            ENV_OTP_LESS_URL: process.env.ENV_OTP_LESS_URL,
            ENV_OTP_LESS_SECRET_KEY: process.env.ENV_OTP_LESS_SECRET_KEY,
            ENV_OTP_LESS_ID: process.env.ENV_OTP_LESS_ID
        }
    });

    return appConfig;
}
