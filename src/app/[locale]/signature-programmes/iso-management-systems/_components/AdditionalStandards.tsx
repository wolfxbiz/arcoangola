import { useTranslations } from "next-intl";

export default function AdditionalStandards() {
  const t = useTranslations("isoMs.additional");

  const items = [
    { code: t("item1Code"), name: t("item1Name") },
    { code: t("item2Code"), name: t("item2Name") },
    { code: t("item3Code"), name: t("item3Name") },
    { code: t("item4Code"), name: t("item4Name") },
    { code: t("item5Code"), name: t("item5Name") },
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center gap-4 mb-6">
          <span className="h-px flex-1 bg-gray-200" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 text-center">
            {t("badge")}
          </span>
          <span className="h-px flex-1 bg-gray-200" />
        </div>

        <h2 className="text-lg sm:text-xl font-black text-navy text-center leading-tight mb-3">
          {t("heading")}
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-2xl mx-auto text-center mb-6">
          {t("intro")}
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {items.map((item) => (
            <span
              key={item.code}
              className="inline-flex items-center gap-1.5 border border-gray-200 bg-gray-50 px-3.5 py-2 text-xs font-bold text-navy/70"
            >
              <span className="text-navy font-black">{item.code}</span>
              {item.name}
            </span>
          ))}
          <span className="inline-flex items-center border border-dashed border-gray-300 px-3.5 py-2 text-xs font-bold text-gray-400">
            {t("more")}
          </span>
        </div>

      </div>
    </section>
  );
}
