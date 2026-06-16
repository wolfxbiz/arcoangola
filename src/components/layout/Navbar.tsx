"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";

const locales = [
  { code: "pt", flag: "/assets/flag-pt.png", label: "PT" },
  { code: "en", flag: "/assets/flag-en.png", label: "EN" },
  { code: "fr", flag: "/assets/flag-fr.png", label: "FR" },
] as const;

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 10);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  function switchLocalePath(newLocale: string) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    return segments.join("/") || `/${newLocale}`;
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center shrink-0">
            <span className={`font-black text-xl tracking-tight transition-colors duration-300 ${scrolled ? "text-navy" : "text-white"}`}>
              ARCO<span className="text-blue">ANGOLA</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { href: "#programmes", label: "Programmes" },
              { href: "#courses",    label: `${t("courses")} Catalogue` },
              { href: "#corporate",  label: t("corporate") },
              { href: "#contact",    label: t("contact") },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-300 ${
                  scrolled ? "text-navy hover:text-blue" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop right — flags + CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="flex items-center gap-2">
              {locales.map(({ code, flag, label }) => (
                <Link
                  key={code}
                  href={switchLocalePath(code)}
                  title={label}
                  className={`transition-all duration-150 ${
                    code === locale
                      ? "opacity-100 ring-2 ring-blue ring-offset-1"
                      : "opacity-50 hover:opacity-90"
                  }`}
                  style={{ borderRadius: "50%" }}
                >
                  <Image src={flag} alt={label} width={32} height={32} style={{ borderRadius: "50%" }} />
                </Link>
              ))}
            </div>

            <a
              href="#contact"
              className={`px-5 py-2.5 text-white text-sm font-bold transition-colors duration-300 ${
                scrolled ? "bg-navy hover:bg-blue" : "bg-blue hover:bg-white hover:text-navy"
              }`}
            >
              {t("requestTraining")}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
          >
            {[
              mobileOpen ? "rotate-45 translate-y-2" : "",
              mobileOpen ? "opacity-0" : "",
              mobileOpen ? "-rotate-45 -translate-y-2" : "",
            ].map((extra, i) => (
              <span
                key={i}
                className={`block w-6 h-0.5 transition-all duration-300 origin-center ${
                  scrolled || mobileOpen ? "bg-navy" : "bg-white"
                } ${extra}`}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 pb-6 pt-4">
          <div className="flex flex-col gap-1">
            {[
              { href: "#programmes", label: "Programmes" },
              { href: "#courses",    label: t("courses") },
              { href: "#corporate",  label: t("corporate") },
              { href: "#contact",    label: t("contact") },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 px-2 text-base font-semibold text-navy border-b border-gray-100 last:border-0 hover:text-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Language switcher */}
          <div className="mt-2 border-t border-gray-100">
            <span className="block text-[10px] font-black uppercase tracking-widest text-gray-400 px-2 pt-4 pb-1">
              {t("language")}
            </span>
            {locales.map(({ code, flag, label }) => (
              <Link
                key={code}
                href={switchLocalePath(code)}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 py-3 px-2 border-b border-gray-100 last:border-0 transition-colors ${
                  code === locale ? "text-blue" : "text-navy/50 hover:text-navy"
                }`}
              >
                <Image src={flag} alt={label} width={24} height={24} style={{ borderRadius: "50%" }} />
                <span className="text-sm font-bold">
                  {code === "pt" ? "Português" : code === "en" ? "English" : "Français"}
                </span>
                {code === locale && <span className="ml-auto w-2 h-2 bg-blue" />}
              </Link>
            ))}
          </div>

          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block text-center px-4 py-3 bg-navy hover:bg-blue text-white font-bold transition-colors"
          >
            {t("requestTraining")}
          </a>
        </div>
      )}
    </header>
  );
}
