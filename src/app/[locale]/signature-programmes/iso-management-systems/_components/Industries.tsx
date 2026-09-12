import { useTranslations } from "next-intl";

export default function Industries() {
  const t = useTranslations("isoMs.industries");

  const industries = [
    t("industry1"), t("industry2"), t("industry3"),
    t("industry4"), t("industry5"), t("industry6"),
    t("industry7"), t("industry8"), t("industry9"),
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-gray-50 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-4">
          {t("badge")}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight mb-10">
          {t("heading")}
        </h2>

        <div className="flex flex-wrap justify-center gap-2.5">
          {industries.map((industry) => (
            <span
              key={industry}
              className="border border-gray-200 bg-white px-4 py-2.5 text-sm font-bold text-navy"
            >
              {industry}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
