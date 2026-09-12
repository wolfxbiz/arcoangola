import { useTranslations } from "next-intl";
import { ArrowIcon } from "./icons";

export default function DevelopmentPathway() {
  const t = useTranslations("isoMs.pathway");

  const steps = [
    { title: t("step1Title"), desc: t("step1Desc") },
    { title: t("step2Title"), desc: t("step2Desc") },
    { title: t("step3Title"), desc: t("step3Desc") },
    { title: t("step4Title"), desc: t("step4Desc") },
    { title: t("step5Title"), desc: t("step5Desc") },
    { title: t("step6Title"), desc: t("step6Desc") },
    { title: t("step7Title"), desc: t("step7Desc") },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12 lg:mb-16 max-w-2xl mx-auto text-center">
          <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight">
            {t("heading")}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4">
          {steps.map((s, i) => (
            <div key={s.title} className="border border-gray-200 bg-white p-5 sm:p-6 flex flex-col gap-2">
              <span className="text-2xl font-black text-gray-200">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-sm font-black text-navy leading-tight">{s.title}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mb-4 text-gray-300">
          <ArrowIcon className="w-5 h-5 rotate-90" />
        </div>

        <div className="max-w-md mx-auto border-2 border-[#D4AF37]/60 bg-navy px-6 py-7 flex flex-col items-center text-center gap-2 mb-10">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">
            {t("resultLabel")}
          </span>
          <p className="text-lg sm:text-xl font-black text-white leading-tight">{t("resultOrg")}</p>
          <p className="text-xs sm:text-sm text-[#D4AF37] font-bold uppercase tracking-wide">{t("resultRole")}</p>
        </div>

        <p className="max-w-2xl mx-auto text-center text-xs text-gray-400 italic leading-relaxed">
          {t("note")}
        </p>

      </div>
    </section>
  );
}
