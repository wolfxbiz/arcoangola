import { useTranslations } from "next-intl";
import { whatsAppLink } from "@/lib/whatsapp";

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
    </svg>
  );
}

export default function ClosingBanner() {
  const t = useTranslations("closing");

  const buttons = [
    {
      key: "consultation",
      label: t("ctaConsultation"),
      href: whatsAppLink(t("waConsultationMessage")),
      variant: "primary" as const,
    },
    {
      key: "corporate",
      label: t("ctaCorporate"),
      href: whatsAppLink(t("waCorporateMessage")),
      variant: "outline" as const,
    },
    {
      key: "catalogue",
      label: t("ctaCatalogue"),
      href: whatsAppLink(t("waCatalogueMessage")),
      variant: "outline" as const,
      icon: "download" as const,
    },
  ];

  return (
    <section className="bg-navy py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-lg font-black text-white uppercase tracking-widest mb-5">
          {t("headline")}
        </p>
        <p className="text-lg font-bold text-white/80 leading-relaxed mb-5 max-w-2xl">
          {t("body")}
        </p>
        <p className="text-lg font-black text-white uppercase tracking-widest mb-10">
          {t("tagline")}
        </p>

        <div className="flex flex-wrap gap-3">
          {buttons.map((b) => (
            <a
              key={b.key}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              className={
                b.variant === "primary"
                  ? "inline-flex items-center gap-2 px-6 py-3.5 bg-blue hover:bg-white hover:text-navy text-white font-bold text-sm transition-colors"
                  : "inline-flex items-center gap-2 px-6 py-3.5 border border-white/30 hover:border-white text-white font-bold text-sm transition-colors"
              }
            >
              {b.icon === "download" ? <DownloadIcon /> : <WhatsAppIcon />}
              {b.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
