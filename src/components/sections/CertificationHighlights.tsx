"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { whatsAppLink } from "@/lib/whatsapp";

const HERO_CARDS = [
  { img: "/assets/engineer.webp",                    imgAlt: "ISO 9712 certified NDT engineer",             titleKey: "heroCard1Title" as const, descKey: "card2Desc" as const,     tabKey: "iso" },
  { img: "/assets/img-ndt-services.webp",            imgAlt: "Professional welder on pressure vessel",      titleKey: "heroCard2Title" as const, descKey: "card4Desc" as const,     tabKey: "welding" },
  { img: "/assets/img-iso-managemnet-system.png",    imgAlt: "ISO Lead Auditor reviewing management system documentation", titleKey: "heroCard3Title" as const, descKey: "heroCard3Desc" as const, tabKey: "iso" },
] as const;

const PORTFOLIO_ITEMS = [
  "ISO Lead Auditor",
  "ISO Management Systems",
  "ASNT",
  "API",
  "NEBOSH",
  "IOSH",
  "OSHA",
  "CSP",
];

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M10 1.5l2.59 5.25 5.79.84-4.19 4.08.99 5.77L10 14.77l-5.18 2.67.99-5.77L1.62 7.6l5.79-.84L10 1.5z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 text-blue mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function CheckIconWhite() {
  return (
    <svg className="w-4 h-4 shrink-0 text-white/60 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function handleViewCourses(tabKey: string) {
  window.dispatchEvent(new CustomEvent("setCatalogTab", { detail: tabKey }));
  document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
}

export default function CertificationHighlights() {
  const t = useTranslations("certHighlights");

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mb-4">
            {t("heading")}
          </h2>
          <p className="text-gray-500 max-w-2xl text-sm sm:text-base leading-relaxed">
            {t("intro")}
          </p>
        </div>

        {/* Hero cards: BS EN ISO 9712, CSWIP/BGAS, ISO Management Systems — the three flagship programmes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10 lg:mb-12">
          {HERO_CARDS.map(({ img, imgAlt, titleKey, descKey, tabKey }) => (
            <div key={titleKey} className="flex flex-col overflow-hidden bg-navy border-2 border-[#D4AF37]/60">
              <div className="relative h-60 sm:h-72 shrink-0">
                <Image
                  src={img}
                  alt={imgAlt}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
              <div className="p-6 lg:p-8 flex flex-col gap-3 flex-1">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">
                  <StarIcon className="w-3.5 h-3.5" />
                  {t("heroBadgeLabel")}
                </span>
                <h3 className="text-2xl font-black text-white leading-tight">
                  {t(titleKey)}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed flex-1">
                  {t(descKey)}
                </p>
                <button
                  onClick={() => handleViewCourses(tabKey)}
                  className="self-start mt-2 inline-flex items-center gap-1.5 text-xs font-black text-[#D4AF37] hover:text-white uppercase tracking-widest transition-colors"
                >
                  {t("viewCourses")}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ISO Lead Auditor — Supporting Organizations / Supporting Professionals */}
        <div className="mb-10 lg:mb-12">
          <span className="block text-center text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-5">
            {t("audienceLabel")}
          </span>
          <div className="grid lg:grid-cols-2 gap-0 border border-gray-200">
            <div className="p-8 lg:p-10 flex flex-col gap-5 border-b lg:border-b-0 lg:border-r border-gray-200 bg-white">
              <span className="text-xs font-black uppercase tracking-widest text-blue">
                {t("organizationsTitle")}
              </span>
              <ul className="flex flex-col gap-3">
                {(["org1", "org2", "org3", "org4", "org5"] as const).map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-navy">
                    <CheckIcon />
                    {t(p)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 lg:p-10 flex flex-col gap-5 bg-navy">
              <span className="text-xs font-black uppercase tracking-widest text-white/50">
                {t("professionalsTitle")}
              </span>
              <ul className="flex flex-col gap-3">
                {(["pro1", "pro2", "pro3", "pro4"] as const).map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-white">
                    <CheckIconWhite />
                    {t(p)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-400 italic max-w-2xl mx-auto text-center leading-relaxed">
            {t("audienceNote")}
          </p>
        </div>

        {/* Divider + supporting portfolio */}
        <div className="mb-10 lg:mb-12">
          <div className="flex items-center gap-4 mb-5">
            <span className="h-px flex-1 bg-gray-200" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 text-center">
              {t("portfolioLabel")}
            </span>
            <span className="h-px flex-1 bg-gray-200" />
          </div>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto text-center mb-6">
            {t("portfolioIntro")}
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {PORTFOLIO_ITEMS.map((item) => (
              <span
                key={item}
                className="border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-bold text-navy/70 tracking-wide"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom row: Corporate Solutions — full width */}
        <div className="border border-gray-200 flex flex-col sm:flex-row overflow-hidden">
          <div className="relative h-56 sm:h-auto sm:w-2/5 shrink-0">
            <Image
              src="/assets/img-executive.webp"
              alt="Corporate training for businesses and organisations"
              fill
              style={{ objectFit: "cover", objectPosition: "center 15%" }}
            />
          </div>
          <div className="p-6 lg:p-10 flex flex-col gap-3 flex-1 bg-navy">
            <span className="text-[10px] font-black uppercase tracking-widest text-yellow-400">
              {t("card5bBadge")}
            </span>
            <h3 className="text-xl font-black text-white leading-tight">
              {t("card5bTitle")}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed flex-1">
              {t("card5bDesc")}
            </p>
            <a
              href={whatsAppLink(t("waCorporateMessage"))}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start mt-2 inline-flex items-center gap-1.5 text-xs font-black text-yellow-400 hover:text-white uppercase tracking-widest transition-colors"
            >
              {t("requestProposal")}
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
