"use client";

import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("about");

  const pillars = [
    { title: t("pillar1Title"), desc: t("pillar1Desc") },
    { title: t("pillar2Title"), desc: t("pillar2Desc") },
    { title: t("pillar3Title"), desc: t("pillar3Desc") },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-start">

          {/* Left: text */}
          <div>
            <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-4">
              {t("badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mb-8 leading-tight">
              {t("heading")}
            </h2>

            <div className="flex flex-col gap-5 text-gray-500 text-sm sm:text-base leading-relaxed">
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
            </div>
          </div>

          {/* Right: identity pillars */}
          <div className="mt-12 lg:mt-2 flex flex-col gap-0 border border-gray-200">
            <div className="px-6 py-4 bg-navy border-b border-white/10">
              <span className="text-[10px] font-black uppercase tracking-widest text-blue">
                {t("identityLabel")}
              </span>
            </div>
            {pillars.map(({ title, desc }, i) => (
              <div
                key={title}
                className={`px-6 py-6 flex gap-4 items-start ${i < pillars.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <div className="w-1 shrink-0 h-full self-stretch bg-blue mt-1 min-h-[1.5rem]" />
                <div>
                  <p className="text-sm font-black text-navy leading-snug mb-1">{title}</p>
                  <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
