"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M10 1.5l2.59 5.25 5.79.84-4.19 4.08.99 5.77L10 14.77l-5.18 2.67.99-5.77L1.62 7.6l5.79-.84L10 1.5z" />
    </svg>
  );
}

function handleViewIso9712() {
  window.dispatchEvent(new CustomEvent("setCatalogTab", { detail: "iso" }));
  document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
}

export default function SignatureFlagshipBand() {
  const t = useTranslations("flagshipBand");

  const facts = [t("levelsValue"), t("conventionalValue"), t("advancedValue"), t("dataValue")].join(" · ");

  return (
    <section className="bg-navy border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">

          <div className="flex items-center gap-3 shrink-0">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-md overflow-hidden border border-[#D4AF37]/50 shrink-0">
              <Image
                src="/assets/img-signature-inspection.png"
                alt="Certified NDT inspector performing field inspection"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <StarIcon className="w-3 h-3 text-[#D4AF37]" />
                <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#D4AF37]">
                  {t("label")}
                </span>
              </div>
              <p className="text-white font-black text-sm leading-tight whitespace-nowrap">
                {t("title")}
              </p>
            </div>
          </div>

          <span className="hidden lg:block h-8 w-px bg-white/10 shrink-0" />

          <p className="text-white/50 text-xs sm:text-[13px] leading-snug flex-1 min-w-0">
            {facts}
          </p>

          <button
            onClick={handleViewIso9712}
            className="shrink-0 inline-flex items-center gap-1.5 text-[11px] font-black text-[#D4AF37] hover:text-white uppercase tracking-widest transition-colors"
          >
            {t("cta")}
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
}
