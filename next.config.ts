import type { NextConfig } from "next";

const securityHeaders = [
  { key:"X-Content-Type-Options", value:"nosniff" },
  { key:"Referrer-Policy", value:"strict-origin-when-cross-origin" },
  { key:"X-Frame-Options", value:"DENY" },
  { key:"Permissions-Policy", value:"camera=(), microphone=(), geolocation=(), payment=()" },
  { key:"Strict-Transport-Security", value:"max-age=63072000; includeSubDomains; preload" },
  { key:"Content-Security-Policy", value:"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://upload.wikimedia.org; font-src 'self' data:; connect-src 'self' https://api.resend.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self' https://wa.me https://api.whatsapp.com; upgrade-insecure-requests" },
];

const nextConfig: NextConfig = {
  poweredByHeader:false,
  reactStrictMode:true,
  compress:true,
  async headers(){ return [{source:"/(.*)",headers:securityHeaders}]; },
};

export default nextConfig;