import { useEffect, useRef, useState, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Mountain,
  Package,
  Truck,
  Container,
  Barrel,
  Van,
} from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import aboutTeam from "@/assets/about-team.jpg";
import g1 from "@/assets/gal-1.jpg";
import g2 from "@/assets/gal-2.jpg";
import g3 from "@/assets/gal-3.jpg";
import g4 from "@/assets/gal-4.jpg";
import g5 from "@/assets/gal-5.jpg";
import g6 from "@/assets/gal-6.jpg";
import g7 from "@/assets/gal-7.jpg";
import g8 from "@/assets/gal-8.jpg";
import g9 from "@/assets/gal-9.jpg";
import g10 from "@/assets/gal-10.jpg";
import g11 from "@/assets/gal-11.jpg";
import g12 from "@/assets/gal-12.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import serviceCoal from "@/assets/service-coal.jpg";
import serviceSand from "@/assets/service-sand.jpg";
import serviceStone from "@/assets/service-stone.jpg";
import serviceTipper from "@/assets/service-tipper-3.jpg";
import serviceTanker from "@/assets/service-tanker-truck.jpg";
import serviceCurtainsider from "@/assets/service-curtainsider.jpg";
import { getLocaleCopy, type Locale } from "@/lib/i18n";
import { sendEmailServerFn } from "@/routes/api/send-email";
import { useMutation } from "@tanstack/react-query";

const heroSlides = [hero1, hero2, hero3];
const galleryImages = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12];

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <HeroSlideshow locale={locale} />
      <MissionSection locale={locale} />
      <StatsSection locale={locale} />
      <GallerySection locale={locale} />
    </>
  );
}

function HeroSlideshow({ locale }: { locale: Locale }) {
  const copy = getLocaleCopy(locale).home;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {heroSlides.map((src, i) => (
        <div
          key={src}
          className={`parallax-bg absolute inset-0 transition-opacity duration-1500ms ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${src})` }}
          aria-hidden={i !== index}
        />
      ))}
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display text-5xl uppercase tracking-tight text-white drop-shadow-2xl sm:text-7xl md:text-8xl lg:text-9xl">
          {copy.hero.title}
        </h1>
        <h2 className="mt-4 max-w-3xl text-balance text-lg font-light text-white/90 sm:text-2xl md:mt-6 md:text-3xl">
          {copy.hero.subtitle}
        </h2>
      </div>
    </section>
  );
}

