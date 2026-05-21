import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Почетна" },
  { to: "/za-nas", label: "За нас" },
  { to: "/kontakt", label: "Контакт" },
] as const;

export function Footer() {
  return (
    <footer className="bg-brand text-brand-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-display uppercase tracking-wider text-sm mb-4 text-brand-accent">Навигација</h3>
          <ul className="space-y-2">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/85 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center text-center">
          <img src={logo} alt="Грга Транс" className="h-16 w-auto bg-white rounded-md p-2 mb-4" />
          <div className="flex gap-3 mt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-accent flex items-center justify-center transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-accent flex items-center justify-center transition-colors"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div className="md:text-right">
          <h3 className="font-display uppercase tracking-wider text-sm mb-4 text-brand-accent">Контакт</h3>
          <ul className="space-y-2">
            <li className="flex md:justify-end items-center gap-2">
              <Phone size={16} className="text-brand-accent" />
              <a href="tel:+38970123456" className="text-white/85 hover:text-white">+389 70 123 456</a>
            </li>
            <li className="flex md:justify-end items-center gap-2">
              <Mail size={16} className="text-brand-accent" />
              <a href="mailto:info@grgatrans.mk" className="text-white/85 hover:text-white">info@grgatrans.mk</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Грга Транс. Сите права задржани.
        </div>
      </div>
    </footer>
  );
}
