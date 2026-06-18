"use client";

import Image from "next/image";

const CERTS = [
  {
    img: "/assets/corporate.webp",
    imgAlt: "ISO Lead Auditor training session",
    badge: "ISO 9001 · 14001 · 45001",
    title: "ISO Lead Auditor Training",
    tabKey: "iso",
    description:
      "Accredited Lead Auditor programmes for Quality (ISO 9001), Environmental (ISO 14001) and Occupational Health & Safety (ISO 45001) management systems — equipping professionals and organisations for audit, compliance and certification.",
  },
  {
    img: "/assets/engineer.webp",
    imgAlt: "ISO 9712 certified NDT engineer",
    badge: "ISO 9712",
    title: "ISO 9712 NDT Certification",
    tabKey: "iso",
    description:
      "ISO 9712 Level 2 and Level 3 certification across all major NDT methods — conventional techniques, advanced methods (PAUT, TOFD) and specialised courses including ACFM and Eddy Current. The international benchmark for NDT personnel certification.",
  },
  {
    img: "/assets/inspector.webp",
    imgAlt: "Industrial NDT inspector on site",
    badge: "ASNT-SNT-TC-1A",
    title: "NDT Level II Certification",
    tabKey: "ndt",
    description:
      "ASNT-accredited non-destructive testing courses covering VT, MT, PT, UT, RT and RTFI — the globally accepted standard for NDT personnel qualification in the oil, gas and industrial sectors. Recognised by employers and clients worldwide.",
  },
  {
    img: "/assets/img-ndt-services.webp",
    imgAlt: "Professional welder on pressure vessel",
    badge: "TWI-CSWIP / BGAS",
    title: "Welding & Painting Inspection",
    tabKey: "welding",
    description:
      "Internationally recognised welding and painting inspection certifications from TWI — covering visual welding inspection (CSWIP 3.0, 3.1, 3.2) and protective coatings inspection (BGAS Grade 1 & 2). The global benchmark for inspectors in the oil, gas and construction sectors.",
  },
] as const;

function handleViewCourses(tabKey: string) {
  window.dispatchEvent(new CustomEvent("setCatalogTab", { detail: tabKey }));
  document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
}

export default function CertificationHighlights() {
  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-4">
            Globally Accredited Programmes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mb-4">
            What We Train
          </h2>
          <p className="text-gray-500 max-w-2xl text-sm sm:text-base leading-relaxed">
            Every programme we deliver is backed by a globally recognised certification body — the same qualifications accepted on worksites and by employers worldwide, now available right here in Angola.
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {CERTS.map(({ img, imgAlt, badge, title, tabKey, description }) => (
            <div key={title} className="border border-gray-200 flex flex-col overflow-hidden">
              <div className="relative h-56 sm:h-64 shrink-0">
                <Image
                  src={img}
                  alt={imgAlt}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
              <div className="p-6 lg:p-8 flex flex-col gap-3 flex-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue">
                  {badge}
                </span>
                <h3 className="text-xl font-black text-navy leading-tight">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {description}
                </p>
                <button
                  onClick={() => handleViewCourses(tabKey)}
                  className="self-start mt-2 inline-flex items-center gap-1.5 text-xs font-black text-blue hover:text-navy uppercase tracking-widest transition-colors"
                >
                  View Courses
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 5th card — full width — Certified QC Professional */}
        <div className="border border-gray-200 flex flex-col lg:flex-row overflow-hidden">
          <div className="relative h-64 lg:h-auto lg:w-2/5 shrink-0 overflow-hidden">
            <Image
              src="/assets/img-individual.webp"
              alt="Certified QC professional in the field"
              fill
              style={{ objectFit: "cover", objectPosition: "50% 25%" }}
            />
          </div>
          <div className="p-6 lg:p-10 flex flex-col gap-3 justify-center flex-1 bg-navy">
            <span className="text-[10px] font-black uppercase tracking-widest text-blue">
              COGIP · CMQIP — Globally Recognised
            </span>
            <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight">
              Certified QC Professional Training
            </h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-2xl">
              Angola&apos;s only provider of comprehensive Certified Oil &amp; Gas Industry Professional (COGIP) and Certified Mechanical QA/QC Industry Professional (CMQIP) programmes — intensive, industry-focused tracks built to globally recognised standards, producing QC professionals who are work-ready from day one.
            </p>
            <a
              href="#premium"
              className="self-start mt-3 inline-flex items-center gap-2 px-5 py-2.5 bg-blue hover:bg-white hover:text-navy text-white font-bold text-sm transition-colors"
            >
              View Programmes
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
