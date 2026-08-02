import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/lib/i18n/request.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  optimizePackageImports: ["lucide-react", "next-intl"],
};

export default withNextIntl(nextConfig);
