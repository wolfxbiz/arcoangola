"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { whatsAppLink } from "@/lib/whatsapp";

const MEMBERS = [
  {
    key: "kk",
    name: "Krishnakumar Manmathan",
    nickname: "KK",
    photo: "/assets/leader-krishnakumar-manmathan-v2.jpeg",
    photoPosition: "center 22%",
    hasBio2: true,
    yearsExperience: "24+",
    education: "B.E. Mechanical Engineer",
    expertise: [
      "QA/QC Leadership & Governance",
      "EPC Oil & Gas Projects",
      "System Completion & Commissioning Readiness",
      "Welding Inspection & NDT",
      "Vendor Surveillance & Audits",
      "Inspection Strategy & Execution",
      "Documentation & Certification Control",
      "Punch Management & Turnover",
      "Project Quality Assurance",
      "Offshore & Onshore Projects",
    ],
    credentials: [
      "BS EN ISO 9712:2022 – NDT Level III",
      "CSWIP 3.2.2 – Senior Welding Inspector",
      "TWI BGAS Grade 2/3 – Painting Inspector",
      "ASNT NDT Level II",
      "PAUT Level III",
      "TOFD Level III",
      "ISO 9001:2015 Lead Auditor",
      "ISO 14001:2015 & ISO 45001:2018 Internal Auditor",
      "H2S – OPITO Approved",
      "BOSIET with EBS – OPITO Approved",
    ],
    phone: "+244 942 742 800",
    phoneHref: "tel:+244942742800",
    whatsapp: "+244 927 789 106",
    email: "kk@arcoangola.com",
    location: "Luanda, Angola",
  },
  {
    key: "prathap",
    name: "Prathap Parthiban",
    nickname: null,
    photo: "/assets/leader-prathap-parthiban-v2.jpeg",
    photoPosition: "center 20%",
    hasBio2: false,
    yearsExperience: null,
    education: null,
    expertise: [] as string[],
    credentials: [
      "B.Tech Mechanical Engineer",
      "PCN Level III",
      "Certified Technical Authority",
      "Industrial Training & Certification Specialist",
    ],
    phone: "+244 930 408 008",
    phoneHref: "tel:+244930408008",
    whatsapp: null,
    email: "prathap@arcoangola.com",
    location: "Luanda, Angola",
  },
] as const;

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-1.949.975a11.042 11.042 0 005.516 5.516l.975-1.949a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 text-blue" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ExpertiseIcon() {
  return (
    <span className="flex items-center justify-center w-5 h-5 shrink-0 border border-[#D4AF37]/60 text-[#D4AF37]">
      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

export default function LeadershipTeam() {
  const t = useTranslations("leadership");

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 sm:mb-16 max-w-2xl">
          <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mb-4">
            {t("heading")}
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Profiles */}
        <div className="flex flex-col gap-12 lg:gap-16">
          {MEMBERS.map((m) => (
            <div key={m.key} className="border border-gray-200 bg-white flex flex-col lg:flex-row overflow-hidden">

              {/* Portrait + contact column */}
              <div className="lg:w-[300px] shrink-0 bg-navy flex flex-col">
                <div className="relative h-72 lg:h-96 shrink-0">
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    style={{ objectFit: "cover", objectPosition: m.photoPosition }}
                  />
                </div>

                {m.yearsExperience && (
                  <div className="px-6 py-5 border-t border-b border-white/10">
                    <p className="text-3xl font-black text-[#D4AF37] leading-none">
                      {m.yearsExperience}
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-wide text-white/70 mt-1.5 leading-snug">
                      {t("experienceSuffix")}
                    </p>
                  </div>
                )}

                <dl className="px-6 py-5 flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-2.5">
                    <dt className="sr-only">{t("phoneLabel")}</dt>
                    <PhoneIcon />
                    <dd>
                      <a href={m.phoneHref} className="text-sm text-white/80 hover:text-[#D4AF37] transition-colors">
                        {m.phone}
                      </a>
                    </dd>
                  </div>
                  {m.whatsapp && (
                    <div className="flex items-center gap-2.5">
                      <dt className="sr-only">{t("whatsappLabel")}</dt>
                      <WhatsAppIcon />
                      <dd className="text-sm text-white/80">{m.whatsapp}</dd>
                    </div>
                  )}
                  <div className="flex items-center gap-2.5">
                    <dt className="sr-only">{t("emailLabel")}</dt>
                    <MailIcon />
                    <dd>
                      <a href={`mailto:${m.email}`} className="text-sm text-white/80 hover:text-[#D4AF37] transition-colors break-all">
                        {m.email}
                      </a>
                    </dd>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <dt className="sr-only">{t("locationLabel")}</dt>
                    <LocationIcon />
                    <dd className="text-sm text-white/80">{m.location}</dd>
                  </div>
                </dl>

                <div className="px-6 pb-6">
                  <a
                    href={whatsAppLink(t(`${m.key}WaMessage`))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 px-5 py-3 bg-blue hover:bg-white hover:text-navy text-white font-bold text-xs uppercase tracking-wide transition-colors text-center"
                  >
                    {t(`${m.key}Cta`)}
                  </a>
                </div>
              </div>

              {/* Content column */}
              <div className="p-6 lg:p-10 flex flex-col gap-6 flex-1">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-black text-navy leading-tight mb-1.5">
                    {m.name}{m.nickname && <span className="text-gray-400 font-bold"> ({m.nickname})</span>}
                  </h3>
                  <span className="text-xs font-black uppercase tracking-widest text-blue">
                    {t(`${m.key}Role`)}
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t(`${m.key}Bio1`)}
                  </p>
                  {m.hasBio2 && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t(`${m.key}Bio2`)}
                    </p>
                  )}
                </div>

                {m.expertise.length > 0 && (
                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">
                      {t("expertiseLabel")}
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                      {m.expertise.map((x) => (
                        <li key={x} className="flex items-start gap-2.5">
                          <ExpertiseIcon />
                          <span className="text-sm text-navy/80 font-bold leading-snug">{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-2 border-t border-gray-100">
                  {m.education && (
                    <div className="mb-4">
                      <span className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                        {t("educationLabel")}
                      </span>
                      <span className="inline-block border border-gray-200 bg-gray-50 px-2.5 py-1 text-[11px] font-bold text-navy/70 tracking-wide">
                        {m.education}
                      </span>
                    </div>
                  )}
                  <span className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2.5">
                    {t("credentialsLabel")}
                  </span>
                  <ul className="flex flex-wrap gap-1.5">
                    {m.credentials.map((c) => (
                      <li
                        key={c}
                        className="border border-gray-200 bg-gray-50 px-2.5 py-1 text-[11px] font-bold text-navy/70 tracking-wide"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
