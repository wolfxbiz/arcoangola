"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const MEMBERS = [
  {
    key: "kk",
    name: "Krishnakumar Manmathan",
    photo: "/assets/leader-krishnakumar-manmathan.png",
    photoPosition: "center 22%",
    phone: "+244 942 742 800",
    phoneHref: "tel:+244942742800",
    email: "kk@arcoangola.com",
    location: "Luanda, Angola",
  },
  {
    key: "prathap",
    name: "Prathap Parthiban",
    photo: "/assets/leader-prathap-parthiban.jpeg",
    photoPosition: "center 20%",
    phone: "+244 930 408 008",
    phoneHref: "tel:+244930408008",
    email: "prathap@arcoangola.com",
    location: "Luanda, Angola",
  },
  {
    key: "abel",
    name: "Abel Timoteo",
    photo: "/assets/leader-abel-timoteo.jpeg",
    photoPosition: "center 15%",
    phone: "+244 926 531 906",
    phoneHref: "tel:+244926531906",
    email: "director01@arcoangola.com",
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

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {MEMBERS.map((m) => (
            <div key={m.key} className="border border-gray-200 bg-white flex flex-col overflow-hidden">
              <div className="relative h-72 sm:h-80 shrink-0 bg-navy">
                <Image
                  src={m.photo}
                  alt={m.name}
                  fill
                  style={{ objectFit: "cover", objectPosition: m.photoPosition }}
                />
              </div>

              <div className="p-6 lg:p-8 flex flex-col gap-3 flex-1">
                <div>
                  <h3 className="text-xl font-black text-navy leading-tight mb-1.5">
                    {m.name}
                  </h3>
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue">
                    {t(`${m.key}Role`)}
                  </span>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {t(`${m.key}Desc`)}
                </p>

                <dl className="mt-2 pt-4 border-t border-gray-100 flex flex-col gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <dt className="sr-only">{t("phoneLabel")}</dt>
                    <PhoneIcon />
                    <dd>
                      <a href={m.phoneHref} className="text-sm text-gray-600 hover:text-blue transition-colors">
                        {m.phone}
                      </a>
                    </dd>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <dt className="sr-only">{t("emailLabel")}</dt>
                    <MailIcon />
                    <dd>
                      <a href={`mailto:${m.email}`} className="text-sm text-gray-600 hover:text-blue transition-colors break-all">
                        {m.email}
                      </a>
                    </dd>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <dt className="sr-only">{t("locationLabel")}</dt>
                    <LocationIcon />
                    <dd className="text-sm text-gray-600">{m.location}</dd>
                  </div>
                </dl>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
