import Constants from "expo-constants";

export interface Env {
  ENV_RAZORPAY_API_KEY: string;
  ENV_OTP_LESS_URL: string;
  ENV_OTP_LESS_ID: string;
  ENV_OTP_LESS_SECRET_KEY: string;
}

export const env = Constants.expoConfig?.extra as Env;
