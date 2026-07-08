import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/site-pages";
import { getPageMeta } from "@/lib/i18n";

export const Route = createFileRoute("/za-nas")({
  head: () => ({
    meta: [
      { title: getPageMeta("mk", "about").title },
      { name: "description", content: getPageMeta("mk", "about").description },
      { property: "og:title", content: getPageMeta("mk", "about").ogTitle },
      { property: "og:description", content: getPageMeta("mk", "about").ogDescription },
    ],
  }),
  component: () => <AboutPage locale="mk" />,
});
