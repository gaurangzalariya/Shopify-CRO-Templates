// next.config.js
/** @type {import('next').NextConfig} */
const repo = 'Shopify-CRO-Templates';
const nextConfig = {
  output: 'export',
  assetPrefix: `/${repo}/`,
  basePath: `/${repo}`,
}
module.exports = nextConfig