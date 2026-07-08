import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site-pages";
import { getPageMeta } from "@/lib/i18n";

export const Route = createFileRoute("/en/kontakt")({
  head: () => ({
    meta: [
      { title: getPageMeta("en", "contact").title },
      { name: "description", content: getPageMeta("en", "contact").description },
      { property: "og:title", content: getPageMeta("en", "contact").ogTitle },
      { property: "og:description", content: getPageMeta("en", "contact").ogDescription },
    ],
  }),
  component: () => <ContactPage locale="en" />,
});
