import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputMode = process.env.NEXT_OUTPUT;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: outputMode === "standalone" ? "standalone" : undefined,
  turbopack: {
    root: __dirname
  }
};

export default nextConfig;
