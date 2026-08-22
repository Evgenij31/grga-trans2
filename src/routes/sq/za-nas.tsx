import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/site-pages";
import { getPageMeta } from "@/lib/i18n";

export const Route = createFileRoute("/sq/za-nas")({
  head: () => ({
    meta: [
      { title: getPageMeta("sq", "about").title },
      { name: "description", content: getPageMeta("sq", "about").description },
      { property: "og:title", content: getPageMeta("sq", "about").ogTitle },
      { property: "og:description", content: getPageMeta("sq", "about").ogDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://grgatrans.mk/sq/za-nas" },
      { property: "og:site_name", content: "Grga Trans" },
      { property: "og:image", content: "https://grgatrans.mk/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: getPageMeta("sq", "about").ogTitle },
      { name: "twitter:description", content: getPageMeta("sq", "about").ogDescription },
      { name: "twitter:image", content: "https://grgatrans.mk/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://grgatrans.mk/sq/za-nas" },
      { rel: "alternate", hrefLang: "mk-MK", href: "https://grgatrans.mk/za-nas" },
      { rel: "alternate", hrefLang: "en", href: "https://grgatrans.mk/en/za-nas" },
      { rel: "alternate", hrefLang: "sq-AL", href: "https://grgatrans.mk/sq/za-nas" },
      { rel: "alternate", hrefLang: "x-default", href: "https://grgatrans.mk/za-nas" },
    ],
  }),
  component: () => <AboutPage locale="sq" />,
});
