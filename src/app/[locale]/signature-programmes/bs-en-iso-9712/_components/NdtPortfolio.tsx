import Image from "next/image";
import { useTranslations } from "next-intl";
import { whatsAppLink } from "@/lib/whatsapp";
import { ArrowIcon, StarIcon } from "./icons";

export default function NdtPortfolio() {
  const t = useTranslations("iso9712.portfolio");

  const conventional = [
    { code: t("conventional.vtCode"), name: t("conventional.vtName"), levels: t("conventional.vtLevels") },
    { code: t("conventional.mtCode"), name: t("conventional.mtName"), levels: t("conventional.mtLevels") },
    { code: t("conventional.ptCode"), name: t("conventional.ptName"), levels: t("conventional.ptLevels") },
    { code: t("conventional.utCode"), name: t("conventional.utName"), levels: t("conventional.utLevels") },
    { code: t("conventional.rtCode"), name: t("conventional.rtName"), levels: t("conventional.rtLevels") },
    { code: t("conventional.etCode"), name: t("conventional.etName"), levels: t("conventional.etLevels") },
    { code: t("conventional.riCode"), name: t("conventional.riName"), levels: t("conventional.riLevels") },
    { code: t("conventional.brsCode"), name: t("conventional.brsName"), levels: t("conventional.brsLevels") },
  ];

  const advanced = [
    { name: t("advanced.pautName"), desc: t("advanced.pautDesc"), levels: t("advanced.pautLevels") },
    { name: t("advanced.tofdName"), desc: t("advanced.tofdDesc"), levels: t("advanced.tofdLevels") },
    { name: t("advanced.autName"), desc: t("advanced.autDesc"), levels: t("advanced.autLevels") },
    { name: t("advanced.fmctfmName"), desc: t("advanced.fmctfmDesc"), levels: t("advanced.fmctfmLevels") },
    { name: t("advanced.acfmName"), desc: t("advanced.acfmDesc"), levels: t("advanced.acfmLevels") },
    { name: t("advanced.irisName"), desc: t("advanced.irisDesc"), levels: t("advanced.irisLevels") },
  ];

  const dataInterp = [
    { name: t("dataInterp.autDataName"), level: t("dataInterp.autDataLevel") },
    { name: t("dataInterp.pautDataName"), level: t("dataInterp.pautDataLevel") },
    { name: t("dataInterp.tofdDataName"), level: t("dataInterp.tofdDataLevel") },
  ];

  const weldingLevels = [
    { title: t("welding.level1Title"), name: t("welding.level1Name") },
    { title: t("welding.level2Title"), name: t("welding.level2Name") },
    { title: t("welding.level3Title"), name: t("welding.level3Name") },
  ];

  return (
    <section id="portfolio" className="scroll-mt-20 py-14 sm:py-20 lg:py-24 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-14 lg:mb-16 max-w-3xl">
          <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight mb-5">
            {t("heading")}
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            {t("intro")}
          </p>
        </div>

        {/* A — Conventional NDT */}
        <div className="mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-8 h-8 bg-blue text-white font-black text-sm shrink-0">
              {t("conventional.label")}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-navy">{t("conventional.title")}</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {conventional.map((m) => (
              <div key={m.code} className="border border-gray-200 bg-white p-5 flex flex-col gap-2">
                <span className="text-2xl font-black text-blue">{m.code}</span>
                <p className="text-sm font-bold text-navy leading-snug">{m.name}</p>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wide mt-auto">{m.levels}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 italic mt-5 max-w-2xl">{t("conventional.note")}</p>
        </div>

        {/* B — Advanced NDT Techniques */}
        <div className="mb-16 lg:mb-20 bg-navy p-6 sm:p-10 lg:p-12">
          <div className="flex items-center gap-3 mb-8">
            <span className="flex items-center justify-center w-8 h-8 bg-[#D4AF37] text-navy shrink-0">
              <StarIcon className="w-4 h-4" />
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">{t("advanced.title")}</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {advanced.map((a) => (
              <div key={a.name} className="border border-white/10 bg-white/5 p-5 flex flex-col gap-2 hover:border-[#D4AF37]/60 transition-colors">
                <p className="text-lg font-black text-[#D4AF37]">{a.name}</p>
                <p className="text-sm text-white/70 leading-snug flex-1">{a.desc}</p>
                <p className="text-xs text-white/40 font-bold uppercase tracking-wide mt-1">{a.levels}</p>
              </div>
            ))}

            {/* Pulsed Eddy Current — presented as a technique within Advanced NDT, not a certification level */}
            <div className="border border-dashed border-white/20 bg-white/[0.03] p-5 flex flex-col gap-2">
              <p className="text-lg font-black text-white">{t("advanced.pecName")}</p>
              <p className="text-sm text-white/60 leading-snug flex-1">{t("advanced.pecDesc")}</p>
            </div>
          </div>
        </div>

        {/* C — NDT Data Interpretation */}
        <div className="mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-black uppercase tracking-widest text-blue">{t("dataInterp.label")}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-navy mb-3">{t("dataInterp.title")}</h3>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-2xl mb-6">
            {t("dataInterp.positioning")}
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {dataInterp.map((d) => (
              <div key={d.name} className="border border-gray-200 bg-white p-5 flex flex-col gap-2">
                <p className="text-sm font-black text-navy leading-snug">{d.name}</p>
                <p className="text-xs text-blue font-bold uppercase tracking-wide">{d.level}</p>
              </div>
            ))}
          </div>
        </div>

        {/* D — Welding Inspection */}
        <div className="border border-gray-200 bg-white flex flex-col lg:flex-row overflow-hidden">
          <div className="relative h-56 lg:h-auto lg:w-2/5 shrink-0">
            <Image
              src="/assets/img-welder-metal-factory.webp"
              alt="Certified welding inspector"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          <div className="p-6 sm:p-10 flex-1 flex flex-col gap-6">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-blue">{t("welding.label")}</span>
              <h3 className="text-xl sm:text-2xl font-black text-navy mt-2">{t("welding.title")}</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              {weldingLevels.map((w) => (
                <div key={w.title} className="border border-gray-200 p-4">
                  <p className="text-xs font-black uppercase tracking-widest text-blue mb-1">{w.title}</p>
                  <p className="text-sm font-bold text-navy leading-snug">{w.name}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 italic leading-relaxed">{t("welding.note")}</p>
            <a
              href={whatsAppLink(t("welding.waMessage"))}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start inline-flex items-center gap-2 px-5 py-2.5 bg-navy hover:bg-blue text-white text-sm font-bold transition-colors"
            >
              {t("welding.cta")}
              <ArrowIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
