const ENV = {
  API_URL: process.env.EXPO_PUBLIC_API_URL,
};

// 환경변수 검증
if (!ENV.API_URL) {
  throw new Error("API_URL is not defined in environment variables");
}

export default ENV;
