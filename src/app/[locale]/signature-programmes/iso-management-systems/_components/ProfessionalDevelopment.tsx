import { useTranslations } from "next-intl";

export default function ProfessionalDevelopment() {
  const t = useTranslations("isoMs.development");

  const cards = [
    { title: t("card1Title"), desc: t("card1Desc") },
    { title: t("card2Title"), desc: t("card2Desc") },
    { title: t("card3Title"), desc: t("card3Desc") },
    { title: t("card4Title"), desc: t("card4Desc") },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((c, i) => (
            <div key={c.title} className="border border-white/10 bg-white/5 p-6 flex flex-col gap-3 hover:border-[#D4AF37]/60 transition-colors">
              <span className="text-3xl font-black text-white/10 leading-none">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-base font-black text-white leading-snug">{c.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
