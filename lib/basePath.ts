/**
 * next/image com images.unoptimized (necessário pro GitHub Pages, que não
 * roda o otimizador do Next) não prefixa sozinho o `src` local com o
 * basePath do repositório — só faz isso pros assets internos do `_next`.
 * Por isso qualquer src estático em /public precisa passar por aqui.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(path: string): string {
  if (!path) return path;
  if (path.startsWith("http")) return path; // URL externa, não mexe
  return `${basePath}${path}`;
}
