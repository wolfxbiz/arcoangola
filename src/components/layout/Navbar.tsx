"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { whatsAppLink } from "@/lib/whatsapp";

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

  const navItems = [
    { href: "#programmes", label: t("signaturePrograms") },
    { href: "#programmes", label: t("internationalCertifications") },
    { href: "#corporate", label: t("corporateLearning") },
    { href: "#contact", label: t("contact") },
  ];

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
        <div className="flex items-center justify-between gap-3 h-16 lg:h-20">

          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center shrink-0">
            <Image
              src={scrolled ? "/assets/logo-color.png" : "/assets/logo-dark.png"}
              alt="Arco Angola"
              width={180}
              height={48}
              style={{ height: "38px", width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center gap-3 xl:gap-5">
              {navItems.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className={`text-sm font-semibold whitespace-nowrap transition-colors duration-300 ${
                    scrolled ? "text-navy hover:text-blue" : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop right — flags + CTA */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-5 shrink-0">
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
              href={whatsAppLink(t("waRequestTrainingMessage"))}
              target="_blank"
              rel="noopener noreferrer"
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
        <div className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 px-4 pb-6 pt-5 shadow-[0_20px_45px_-20px_rgba(0,0,0,0.35)]">
          <div className="flex flex-col gap-1.5">
            {navItems.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 px-3 text-sm font-semibold text-navy hover:bg-gray-50 hover:text-blue transition-colors"
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
            href={whatsAppLink(t("waRequestTrainingMessage"))}
            target="_blank"
            rel="noopener noreferrer"
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
