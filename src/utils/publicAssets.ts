import { build } from "astro:config/server";
import { getAssetPath } from "./withBase";

/** Pages 部署时从发布域名加载 public/ 下的资源。 */
export function getPublicAssetPath(path: string): string {
  const prefix = build.assetsPrefix;
  const origin = typeof prefix === "string" ? prefix : (prefix?.fallback ?? "");
  return origin + getAssetPath(path);
}
