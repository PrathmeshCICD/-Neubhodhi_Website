/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,       // keep your existing setting
  output: 'export',          // important for static export
  distDir: 'build',          // output folder matches Azure output_location
};

export default nextConfig;
