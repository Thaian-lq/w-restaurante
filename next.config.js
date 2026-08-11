/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

// No GitHub Actions, GITHUB_REPOSITORY vem como "usuario/nome-do-repo".
// Local (npm run dev / build manual) não seta isso, então basePath fica vazio.
let repo = "";
if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  repo = process.env.GITHUB_REPOSITORY.split("/")[1];
}

const nextConfig = {
  reactStrictMode: true,
  output: "export", // gera HTML/CSS/JS estático em ./out — é o que o GitHub Pages serve
  trailingSlash: true, // evita 404 em rotas ao servir estático
  basePath: repo ? `/${repo}` : "",
  assetPrefix: repo ? `/${repo}/` : "",
  env: {
    // next/image com unoptimized:true não prefixa sozinho o basePath nos
    // src locais (só faz isso pros assets do _next) — expomos aqui pra
    // aplicar manualmente via lib/basePath.ts
    NEXT_PUBLIC_BASE_PATH: repo ? `/${repo}` : "",
  },
  images: {
    unoptimized: true, // GitHub Pages não roda o otimizador de imagem do Next
  },
};

module.exports = nextConfig;

