import { useTranslations } from "next-intl";

export default function CertificationProcess() {
  const t = useTranslations("iso9712.process");

  const steps = [
    { title: t("step1Title"), org: t("step1Org"), desc: t("step1Desc") },
    { title: t("step2Title"), org: null, desc: t("step2Desc") },
    { title: t("step3Title"), org: null, desc: t("step3Desc") },
    { title: t("step4Title"), org: t("step4Org"), desc: t("step4Desc") },
    { title: t("step5Title"), org: null, desc: t("step5Desc") },
  ];

  const integrityCards = [
    { title: t("card1Title"), desc: t("card1Desc") },
    { title: t("card2Title"), desc: t("card2Desc") },
    { title: t("card3Title"), desc: t("card3Desc") },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12 lg:mb-16 max-w-2xl">
          <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight">
            {t("heading")}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-0 border border-gray-200 mb-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="p-6 border-b lg:border-b-0 lg:border-r border-gray-200 last:border-0 flex flex-col gap-2"
            >
              <span className="text-xs font-black text-gray-300">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-sm font-black text-navy leading-tight">{s.title}</p>
              {s.org && (
                <p className="text-[11px] font-black uppercase tracking-widest text-blue">{s.org}</p>
              )}
              <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 italic leading-relaxed max-w-2xl mb-16 lg:mb-20">
          {t("note")}
        </p>

        {/* Certification integrity */}
        <div className="max-w-2xl mb-10">
          <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-4">
            {t("integrityBadge")}
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-navy leading-tight">
            {t("integrityHeading")}
          </h3>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-6">
          {integrityCards.map((c) => (
            <div key={c.title} className="border border-gray-200 bg-gray-50 p-6 sm:p-8">
              <h4 className="text-base font-black text-navy mb-2">{c.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 italic leading-relaxed max-w-2xl">
          {t("integrityNote")}
        </p>

      </div>
    </section>
  );
}
