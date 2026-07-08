import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
import {
  getLocaleCopy,
  getLocaleFromPathname,
  getLocalizedNav,
  getPathForLocale,
} from "@/lib/i18n";
import { useLocation } from "@tanstack/react-router";

export function Footer() {
  const location = useLocation();
  const locale = getLocaleFromPathname(location.pathname);
  const copy = getLocaleCopy(locale).footer;
  const links = getLocalizedNav(locale);

  return (
    <footer className="bg-brand text-brand-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-display uppercase tracking-wider text-sm mb-4 text-brand-accent">
            {copy.navigation}
          </h3>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.page}>
                <Link
                  to={getPathForLocale(locale, link.page)}
                  className="text-white/85 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src={logo}
            alt="Грга Транс"
            className="h-16 w-auto mb-4 drop-shadow-[0px_0px_3px_rgba(240,240,240,0.7)]"
          />
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
          <h3 className="font-display uppercase tracking-wider text-sm mb-4 text-brand-accent">
            {copy.contact}
          </h3>
          <ul className="space-y-2">
            <li className="flex md:justify-end items-center gap-2">
              <Phone size={16} className="text-brand-accent" />
              <a href="tel:070309403" className="text-white/85 hover:text-white">
                070/309-403
              </a>
            </li>
            <li className="flex md:justify-end items-center gap-2">
              <Mail size={16} className="text-brand-accent" />
              <a href="mailto:contact@grga-trans.com" className="text-white/85 hover:text-white">
                contact@grga-trans.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Grga Trans. {copy.rights}
        </div>
      </div>
    </footer>
  );
}
