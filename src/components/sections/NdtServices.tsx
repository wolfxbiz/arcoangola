"use client";

import Image from "next/image";
import { useState } from "react";

const SERVICES = [
  {
    abbr: "VT",
    name: "Visual Testing",
    desc: "Surface and weld inspection to international standards",
    category: "Conventional",
  },
  {
    abbr: "UT",
    name: "Ultrasonic Testing",
    desc: "Volumetric defect detection in welds and base materials",
    category: "Conventional",
  },
  {
    abbr: "MT",
    name: "Magnetic Particle Testing",
    desc: "Surface and near-surface flaw detection on ferromagnetic materials",
    category: "Conventional",
  },
  {
    abbr: "PT",
    name: "Penetrant Testing",
    desc: "Open surface defect detection on any non-porous material",
    category: "Conventional",
  },
  {
    abbr: "RT",
    name: "Radiographic Testing",
    desc: "X-ray and gamma-ray volumetric inspection and film interpretation",
    category: "Conventional",
  },
  {
    abbr: "PAUT",
    name: "Phased Array UT",
    desc: "Advanced weld inspection and corrosion mapping",
    category: "Advanced",
  },
  {
    abbr: "TOFD",
    name: "Time of Flight Diffraction",
    desc: "High-sensitivity weld inspection and defect sizing",
    category: "Advanced",
  },
  {
    abbr: "ACFM",
    name: "Alternating Current Field Measurement",
    desc: "Surface crack detection without surface preparation or coating removal",
    category: "Advanced",
  },
  {
    abbr: "ECT",
    name: "Eddy Current Testing",
    desc: "Tube testing and weld inspection without surface preparation",
    category: "Advanced",
  },
] as const;

const STATS = [
  { value: "9", label: "NDT Methods" },
  { value: "ISO 9712", label: "Certified Personnel" },
  { value: "ASNT", label: "Qualified Inspectors" },
] as const;

const CATEGORIES = ["All", "Conventional", "Advanced"] as const;
type Category = (typeof CATEGORIES)[number];

export default function NdtServices() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? SERVICES : SERVICES.filter((s) => s.category === active);

  return (
    <section className="bg-navy overflow-hidden">
      {/* ── Top: hero split ─────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-0 lg:min-h-[520px] items-stretch">

          {/* Left: text */}
          <div className="py-16 sm:py-20 lg:py-24 lg:pr-16 flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 text-blue text-[11px] font-black uppercase tracking-widest mb-5">
              <span className="block w-6 h-px bg-blue" />
              Field Inspection Services
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6">
              NDT<br />
              <span className="text-blue">Inspection</span><br />
              Services
            </h2>

            <p className="text-white/55 leading-relaxed text-sm sm:text-base max-w-prose mb-8">
              Beyond training, Arco Angola deploys certified NDT inspectors to carry out field inspection services on industrial assets — pipelines, pressure vessels, storage tanks, structural welds and more. All inspections are conducted to international standards by qualified personnel.
            </p>

            {/* Stats */}
            <div className="flex gap-6 sm:gap-10 mb-10">
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl sm:text-3xl font-black text-white leading-none mb-1">{value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/55">{label}</div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="self-start inline-flex items-center gap-2.5 px-7 py-4 bg-blue text-white font-black text-sm uppercase tracking-wider hover:bg-white hover:text-navy transition-colors duration-200"
            >
              Request an Inspection
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right: image */}
          <div className="hidden lg:block relative">
            {/* Diagonal clip on left edge */}
            <div
              className="absolute inset-0"
              style={{ clipPath: "polygon(6% 0, 100% 0, 100% 100%, 0% 100%)" }}
            >
              <Image
                src="/assets/img-ndt-services.webp"
                alt="NDT inspector conducting field inspection on industrial asset"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
              />
              {/* subtle dark overlay */}
              <div className="absolute inset-0 bg-navy/30" />
            </div>

            {/* Credential badge */}
            <div className="absolute bottom-8 left-12 z-10 bg-navy/80 backdrop-blur-sm border border-white/10 px-4 py-3">
              <div className="text-[10px] font-black uppercase tracking-widest text-blue mb-0.5">Certified To</div>
              <div className="text-white font-bold text-sm">ISO 9712 · ASNT · API</div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Divider ─────────────────────────────────────────── */}
      <div className="border-t border-white/8" />

      {/* ── Service grid ────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

        {/* Category filter */}
        <div className="flex items-center gap-1 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={[
                "px-4 py-2 text-[11px] font-black uppercase tracking-wider transition-colors duration-150",
                active === cat
                  ? "bg-blue text-white"
                  : "text-white/55 hover:text-white/80",
              ].join(" ")}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto text-[10px] text-white/50 uppercase tracking-widest hidden sm:block">
            {filtered.length} method{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8">
          {filtered.map(({ abbr, name, desc, category }) => (
            <div
              key={abbr}
              className="group bg-navy p-6 sm:p-7 flex flex-col gap-4 hover:bg-[#0e2a4a] transition-colors duration-200 cursor-default"
            >
              {/* Abbr + category */}
              <div className="flex items-start justify-between">
                <span className="text-4xl font-black text-white/10 group-hover:text-blue/20 leading-none transition-colors duration-200 select-none">
                  {abbr}
                </span>
                <span className={[
                  "text-[9px] font-black uppercase tracking-widest px-2 py-1 mt-1",
                  category === "Advanced"
                    ? "bg-blue text-white"
                    : "border border-white/20 text-white/60",
                ].join(" ")}>
                  {category}
                </span>
              </div>

              {/* Name + desc */}
              <div>
                <div className="text-xs font-black text-white uppercase tracking-wide leading-tight mb-2">
                  {name}
                </div>
                <div className="text-xs text-white/60 leading-relaxed">
                  {desc}
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="mt-auto pt-3 border-t border-white/6 group-hover:border-blue/30 transition-colors duration-200">
                <div className="w-0 group-hover:w-8 h-0.5 bg-blue transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-8 flex items-start gap-3">
          <div className="w-0.5 h-8 bg-blue shrink-0 mt-0.5" />
          <p className="text-white/55 text-xs leading-relaxed">
            All field inspections are carried out by ISO 9712 or ASNT certified personnel operating to client-specified procedures and international standards (ASME, AWS, API, EN).
          </p>
        </div>

      </div>
    </section>
  );
}
