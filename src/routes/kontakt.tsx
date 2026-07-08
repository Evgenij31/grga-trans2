import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site-pages";
import { getPageMeta } from "@/lib/i18n";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: getPageMeta("mk", "contact").title },
      { name: "description", content: getPageMeta("mk", "contact").description },
      { property: "og:title", content: getPageMeta("mk", "contact").ogTitle },
      { property: "og:description", content: getPageMeta("mk", "contact").ogDescription },
    ],
  }),
  component: () => <ContactPage locale="mk" />,
});
