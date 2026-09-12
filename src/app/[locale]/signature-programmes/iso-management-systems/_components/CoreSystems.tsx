import Image from "next/image";
import { useTranslations } from "next-intl";

export default function CoreSystems() {
  const t = useTranslations("isoMs.core");

  const systems = [
    { img: "/assets/cert-qms.webp", code: t("card1Code"), name: t("card1Name"), desc: t("card1Desc") },
    { img: "/assets/cert-ems.webp", code: t("card2Code"), name: t("card2Name"), desc: t("card2Desc") },
    { img: "/assets/cert-ohsms.webp", code: t("card3Code"), name: t("card3Name"), desc: t("card3Desc") },
  ];

  return (
    <section id="core-systems" className="scroll-mt-20 py-14 sm:py-20 lg:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12 lg:mb-16 max-w-2xl mx-auto text-center">
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

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          {systems.map((s) => (
            <div key={s.code} className="border-2 border-[#D4AF37]/60 bg-navy flex flex-col overflow-hidden">
              <div className="relative h-40 shrink-0 bg-white/5">
                <Image src={s.img} alt={s.name} fill style={{ objectFit: "contain", padding: "1.25rem" }} />
              </div>
              <div className="p-6 sm:p-7 flex flex-col gap-2">
                <span className="text-lg font-black text-[#D4AF37]">{s.code}</span>
                <h3 className="text-base font-black text-white leading-snug">{s.name}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
