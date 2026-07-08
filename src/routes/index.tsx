import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site-pages";
import { getPageMeta } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: getPageMeta("mk", "home").title },
      { name: "description", content: getPageMeta("mk", "home").description },
      { property: "og:title", content: getPageMeta("mk", "home").ogTitle },
      { property: "og:description", content: getPageMeta("mk", "home").ogDescription },
    ],
  }),
  component: () => <HomePage locale="mk" />,
});
