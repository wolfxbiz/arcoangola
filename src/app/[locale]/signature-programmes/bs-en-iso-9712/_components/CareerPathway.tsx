import { useTranslations } from "next-intl";

export default function CareerPathway() {
  const t = useTranslations("iso9712.pathway");

  const levels = [
    { title: t("level1Title"), sub: t("level1Sub") },
    { title: t("level2Title"), sub: t("level2Sub") },
    { title: t("level3Title"), sub: t("level3Sub") },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-navy border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12 lg:mb-16 max-w-2xl mx-auto text-center">
          <span className="block text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            {t("heading")}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-0 max-w-4xl mx-auto border border-white/10">
          {levels.map((l, i) => (
            <div key={l.title} className="relative flex-1 flex flex-col items-center text-center gap-2 p-8 border-b lg:border-b-0 lg:border-r border-white/10 last:border-0">
              <span className="text-4xl font-black text-white/10 leading-none">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-lg font-black text-[#D4AF37]">{l.title}</p>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wide text-white/70">{l.sub}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 lg:mt-14 max-w-xl mx-auto text-center text-sm sm:text-base text-white/70 leading-relaxed">
          {t("statement")}
        </p>

      </div>
    </section>
  );
}
