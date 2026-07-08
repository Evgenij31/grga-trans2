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
    ],
  }),
  component: () => <AboutPage locale="sq" />,
});