function MissionSection({ locale }: { locale: Locale }) {
  const copy = getLocaleCopy(locale).home;
  const services = [
    { icon: Container, img: serviceTipper, ...copy.services[0] },
    { icon: Truck, img: serviceCurtainsider, ...copy.services[1] },
    { icon: Mountain, img: serviceStone, ...copy.services[2] },
    { icon: Barrel, img: serviceTanker, ...copy.services[3] },
    { icon: Van, img: serviceStone, ...copy.services[4] },
  ];

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto mt-16 flex max-w-7xl gap-8 px-8 flex-col justify-center align-center flex-wrap md:mt-20 md:flex-row">
        {services.map((service) => (
          <article
            key={service.title}
            className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[(--shadow-soft)] w-full md:w-[calc(32%-1rem)]"
          >
            <div className="aspect-4/3 overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                loading="lazy"
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand text-brand-foreground">
                <service.icon size={22} />
              </div>
              <h3 className="mb-2 font-display text-xl uppercase tracking-wide text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CountUp({ end, suffix = "+", locale }: { end: number; suffix?: string; locale: Locale }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1800;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min(1, (now - start) / duration);
              setN(Math.floor(end * (1 - Math.pow(1 - progress, 3))));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {n.toLocaleString(getLocaleNumberFormat(locale))}
      {suffix}
    </span>
  );
}

function getLocaleNumberFormat(locale: Locale) {
  if (locale === "en") return "en-US";
  if (locale === "sq") return "sq-AL";
  return "mk-MK";
}

function StatsSection({ locale }: { locale: Locale }) {
  const copy = getLocaleCopy(locale).home;
  const stats = [
    { label: copy.stats.items[0], value: 30 },
    { label: copy.stats.items[1], value: 25 },
    { label: copy.stats.items[2], value: 5 },
    { label: copy.stats.items[3], value: 50 }, // Updated value for passed kilometers
  ];

  return (
    <section className="bg-brand py-20 text-brand-foreground md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-0 text-center md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="border-2 border-brand bg-secondary/85 py-12 backdrop-blur-sm md:py-16 first:rounded-l-2xl last:rounded-r-2xl"
            >
              <div className="font-display text-4xl text-brand-accent md:text-6xl">
                <CountUp
                  end={stat.value}
                  locale={locale}
                  suffix={index === 3 ? "M+" : "+"} // Added condition for the last number to include 'M' at the end
                />
              </div>
              <div className="mt-2 text-sm uppercase tracking-wider text-brand md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <span className="mb-4 inline-block text-xs font-display uppercase tracking-[0.2em] text-brand-accent">
              {copy.stats.label}
            </span>
            <h2 className="mb-6 text-3xl font-display uppercase md:text-4xl">
              {copy.stats.heading}
            </h2>
            <p className="mb-4 leading-relaxed text-white/85">{copy.stats.paragraphs[0]}</p>
            <p className="leading-relaxed text-white/85">{copy.stats.paragraphs[1]}</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-brand-accent/20" />
            <img
              src={aboutTeam}
              alt={copy.stats.heading}
              loading="lazy"
              width={1200}
              height={900}
              className="h-100 w-full rounded-xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function GallerySection({ locale }: { locale: Locale }) {
  const copy = getLocaleCopy(locale).home;
  const [index, setIndex] = useState(0);
  const total = galleryImages.length;
  const go = (next: number) => setIndex(((next % total) + total) % total);

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block text-xs font-display uppercase tracking-[0.2em] text-brand-accent">
            {copy.gallery.label}
          </span>
          <h2 className="text-3xl font-display uppercase text-foreground md:text-4xl">
            {copy.gallery.heading}
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-xl bg-muted shadow-[(--shadow-soft)]">
          <div className="relative aspect-video w-full max-h-155 overflow-hidden">
            {galleryImages.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`${copy.gallery.label} ${idx + 1}`}
                loading={idx === 0 ? "eager" : "lazy"}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  idx === index ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={idx !== index}
              />
            ))}
          </div>

          <button
            onClick={() => go(index - 1)}
            aria-label="Previous"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition-all hover:border-brand-accent hover:bg-brand-accent md:left-5 md:h-14 md:w-14"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => go(index + 1)}
            aria-label="Next"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition-all hover:border-brand-accent hover:bg-brand-accent md:right-5 md:h-14 md:w-14"
          >
            <ChevronRight />
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => go(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  idx === index ? "w-6 bg-brand-accent" : "w-1.5 bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutPage({ locale }: { locale: Locale }) {
  const copy = getLocaleCopy(locale).about;
  const [index, setIndex] = useState(0);
  const total = copy.slides.length;
  const slideImages = [hero1, hero2, hero3, aboutTeam, g9, g10];

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const go = useCallback(
    (next: number) => {
      setIndex(((next % total) + total) % total);

      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      intervalRef.current = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % total);
      }, 4000);
    },
    [total],
  );

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % total);
    }, 4000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [total, go]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-16 md:pt-20">
      {copy.slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            idx === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slideImages[idx]})` }}
          aria-hidden={idx !== index}
        />
      ))}
      <div className="absolute inset-0 bg-linear-to-r from-primary/75 via-primary/25 to-muted/3" />

      <div className="relative z-10 flex min-h-[calc(100vh-5rem)] flex-col">
        <div className="flex-1 flex items-center">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 md:grid-cols-2 md:px-12">
            <div
              key={index}
              className="animate-in fade-in slide-in-from-left-8 text-white duration-700"
            >
              <span className="mb-4 inline-block text-xs font-display uppercase tracking-[0.25em] text-brand-accent">
                {copy.label}
              </span>
              <h1 className="mb-6 text-balance font-display text-3xl uppercase drop-shadow-lg md:text-5xl">
                {copy.slides[index].title}
              </h1>
              <p className="max-w-xl text-balance text-lg leading-relaxed text-white/90 md:text-xl whitespace-pre-line">
                {copy.slides[index].text}
              </p>
            </div>
            <div className="hidden items-end justify-end md:flex">
              <div className="flex gap-3">
                <button
                  onClick={() => go(index - 1)}
                  aria-label="Previous"
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:border-brand-accent hover:bg-brand-accent"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={() => go(index + 1)}
                  aria-label="Next"
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:border-brand-accent hover:bg-brand-accent"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3 pb-6 md:hidden">
          <button
            onClick={() => go(index - 1)}
            aria-label="Previous"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => go(index + 1)}
            aria-label="Next"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md"
          >
            <ChevronRight />
          </button>
        </div>

        <div className="px-4 pb-8 md:pb-10">
          <div className="mx-auto flex max-w-4xl justify-center gap-2 overflow-x-auto md:gap-3">
            {copy.slides.map((slide, idx) => (
              <button
                key={idx}
                onClick={() => go(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`shrink-0 overflow-hidden rounded-md border-2 transition-all ${
                  idx === index
                    ? "h-16 w-24 border-brand-accent opacity-100 md:h-20 md:w-32"
                    : "h-12 w-16 border-white/30 opacity-60 hover:opacity-100 md:h-14 md:w-20"
                }`}
              >
                <img
                  src={slideImages[idx]}
                  alt={slide.title}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactPage({ locale }: { locale: Locale }) {
  return (
    <div className="pt-16 md:pt-20">
      <Toaster />
      <ContactCards locale={locale} />
      <ContactForm locale={locale} />
    </div>
  );
}

function ContactCards({ locale }: { locale: Locale }) {
  const copy = getLocaleCopy(locale).contact;

  return (
    <section className="bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block text-xs font-display uppercase tracking-[0.2em] text-brand-accent">
            {copy.label}
          </span>
          <h1 className="text-4xl font-display uppercase text-foreground md:text-5xl">
            {copy.heading}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{copy.intro}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {copy.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-border bg-card p-8 text-center transition-all shadow-xs hover:shadow-md hover:-translate-y-1"
            >
              <h3 className="mb-4 font-display text-xl uppercase text-foreground">{card.title}</h3>
              <ul className="space-y-1.5">
                {card.items.map((item: string | { label: string; href: string | null }) => (
                  <li
                    key={typeof item === "string" ? item : item.label}
                    className="text-muted-foreground"
                  >
                    {typeof item === "string" ? (
                      item
                    ) : item.href ? (
                      <a href={item.href} className="transition-colors hover:text-brand">
                        {item.label}
                      </a>
                    ) : (
                      item.label
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

function ContactForm({ locale }: { locale: Locale }) {
  const copy = getLocaleCopy(locale).contact.form;
  const [data, setData] = useState({ name: "", email: "", message: "" });

  // TanStack Query handles loading states cleanly
  const mutation = useMutation({
    mutationFn: (variables: { name: string; email: string; message: string }) =>
      sendEmailServerFn({ data: variables }),
    onSuccess: () => {
      toast.success(copy.success);
      setData({ name: "", email: "", message: "" });
    },
    onError: () => {
      toast.error("Something went wrong. Please try again.");
    },
  });

  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = data.name.trim();
    const email = data.email.trim();
    const message = data.message.trim();

    if (!name || name.length > 100) return toast.error(copy.errors.name);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255)
      return toast.error(copy.errors.email);
    if (!message || message.length > 1000) return toast.error(copy.errors.message);

    // Pass the payload directly
    mutation.mutate({ name, email, message });
  };

  return (
    <section className="bg-secondary py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-10 text-center">
          <span className="mb-4 inline-block text-xs font-display uppercase tracking-[0.2em] text-brand-accent">
            {copy.label}
          </span>
          <h2 className="text-3xl font-display uppercase text-foreground md:text-4xl">
            {copy.heading}
          </h2>
        </div>

        <form
          onSubmit={onSubmit}
          className="space-y-5 rounded-xl border border-border bg-card p-6 shadow-sm md:p-10"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
              {copy.name}
            </label>
            <input
              id="name"
              type="text"
              value={data.name}
              onChange={(event) => setData({ ...data, name: event.target.value })}
              maxLength={100}
              required
              className="w-full rounded-md border border-input bg-background px-4 py-3 text-foreground transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand"
              placeholder={copy.namePlaceholder}
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
              {copy.email}
            </label>
            <input
              id="email"
              type="email"
              value={data.email}
              onChange={(event) => setData({ ...data, email: event.target.value })}
              maxLength={255}
              required
              className="w-full rounded-md border border-input bg-background px-4 py-3 text-foreground transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand"
              placeholder={copy.emailPlaceholder}
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
              {copy.message}
            </label>
            <textarea
              id="message"
              value={data.message}
              onChange={(event) => setData({ ...data, message: event.target.value })}
              maxLength={1000}
              required
              rows={6}
              className="w-full resize-y rounded-md border border-input bg-background px-4 py-3 text-foreground transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand"
              placeholder={copy.messagePlaceholder}
            />
          </div>
          <button
            type="submit"
            disabled={mutation.isPending}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand px-8 py-3 font-display text-sm uppercase tracking-wider text-brand-foreground transition-colors hover:bg-brand-accent disabled:opacity-60 md:w-auto"
          >
            {mutation.isPending ? copy.sending : copy.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
