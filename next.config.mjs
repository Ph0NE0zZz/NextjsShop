/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',        // 👈 เพิ่มบรรทัดนี้ ถ้าไม่มีจะไม่ export เป็น static ไฟล์
  distDir: 'dist',          // 👈 ใส่ถ้าอยากได้โฟลเดอร์ชื่อ dist (ไม่ใส่ก็ได้ จะได้ชื่อ out แทน)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;