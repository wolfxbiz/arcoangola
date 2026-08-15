import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AngolaToAfrica() {
  const t = useTranslations("iso9712.angolaAfrica");

  return (
    <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black" aria-hidden="true" />
      <Image
        src="/assets/img-signature-inspection.png"
        alt=""
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div className="absolute inset-0 bg-navy/85" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="block text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4">
          {t("badge")}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
          {t("heading")}
        </h2>
        <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
          {t("statement")}
        </p>
        <p className="text-sm font-black uppercase tracking-[0.25em] text-[#D4AF37]">
          {t("tagline")}
        </p>
      </div>
    </section>
  );
}
