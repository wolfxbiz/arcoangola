import { useTranslations } from "next-intl";
import { whatsAppLink } from "@/lib/whatsapp";
import { ArrowIcon } from "./icons";

export default function FinalCta() {
  const t = useTranslations("iso9712.finalCta");

  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-8">
          {t("heading")}
        </h2>

        <div className="flex flex-col items-center gap-1.5 text-base sm:text-lg text-white/70 font-bold mb-10">
          <p>{t("line1")}</p>
          <p>{t("line2")}</p>
          <p>{t("line3")}</p>
          <p className="text-[#D4AF37]">{t("line4")}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue hover:bg-white hover:text-navy text-white font-bold text-sm transition-colors"
          >
            {t("cta1")}
            <ArrowIcon className="w-4 h-4" />
          </a>
          <a
            href={whatsAppLink(t("waMessage"))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/30 hover:border-white text-white font-bold text-sm transition-colors"
          >
            {t("cta2")}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/30 hover:border-white text-white font-bold text-sm transition-colors"
          >
            {t("cta3")}
          </a>
        </div>

      </div>
    </section>
  );
}
