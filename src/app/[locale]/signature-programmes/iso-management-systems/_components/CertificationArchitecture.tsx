import { useTranslations } from "next-intl";
import { ArrowIcon } from "./icons";

export default function CertificationArchitecture() {
  const t = useTranslations("isoMs.architecture");

  const nodes = [
    { org: t("node1Org"), role: t("node1Role") },
    { org: t("node2Org"), role: t("node2Role") },
    { org: t("node3Org"), role: t("node3Role") },
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

        {/* Certification chain */}
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-0 max-w-6xl mx-auto mb-10 lg:mb-12">
          {nodes.map((s, i) => (
            <div key={s.org} className="contents">
              <div className="w-full lg:flex-1 border border-gray-200 bg-white px-6 py-7 lg:py-8 flex flex-col items-center text-center gap-3">
                <span className="flex items-center justify-center w-9 h-9 border border-[#D4AF37]/60 text-[#D4AF37] text-xs font-black shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-black text-navy leading-tight">
                    {s.org}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 leading-snug mt-1.5 max-w-[220px] lg:max-w-[200px] mx-auto">
                    {s.role}
                  </p>
                </div>
              </div>

              <span className="text-gray-300 shrink-0 flex items-center justify-center py-1.5 lg:py-0 lg:px-2">
                <ArrowIcon className="w-5 h-5 rotate-90 lg:rotate-0" />
              </span>
            </div>
          ))}

          <div className="w-full lg:flex-1 border-2 border-[#D4AF37]/60 bg-navy px-6 py-7 lg:py-8 flex flex-col items-center text-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">
              {t("node4Org")}
            </span>
            <p className="text-lg sm:text-xl font-black text-white leading-tight">{t("node4Role")}</p>
          </div>
        </div>

        <p className="max-w-2xl mx-auto text-center text-xs text-gray-400 leading-relaxed mb-14 lg:mb-16">
          {t("positioning")}
        </p>

        {/* The locked separation statement */}
        <div className="border-l-4 border-[#D4AF37] bg-navy px-6 py-8 sm:px-10 sm:py-10 max-w-4xl mx-auto">
          <p className="text-base sm:text-lg lg:text-xl font-bold text-white leading-relaxed">
            {t("lockStatement")}
          </p>
        </div>

      </div>
    </section>
  );
}
