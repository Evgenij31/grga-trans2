import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/site-pages";
import { getPageMeta } from "@/lib/i18n";

export const Route = createFileRoute("/en/za-nas")({
  head: () => ({
    meta: [
      { title: getPageMeta("en", "about").title },
      { name: "description", content: getPageMeta("en", "about").description },
      { property: "og:title", content: getPageMeta("en", "about").ogTitle },
      { property: "og:description", content: getPageMeta("en", "about").ogDescription },
    ],
  }),
  component: () => <AboutPage locale="en" />,
});
