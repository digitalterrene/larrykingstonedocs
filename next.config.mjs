import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Handling redirects to ensure the breadcrumbs work correctly
  async redirects() {
    return [
      // Uncomment this to redirect "/" to another page
      {
        source: "/",
        destination: "/docs/getting-started/readme",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
