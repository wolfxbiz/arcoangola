"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

const CERTS = [
  { src: "/assets/cert-qms.webp",   label: "ISO 9001:2015", sub: "Quality Management System" },
  { src: "/assets/cert-ems.webp",   label: "ISO 14001:2015", sub: "Environmental Management System" },
  { src: "/assets/cert-ohsms.webp", label: "ISO 45001:2018", sub: "Occupational Health & Safety" },
] as const;

export default function Hero() {
  const t = useTranslations("hero");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const stats = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
    { value: t("stat3Value"), label: t("stat3Label") },
  ];

  return (
    <>
      <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden pt-16 lg:pt-20">

        {/* Background — full section */}
        <div className="absolute inset-0 bg-black" aria-hidden="true" />
        <Image
          src="/assets/hero-bg.webp"
          alt=""
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

        {/* ── Left: text content ── */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-14 xl:px-20 py-14 lg:py-20">

          <span className="block text-white/60 text-xs font-bold uppercase tracking-widest mb-6">
            {t("badge")}
          </span>

          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.05] tracking-tight text-white mb-6">
            {t("title")}
            <br />
            <span className="text-blue">{t("titleHighlight")}</span>
            <br />
            {t("titleSuffix")}
          </h1>

          <p className="text-base sm:text-lg text-white/60 max-w-lg mb-10 leading-relaxed">
            {t("subtitle")}
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <a
              href="#courses"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue hover:bg-white hover:text-navy text-white font-bold text-sm transition-colors"
            >
              {t("ctaExplore")}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/30 hover:border-white text-white font-bold text-sm transition-colors"
            >
              {t("ctaCorporate")}
            </a>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-5 border-t border-white/10 pt-6">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-2.5">
                <span className="text-4xl sm:text-5xl font-black text-white leading-none tracking-tight">
                  {s.value}
                </span>
                <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold leading-tight max-w-[52px]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: certificates — full fit ── */}
        <div className="relative z-10 flex flex-row lg:w-[52%] shrink-0 items-center gap-3 px-4 pb-10 lg:pl-2 lg:pr-8 lg:py-16">
          {CERTS.map(({ src, label, sub }) => (
            <button
              key={src}
              onClick={() => setLightbox(src)}
              className="group flex-1 flex flex-col overflow-hidden border border-white/20 hover:border-blue transition-all duration-200"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={src}
                  alt={label}
                  width={1131}
                  height={1600}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>
              </div>
              <div className="bg-black/60 px-2.5 py-2 text-left">
                <p className="text-[10px] font-black text-blue leading-tight">{label}</p>
                <p className="text-[9px] text-white/50 leading-tight mt-0.5 hidden sm:block">{sub}</p>
              </div>
            </button>
          ))}
        </div>

      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/92 flex items-center justify-center p-4 sm:p-10"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-h-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-9 right-0 text-white/60 hover:text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2"
            >
              Close
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={lightbox}
              alt="Certificate"
              width={1131}
              height={1600}
              style={{ maxHeight: "90vh", width: "auto", objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
