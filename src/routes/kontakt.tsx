import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MapPin, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Контакт — Грга Транс" },
      {
        name: "description",
        content: "Стапете во контакт со Грга Транс — телефон, email и локација.",
      },
      { property: "og:title", content: "Контакт — Грга Транс" },
      {
        property: "og:description",
        content: "Контактирајте нѐ за киперски транспорт и логистички услуги.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-16 md:pt-20">
      <Toaster />
      <ContactCards />
      <ContactForm />
    </div>
  );
}

function ContactCards() {
  const cards = [
    {
      icon: Phone,
      title: "Телефон",
      items: [
        { label: "070/309-403", href: "tel:070309403" },
        { label: "076/552-462", href: "tel:076552462" },
        { label: "075/746-066", href: "tel:075746066" },
      ],
    },
    {
      icon: MapPin,
      title: "Локација",
      items: [
        { label: "ул. Пример 123", href: null },
        { label: "2300 Кочани", href: null },
        { label: "Северна Македонија", href: null },
      ],
    },
    {
      icon: Mail,
      title: "Email",
      items: [
        { label: "grgadoo99@gmail.com", href: "mailto:grgadoo99@gmail.com" },
        { label: "contact@grga-trans.com", href: "mailto:contact@grga-trans.com" },
      ],
    },
  ];
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-display uppercase tracking-[0.2em] text-brand-accent mb-4">
            Контакт
          </span>
          <h1 className="text-4xl md:text-5xl font-display uppercase text-foreground">
            Стапете во контакт
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Тука сме за вашите прашања, понуди и соработки. Изберете го најпогодниот начин за
            контакт.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-[(--shadow-soft)] transition-shadow"
            >
              <div className="mx-auto w-14 h-14 rounded-full bg-brand text-brand-foreground flex items-center justify-center mb-5">
                <c.icon size={22} />
              </div>
              <h3 className="font-display uppercase text-xl mb-4 text-foreground">{c.title}</h3>
              <ul className="space-y-1.5">
                {c.items.map((it) => (
                  <li key={it.label} className="text-muted-foreground">
                    {it.href ? (
                      <a href={it.href} className="hover:text-brand transition-colors">
                        {it.label}
                      </a>
                    ) : (
                      it.label
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = data.name.trim();
    const email = data.email.trim();
    const message = data.message.trim();
    if (!name || name.length > 100) return toast.error("Внесете валидно име (до 100 знаци).");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255)
      return toast.error("Внесете валидна email адреса.");
    if (!message || message.length > 1000)
      return toast.error("Пораката е задолжителна (до 1000 знаци).");
    setSending(true);
    setTimeout(() => {
      toast.success("Пораката е испратена! Ќе ве контактираме наскоро.");
      setData({ name: "", email: "", message: "" });
      setSending(false);
    }, 700);
  };

  return (
    <section className="py-20 md:py-24 bg-secondary">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-display uppercase tracking-[0.2em] text-brand-accent mb-4">
            Контактирајте нѐ
          </span>
          <h2 className="text-3xl md:text-4xl font-display uppercase text-foreground">
            Контакт форма
          </h2>
        </div>
        <form
          onSubmit={onSubmit}
          className="bg-card border border-border rounded-xl p-6 md:p-10 shadow-sm space-y-5"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Име и презиме
            </label>
            <input
              id="name"
              type="text"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              maxLength={100}
              required
              className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition"
              placeholder="Вашето име"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              maxLength={255}
              required
              className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition"
              placeholder="primer@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Порака
            </label>
            <textarea
              id="message"
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
              maxLength={1000}
              required
              rows={6}
              className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition resize-y"
              placeholder="Кажете ни како можеме да помогнеме..."
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-brand text-brand-foreground px-8 py-3 rounded-md font-display uppercase tracking-wider text-sm hover:bg-brand-accent transition-colors disabled:opacity-60"
          >
            <Send size={16} />
            {sending ? "Се испраќа..." : "Испрати порака"}
          </button>
        </form>
      </div>
    </section>
  );
}
