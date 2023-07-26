import type { V2_MetaFunction } from "@remix-run/node";
import Privacy from "~/components/Routes/privacy";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "PRIVACY | CANSHO" },
    { name: "description", content: "映画ブログ CANSHO のプライバシーについて" },
    { property: "og:title", content: "CANSHO" },
    { property: "og:description", content: "映画ブログ CANSHO のプライバシーについて" },
    { property: "og:type", content: "article" },
    { property: "og:url", content: "https://cansho.me/privacy" },
    {
      property: "og:site_name",
      content: "CANSHO | 普通に楽しんで普通に鑑賞する、子上ねんその映画ブログ",
    },
    {
      property: "og:image",
      content:
        "https://images.microcms-assets.io/assets/0857b272e30c471091c41b246557b29e/a6fbbfdd317e4645822b8101851c71ad/ogp.png",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:creator", content: "@nenso_negami" },
    { name: "twitter:site", content: "@nenso_negami" },
  ];
};

export default function PrivacyPage() {
  return <Privacy />;
}
