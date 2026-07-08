import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import {
  getLocaleFromPathname,
  getLocalizedNav,
  getPageFromPathname,
  getPathForLocale,
  localeConfig,
  locales,
} from "@/lib/i18n";
import { useLocation } from "@tanstack/react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const locale = getLocaleFromPathname(location.pathname);
  const page = getPageFromPathname(location.pathname);
  const links = getLocalizedNav(locale);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-3 inset-x-0 z-50 transition-all duration-300">
      <div
        className={`mx-auto flex h-16 w-[calc(100%-1rem)] max-w-7xl items-center justify-between rounded-2xl border border-transparent px-4 drop-shadow-[0px_0px_6px_rgba(180,180,180,0.6)] md:h-20 md:px-8 ${
          scrolled || open
            ? "bg-white/75 backdrop-blur-md shadow-(--shadow-bold)"
            : "bg-white/70 backdrop-blur-sm"
        }`}
      >
        <Link
          to={getPathForLocale(locale, "home")}
          className="flex shrink-0 items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo}
            alt="Grga Trans"
            className="h-12 md:h-14 w-auto drop-shadow-[0px_0px_6px_rgba(210,210,250,0.8)]"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.page}
              to={getPathForLocale(locale, link.page)}
              activeOptions={{ exact: true }}
              activeProps={{ className: "border-b-2 border-brand-accent" }}
              inactiveProps={{
                className: "text-primary/85 hover:text-accent/80 border-b-2 border-transparent",
              }}
              className="font-display uppercase tracking-wider text-lg pb-1 transition-colors text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="hidden items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-2 text-sm text-primary transition-all hover:border-brand-accent hover:text-brand md:inline-flex"
              aria-label={localeConfig[locale].label}
            >
              <span aria-hidden className="text-base leading-none">
                {localeConfig[locale].flag}
              </span>
              <span className="hidden lg:inline">{localeConfig[locale].label}</span>
              <ChevronDown size={14} className="text-current/70" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="min-w-44">
            {locales.map((option) => (
              <DropdownMenuItem key={option} asChild>
                <Link
                  to={getPathForLocale(option, page)}
                  onClick={() => setOpen(false)}
                  className={`flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground ${
                    option === locale ? "font-semibold text-brand" : ""
                  }`}
                >
                  <span aria-hidden className="text-base leading-none">
                    {localeConfig[option].flag}
                  </span>
                  <span>{localeConfig[option].label}</span>
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <button
          className="inline-flex items-center justify-center rounded-full p-2 text-primary transition-colors hover:bg-black/5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Меню"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="absolute left-0 right-0 top-full mt-2 md:hidden">
          <div className="mx-auto w-[calc(100%-1rem)] max-w-7xl rounded-2xl border border-white/10 bg-brand/95 px-4 py-3 backdrop-blur-md shadow-(--shadow-bold)">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.page}
                  to={getPathForLocale(locale, link.page)}
                  activeOptions={{ exact: true }}
                  onClick={() => setOpen(false)}
                  activeProps={{ className: "bg-white/10 text-white" }}
                  inactiveProps={{ className: "text-white/85" }}
                  className="w-full rounded-md px-3 py-3 font-display text-sm uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2">
              {locales.map((option) => (
                <Link
                  key={option}
                  to={getPathForLocale(option, page)}
                  onClick={() => setOpen(false)}
                  className={`inline-flex items-center justify-center gap-1.5 rounded-lg border px-2 py-2 text-xs transition-all ${
                    option === locale
                      ? "border-white/40 bg-white/15 text-white"
                      : "border-white/20 bg-white/5 text-white/85 hover:bg-white/10"
                  }`}
                >
                  <span aria-hidden className="text-base leading-none">
                    {localeConfig[option].flag}
                  </span>
                  <span>{localeConfig[option].label}</span>
                </Link>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
