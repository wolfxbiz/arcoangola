import { useTranslations } from "next-intl";

export default function AboutStandard() {
  const t = useTranslations("iso9712.about");

  const levels = [
    { title: t("level1Title"), desc: t("level1Desc") },
    { title: t("level2Title"), desc: t("level2Desc") },
    { title: t("level3Title"), desc: t("level3Desc") },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-10 lg:mb-12 max-w-3xl">
          <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight mb-5">
            {t("heading")}
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            {t("body")}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          {levels.map((l, i) => (
            <div key={l.title} className="border border-gray-200 p-6 sm:p-8 flex flex-col gap-3">
              <span className="text-3xl font-black text-gray-200">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-lg font-black text-navy">{l.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{l.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
