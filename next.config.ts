/** @type {import('next').NextConfig} */
const nextConfig = {
  // Memaksa browser mengambil aset statis langsung dari server asal Cloudflare
  assetPrefix: 'https://reverse-web-kedua.elroypedrokameo10.workers.dev',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;