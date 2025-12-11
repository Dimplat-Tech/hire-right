import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/pdfs/top-3-red-flags.pdf',
        destination: '/ebooks/download',
        permanent: false,
      },
      {
        source: '/ebook/downlaod',
        destination: '/ebooks/download',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
