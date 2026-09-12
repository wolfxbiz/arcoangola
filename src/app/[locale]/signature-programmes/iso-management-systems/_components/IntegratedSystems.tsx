import { useTranslations } from "next-intl";
import { ArrowIcon } from "./icons";

export default function IntegratedSystems() {
  const t = useTranslations("isoMs.integrated");
  const tc = useTranslations("isoMs.core");

  const systems = [
    { code: tc("card1Code"), name: tc("card1Name") },
    { code: tc("card2Code"), name: tc("card2Name") },
    { code: tc("card3Code"), name: tc("card3Name") },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-10 lg:mb-12 max-w-2xl mx-auto text-center">
          <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight">
            {t("heading")}
          </h2>
        </div>

        {/* Three systems converging into one framework */}
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-0 max-w-3xl mx-auto mb-4">
          {systems.map((s, i) => (
            <div key={s.code} className="contents">
              <div className="flex-1 border border-gray-200 bg-white px-5 py-6 flex flex-col items-center text-center gap-1.5">
                <span className="text-base font-black text-navy">{s.code}</span>
                <span className="text-xs text-gray-500 leading-snug">{s.name}</span>
              </div>
              {i < systems.length - 1 && (
                <span className="shrink-0 flex items-center justify-center px-2 py-2 sm:py-0 text-lg font-black text-[#D4AF37]">
                  +
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center py-1.5 text-gray-300">
          <ArrowIcon className="w-5 h-5 rotate-90" />
        </div>

        <div className="max-w-md mx-auto border-2 border-[#D4AF37]/60 bg-navy px-6 py-6 flex flex-col items-center text-center gap-1.5 mb-10 lg:mb-12">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">
            {t("formula")}
          </span>
          <p className="text-lg sm:text-xl font-black text-white leading-tight">{t("result")}</p>
        </div>

        <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-2xl mx-auto text-center">
          {t("body")}
        </p>

      </div>
    </section>
  );
}
