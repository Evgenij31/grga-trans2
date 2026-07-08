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
    ],
  }),
  component: () => <ContactPage locale="sq" />,
});
