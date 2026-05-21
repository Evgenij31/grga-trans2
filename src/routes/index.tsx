import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Truck, Mountain, Package, ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import serviceCoal from "@/assets/service-coal.jpg";
import serviceSand from "@/assets/service-sand.jpg";
import serviceStone from "@/assets/service-stone.jpg";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Грга Транс — Почетна" },
      { name: "description", content: "Грга Транс — киперски транспорт во и надвор од државата од 1999 година." },
      { property: "og:title", content: "Грга Транс — Поврзувајќи дестинации, градејќи доверба" },
      { property: "og:description", content: "Професионален киперски транспорт за јаглен, песок, камен и градежни материјали." },
    ],
  }),
  component: HomePage,
});

const heroSlides = [hero1, hero2, hero3];
const galleryImages = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12];

function HomePage() {
  return (
    <>
      <HeroSlideshow />
      <MissionSection />
      <StatsSection />
      <GallerySection />
    </>
  );
}

function HeroSlideshow() {
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
          className={`parallax-bg absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${src})` }}
          aria-hidden={i !== index}
        />
      ))}
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-display text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight drop-shadow-2xl">
          Грга Транс
        </h1>
        <h2 className="mt-4 md:mt-6 text-white/90 text-lg sm:text-2xl md:text-3xl font-light max-w-3xl text-balance">
          Поврзувајќи дестинации, градејќи доверба
        </h2>
      </div>
    </section>
  );
}

function MissionSection() {
  const services = [
    { icon: Mountain, img: serviceCoal, title: "Транспорт на јаглен", desc: "Сигурен и навремен превоз на јаглен за енергетски и индустриски потреби." },
    { icon: Package, img: serviceSand, title: "Транспорт на песок", desc: "Достава на песок до градилишта и фабрики низ целата држава." },
    { icon: Truck, img: serviceStone, title: "Транспорт на камен", desc: "Превоз на дробен камен и градежни агрегати со современа киперска флота." },
  ];
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <span className="inline-block text-xs font-display uppercase tracking-[0.2em] text-brand-accent mb-4">Нашата мисија</span>
        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-balance">
          Посветени на обезбедување врвни логистички услуги кои ги надминуваат вашите очекувања.
          Нашата мисија е да ги олесниме вашите деловни операции преку ефективни, сигурни и иновативни
          решенија за транспорт и складирање. Фирмата е основана во 1999 година и нејзина главна
          дејност е киперски транспорт во државата и надвор.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 grid gap-8 md:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="w-12 h-12 rounded-lg bg-brand text-brand-foreground flex items-center justify-center mb-4">
                <s.icon size={22} />
              </div>
              <h3 className="text-xl font-display uppercase tracking-wide text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground">{s.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CountUp({ end, suffix = "+" }: { end: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            setN(Math.floor(end * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);
  return <span ref={ref}>{n.toLocaleString("mk-MK")}{suffix}</span>;
}

function StatsSection() {
  const stats = [
    { label: "Вработени", value: 30 },
    { label: "Возила", value: 21 },
    { label: "Складишта", value: 12 },
    { label: "Изминати километри", value: 420000 },
  ];
  return (
    <section className="py-20 md:py-28 bg-brand text-brand-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl md:text-6xl text-brand-accent">
                <CountUp end={s.value} />
              </div>
              <div className="mt-2 text-sm md:text-base uppercase tracking-wider text-white/80">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <span className="inline-block text-xs font-display uppercase tracking-[0.2em] text-brand-accent mb-4">За нас</span>
            <h2 className="text-3xl md:text-4xl font-display uppercase mb-6">Повеќе од две децении искуство</h2>
            <p className="text-white/85 leading-relaxed mb-4">
              Од нашето основање во 1999 година, Грга Транс расте заедно со своите клиенти, градејќи
              партнерства засновани на доверба, точност и професионализам. Нашата флота од модерни
              киперски возила секојдневно поминува километри низ Македонија и регионот.
            </p>
            <p className="text-white/85 leading-relaxed">
              Со искусен тим возачи и логистичари, секоја пратка ја извршуваме сигурно, навреме и со
              највисок стандард на безбедност.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-accent/20 rounded-2xl -z-10" />
            <img
              src={aboutTeam}
              alt="Тимот на Грга Транс"
              loading="lazy"
              width={1200}
              height={900}
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const trackRef = useRef<HTMLDivElement>(null);
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-display uppercase tracking-[0.2em] text-brand-accent mb-4">Галерија</span>
          <h2 className="text-3xl md:text-4xl font-display uppercase text-foreground">Нашата работа во акција</h2>
        </div>
      </div>
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 pb-6 scroll-smooth"
        style={{ scrollbarWidth: "thin" }}
      >
        {galleryImages.map((src, i) => (
          <div
            key={i}
            className="snap-start shrink-0 w-72 md:w-96 aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-[var(--shadow-soft)] transition-shadow"
          >
            <img
              src={src}
              alt={`Галерија ${i + 1}`}
              loading="lazy"
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
