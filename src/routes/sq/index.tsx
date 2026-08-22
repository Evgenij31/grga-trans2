import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site-pages";
import { getPageMeta } from "@/lib/i18n";

export const Route = createFileRoute("/sq/")({
  head: () => ({
    meta: [
      { title: getPageMeta("sq", "home").title },
      { name: "description", content: getPageMeta("sq", "home").description },
      { property: "og:title", content: getPageMeta("sq", "home").ogTitle },
      { property: "og:description", content: getPageMeta("sq", "home").ogDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://grgatrans.mk/sq/" },
      { property: "og:site_name", content: "Grga Trans" },
      { property: "og:image", content: "https://grgatrans.mk/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: getPageMeta("sq", "home").ogTitle },
      { name: "twitter:description", content: getPageMeta("sq", "home").ogDescription },
      { name: "twitter:image", content: "https://grgatrans.mk/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://grgatrans.mk/sq/" },
      { rel: "alternate", hrefLang: "mk-MK", href: "https://grgatrans.mk/" },
      { rel: "alternate", hrefLang: "en", href: "https://grgatrans.mk/en/" },
      { rel: "alternate", hrefLang: "sq-AL", href: "https://grgatrans.mk/sq/" },
      { rel: "alternate", hrefLang: "x-default", href: "https://grgatrans.mk/" },
    ],
  }),
  component: () => <HomePage locale="sq" />,
});
