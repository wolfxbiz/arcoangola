import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { whatsAppLink } from "@/lib/whatsapp";
import { ArrowIcon, StarIcon } from "./icons";

export default function ProgrammeHero({ locale }: { locale: string }) {
  const t = useTranslations("iso9712.hero");

  return (
    <section className="relative flex items-center overflow-hidden pt-24 lg:pt-28 pb-14 lg:pb-20">
      <div className="absolute inset-0 bg-black" aria-hidden="true" />
      <Image
        src="/assets/img-programme-hero.webp"
        alt=""
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div className="absolute inset-0 bg-navy/80" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/50 mb-6">
          <Link href={`/${locale}`} className="hover:text-white transition-colors">
            {t("breadcrumbHome")}
          </Link>
          <span>/</span>
          <span>{t("breadcrumbProgrammes")}</span>
          <span>/</span>
          <span className="text-[#D4AF37]">{t("breadcrumbSelf")}</span>
        </nav>

        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.25em] text-[#D4AF37] mb-4">
            <StarIcon className="w-3.5 h-3.5" />
            {t("eyebrow")}
          </span>

          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.05] tracking-tight text-white mb-4">
            {t("title")}
          </h1>
          <p className="text-lg sm:text-xl text-white/85 font-bold mb-6">
            {t("subtitle")}
          </p>

          <p className="text-sm sm:text-base text-white/75 leading-relaxed mb-4 max-w-2xl">
            {t("statement")}
          </p>
          <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-8 max-w-2xl">
            {t("supporting")}
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue hover:bg-white hover:text-navy text-white font-bold text-sm transition-colors"
            >
              {t("ctaExplore")}
              <ArrowIcon className="w-4 h-4" />
            </a>
            <a
              href={whatsAppLink(t("waCorporateMessage"))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/30 hover:border-white text-white font-bold text-sm transition-colors"
            >
              {t("ctaCorporate")}
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-xs sm:text-sm font-bold text-white/70">
          <span>{t("badgeLine")}</span>
          <span className="text-[#D4AF37]">{t("levelsLine")}</span>
        </div>
      </div>
    </section>
  );
}
