import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site-pages";
import { getPageMeta } from "@/lib/i18n";

export const Route = createFileRoute("/sq/")({
  head: () => ({
    meta: [
      { title: getPageMeta("sq", "home").title },
      { name: "description", content: getPageMeta("sq", "home").description },
      { property: "og:title", content: getPageMeta("sq", "home").ogTitle },
      { property: "og:description", content: getPageMeta("sq", "home").ogDescription },
    ],
  }),
  component: () => <HomePage locale="sq" />,
});
