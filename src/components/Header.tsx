import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Почетна" },
  { to: "/za-nas", label: "За нас" },
  { to: "/kontakt", label: "Контакт" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-brand/95 backdrop-blur-md shadow-(--shadow-soft)"
          : "bg-brand/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Грга Транс"
            className="h-12 md:h-13 w-auto drop-shadow-[0px_0px_3px_rgba(240,240,240,0.7)]"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-white border-b-2 border-brand-accent" }}
              inactiveProps={{
                className: "text-white/85 hover:text-white border-b-2 border-transparent",
              }}
              className="font-display uppercase tracking-wider text-lg pb-1 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Меню"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-white/10 bg-brand/95 backdrop-blur-md">
          <div className="px-4 py-3 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: true }}
                onClick={() => setOpen(false)}
                activeProps={{ className: "bg-white/10 text-white" }}
                inactiveProps={{ className: "text-white/85" }}
                className="font-display uppercase tracking-wider text-sm py-3 px-3 rounded-md"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
