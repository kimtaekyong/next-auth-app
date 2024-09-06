/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    // 개발 모드에서는 캐시 비활성화
    if (dev) {
      config.cache = false;
    }

    // 서버와 클라이언트에 대해 다른 설정 적용 가능
    if (!isServer) {
      // 클라이언트 측에서의 캐시 설정 (선택 사항)
    }

    return config;
  },
};

export default nextConfig;
