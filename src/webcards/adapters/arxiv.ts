import { defaultTreeAdapter, parse } from "parse5";
import { fetchText } from "../http";
import type { PlatformMatch, WebCardData } from "../types";
import { faviconFrom } from "./generic";

/** 从摘要页读取论文元数据；PDF 和 HTML 链接保留原跳转地址。 */
export async function fetchArxiv(
  match: PlatformMatch,
  timeoutMs: number,
): Promise<WebCardData> {
  const id = match.params.id;
  const abstractUrl = `https://arxiv.org/abs/${id}`;
  const html = await fetchText(abstractUrl, { timeoutMs });
  const metadata = new Map<string, string[]>();

  if (html) {
    const { isElementNode } = defaultTreeAdapter;
    const root = parse(html)
      .childNodes.filter(isElementNode)
      .find((node) => node.tagName === "html");
    const head = root?.childNodes
      .filter(isElementNode)
      .find((node) => node.tagName === "head");
    for (const node of head?.childNodes ?? []) {
      if (!isElementNode(node) || node.tagName !== "meta") continue;
      const name = node.attrs.find((attr) => attr.name === "name")?.value;
      const value = node.attrs
        .find((attr) => attr.name === "content")
        ?.value.replace(/\s+/g, " ")
        .trim();
      if (!name?.startsWith("citation_") || !value) continue;
      const values = metadata.get(name) ?? [];
      values.push(value);
      metadata.set(name, values);
    }
  }

  const title = metadata.get("citation_title")?.[0];
  return {
    url: match.url,
    platform: "arxiv",
    kind: "article",
    title: title ?? `arXiv:${id}`,
    description: metadata.get("citation_abstract")?.[0],
    siteName: "arXiv",
    favicon: html && title ? faviconFrom(html, abstractUrl) : undefined,
    author: metadata.get("citation_author")?.join("; "),
    degraded: !title,
  };
}
