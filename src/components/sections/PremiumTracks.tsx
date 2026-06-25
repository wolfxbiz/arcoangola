import { useTranslations } from "next-intl";
import Image from "next/image";

const SERVICES = [
  { key: "ut",   abbr: "UT"   },
  { key: "rt",   abbr: "RT"   },
  { key: "mt",   abbr: "MT"   },
  { key: "pt",   abbr: "PT"   },
  { key: "vt",   abbr: "VT"   },
  { key: "tmt",  abbr: "TMT"  },
  { key: "paut", abbr: "PAUT" },
  { key: "tofd", abbr: "TOFD" },
  { key: "cm",   abbr: "CM"   },
  { key: "pmi",  abbr: "PMI"  },
] as const;

const PILLARS = ["pillar1", "pillar2", "pillar3", "pillar4"] as const;

export default function PremiumTracks() {
  const t = useTranslations("ndtOverview");

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top: images + header side by side */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-14 sm:mb-20">

          {/* Left — hero image */}
          <div className="relative h-80 sm:h-96 lg:h-full min-h-[400px] overflow-hidden">
            <Image
              src="/assets/img-qc-professional.png"
              alt="NDT professional"
              fill
              style={{ objectFit: "cover", objectPosition: "50% 35%" }}
            />
          </div>

          {/* Right — header + pillars */}
          <div className="flex flex-col justify-center">
            <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-4">
              {t("badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight mb-4">
              {t("headline")}{" "}
              <span className="text-blue">{t("headlineHighlight")}</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
              {t("subtitle")}
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-2 gap-3">
              {PILLARS.map((p) => (
                <div key={p} className="flex items-center gap-3 border border-gray-200 px-4 py-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
                  <span className="text-xs font-black text-navy uppercase tracking-wide">{t(p)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services list */}
        <div className="mb-12 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-blue mb-6">
            {t("servicesTitle")}
          </p>
          <div className="grid sm:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
            {SERVICES.map(({ key, abbr }) => (
              <div key={key} className="bg-white flex items-start gap-4 px-5 py-4">
                <span className="shrink-0 min-w-[3rem] text-center text-[10px] font-black uppercase tracking-widest border border-blue text-blue px-2 py-1">
                  {abbr}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-black text-navy leading-snug">
                    {t(key as Parameters<typeof t>[0])}
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed mt-0.5">
                    {t(`${key}Desc` as Parameters<typeof t>[0])}
                  </p>
                </div>
                <a
                  href="#ndt-services"
                  className="ml-auto shrink-0 self-center"
                  aria-label={`View ${abbr} service details`}
                >
                  <svg className="w-3.5 h-3.5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border border-gray-200 grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          <div className="px-6 py-5 flex items-center gap-3">
            <span className="w-1 h-8 bg-blue shrink-0" />
            <p className="text-xs font-black text-navy uppercase tracking-wide leading-snug">
              {t("localPresence")}
            </p>
          </div>
          <div className="px-6 py-5 flex items-center">
            <p className="text-xs font-bold text-gray-500 italic leading-relaxed">
              {t("promise")}
            </p>
          </div>
          <div className="px-6 py-5 flex items-center gap-4 flex-wrap">
            {["ISO 9001:2015", "ISO 45001:2018", "ISO 14001:2015", "ICNDT"].map((cert) => (
              <span key={cert} className="text-[10px] font-black text-navy uppercase tracking-widest">
                {cert}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
