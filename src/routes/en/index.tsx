import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site-pages";
import { getPageMeta } from "@/lib/i18n";

export const Route = createFileRoute("/en/")({
  head: () => ({
    meta: [
      { title: getPageMeta("en", "home").title },
      { name: "description", content: getPageMeta("en", "home").description },
      { property: "og:title", content: getPageMeta("en", "home").ogTitle },
      { property: "og:description", content: getPageMeta("en", "home").ogDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://grgatrans.mk/en/" },
      { property: "og:site_name", content: "Grga Trans" },
      { property: "og:image", content: "https://grgatrans.mk/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: getPageMeta("en", "home").ogTitle },
      { name: "twitter:description", content: getPageMeta("en", "home").ogDescription },
      { name: "twitter:image", content: "https://grgatrans.mk/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://grgatrans.mk/en/" },
      { rel: "alternate", hrefLang: "mk-MK", href: "https://grgatrans.mk/" },
      { rel: "alternate", hrefLang: "en", href: "https://grgatrans.mk/en/" },
      { rel: "alternate", hrefLang: "sq-AL", href: "https://grgatrans.mk/sq/" },
      { rel: "alternate", hrefLang: "x-default", href: "https://grgatrans.mk/" },
    ],
  }),
  component: () => <HomePage locale="en" />,
});
