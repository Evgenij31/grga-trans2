import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site-pages";
import { getPageMeta } from "@/lib/i18n";

export const Route = createFileRoute("/en/")({
  head: () => ({
    meta: [
      { title: getPageMeta("en", "home").title },
      { name: "description", content: getPageMeta("en", "home").description },
      { property: "og:title", content: getPageMeta("en", "home").ogTitle },
      { property: "og:description", content: getPageMeta("en", "home").ogDescription },
    ],
  }),
  component: () => <HomePage locale="en" />,
});
