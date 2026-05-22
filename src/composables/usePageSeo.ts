import { useHead } from "@vueuse/head";
import seoConfig from "@/data/seo.json";

const { siteUrl, ogImage, keywords } = seoConfig;

export type PageSeoOptions = {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
};

function absoluteUrl(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalized}`;
}

export function usePageSeo(options: PageSeoOptions) {
  const canonicalPath = options.path ?? "/";
  const canonical = absoluteUrl(canonicalPath);
  const image = absoluteUrl(ogImage);

  useHead({
    title: options.title,
    meta: [
      { name: "description", content: options.description },
      { name: "keywords", content: keywords },
      ...(options.noindex ? [{ name: "robots", content: "noindex, nofollow" }] : []),
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "LINCO" },
      { property: "og:locale", content: "es_MX" },
      { property: "og:title", content: options.title },
      { property: "og:description", content: options.description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: options.title },
      { name: "twitter:description", content: options.description },
      { name: "twitter:image", content: image },
    ],
    link: [{ rel: "canonical", href: canonical }],
  });
}

export type SeoPageKey = keyof typeof seoConfig.pages;

export function useRouteSeo(pageKey: SeoPageKey, path?: string) {
  const page = seoConfig.pages[pageKey];
  usePageSeo({
    title: page.title,
    description: page.description,
    path: path ?? `/${pageKey === "inicio" ? "inicio" : pageKey}`,
  });
}
