import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import s1 from "@/assets/hero-1.jpg";
import s2 from "@/assets/hero-2.jpg";
import s3 from "@/assets/hero-3.jpg";
import s4 from "@/assets/about-team.jpg";
import s5 from "@/assets/gal-9.jpg";

export const Route = createFileRoute("/za-nas")({
  head: () => ({
    meta: [
      { title: "За нас — Грга Транс" },
      { name: "description", content: "Запознајте го Грга Транс — компанија со повеќе од 25 години искуство во киперскиот транспорт." },
      { property: "og:title", content: "За нас — Грга Транс" },
      { property: "og:description", content: "Историја, мисија и тим на Грга Транс." },
    ],
  }),
  component: AboutPage,
});

const slides = [
  {
    img: s1,
    title: "Нашата приказна",
    text: "Грга Транс е основана во 1999 година со визија да обезбеди сигурен и професионален киперски транспорт. Над две децении подоцна, продолжуваме да ги поврзуваме градилиштата, рудниците и фабриките низ целата држава.",
  },
  {
    img: s2,
    title: "Модерна флота",
    text: "Располагаме со над 21 кипер и специјализирани возила. Редовно ги одржуваме и обновуваме за да гарантираме безбедност, ефикасност и минимално влијание врз животната средина.",
  },
  {
    img: s3,
    title: "Искусен тим",
    text: "Нашите 30+ вработени се срцето на компанијата. Возачите со долгогодишно искуство, логистичарите и техничкиот персонал работат заедно за да обезбедат секоја пратка да стигне навреме.",
  },
  {
    img: s4,
    title: "Нашите вредности",
    text: "Доверба, точност и безбедност. Овие три принципи ги водат сите наши одлуки — од изборот на возила, преку планирањето на рутите, до односот со клиентите и партнерите.",
  },
  {
    img: s5,
    title: "Поглед напред",
    text: "Продолжуваме да инвестираме во нови возила, дигитални системи за следење и обука на нашиот тим. Целта ни е да останеме лидер во киперскиот транспорт во регионот.",
  },
];

function AboutPage() {
  const [i, setI] = useState(0);
  const total = slides.length;
  const go = (n: number) => setI(((n % total) + total) % total);
  const slide = slides[i];

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-16 md:pt-20">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${s.img})` }}
          aria-hidden={idx !== i}
        />
      ))}
      <div className="absolute inset-0 bg-linear-to-r from-brand/90 via-brand/70 to-brand/30" />

      <div className="relative z-10 min-h-[calc(100vh-5rem)] flex flex-col">
        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
            <div key={i} className="text-white animate-in fade-in slide-in-from-left-8 duration-700">
              <span className="inline-block text-xs font-display uppercase tracking-[0.25em] text-brand-accent mb-4">
                {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <h1 className="font-display uppercase text-4xl md:text-6xl mb-6 text-balance drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl text-balance">
                {slide.text}
              </p>
            </div>
            <div className="hidden md:flex justify-end items-end">
              <div className="flex gap-3">
                <button
                  onClick={() => go(i - 1)}
                  aria-label="Претходна"
                  className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-brand-accent hover:border-brand-accent transition-all flex items-center justify-center"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={() => go(i + 1)}
                  aria-label="Следна"
                  className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-brand-accent hover:border-brand-accent transition-all flex items-center justify-center"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex justify-center gap-3 pb-6">
          <button
            onClick={() => go(i - 1)}
            aria-label="Претходна"
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => go(i + 1)}
            aria-label="Следна"
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="pb-8 md:pb-10 px-4">
          <div className="max-w-4xl mx-auto flex justify-center gap-2 md:gap-3 overflow-x-auto">
            {slides.map((s, idx) => (
              <button
                key={idx}
                onClick={() => go(idx)}
                aria-label={`Слајд ${idx + 1}`}
                className={`shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                  idx === i
                    ? "border-brand-accent w-24 h-16 md:w-32 md:h-20 opacity-100"
                    : "border-white/30 w-16 h-12 md:w-20 md:h-14 opacity-60 hover:opacity-100"
                }`}
              >
                <img src={s.img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
