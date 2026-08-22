import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site-pages";
import { getPageMeta } from "@/lib/i18n";

export const Route = createFileRoute("/sq/kontakt")({
  head: () => ({
    meta: [
      { title: getPageMeta("sq", "contact").title },
      { name: "description", content: getPageMeta("sq", "contact").description },
      { property: "og:title", content: getPageMeta("sq", "contact").ogTitle },
      { property: "og:description", content: getPageMeta("sq", "contact").ogDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://grgatrans.mk/sq/kontakt" },
      { property: "og:site_name", content: "Grga Trans" },
      { property: "og:image", content: "https://grgatrans.mk/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: getPageMeta("sq", "contact").ogTitle },
      { name: "twitter:description", content: getPageMeta("sq", "contact").ogDescription },
      { name: "twitter:image", content: "https://grgatrans.mk/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://grgatrans.mk/sq/kontakt" },
      { rel: "alternate", hrefLang: "mk-MK", href: "https://grgatrans.mk/kontakt" },
      { rel: "alternate", hrefLang: "en", href: "https://grgatrans.mk/en/kontakt" },
      { rel: "alternate", hrefLang: "sq-AL", href: "https://grgatrans.mk/sq/kontakt" },
      { rel: "alternate", hrefLang: "x-default", href: "https://grgatrans.mk/kontakt" },
    ],
  }),
  component: () => <ContactPage locale="sq" />,
});
