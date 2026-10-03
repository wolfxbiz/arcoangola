import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { whatsAppLink } from "@/lib/whatsapp";

const methodCards = [
  { code: "VT", title: "Visual Testing", note: "Surface condition and visible indications" },
  { code: "PT", title: "Liquid Penetrant Testing", note: "Surface-breaking flaw detection" },
  { code: "MT", title: "Magnetic Particle Testing", note: "Near-surface defect detection in ferromagnetic materials" },
  { code: "UT", title: "Ultrasonic Testing", note: "Internal volumetric inspection" },
  { code: "RT", title: "Radiographic Testing", note: "Internal imaging and density indication" },
  { code: "ET", title: "Eddy Current Testing", note: "Surface and near-surface conductivity-based inspection" },
];

const pathwaySteps = [
  "Fundamental Knowledge",
  "Method-Specific Training",
  "Practical Skills Development",
  "Codes, Standards & Procedures",
  "Examination Preparation",
  "Documented Experience",
  "Employer Qualification & Certification",
];

const writtenPracticeItems = [
  "Training",
  "Experience",
  "Examinations",
  "Vision Requirements",
  "Practical Competency",
  "Employer Authorization",
  "Certification Records",
];

const corporateAreas = [
  "Corporate NDT Training",
  "In-House Training",
  "Method-Specific Competency Development",
  "Level II Preparation",
  "Practical Skills Development",
  "Written-Practice Awareness",
  "Examination Preparation",
  "Competency Gap Assessment",
  "Workforce Upskilling",
  "Project-Specific NDT Training",
];

const comparisonRows = [
  { label: "Model", asnt: "Employer-based", iso: "Independent personnel certification" },
  { label: "Training", asnt: "ARCO ANGOLA", iso: "ARCO ANGOLA" },
  { label: "Certification control", asnt: "Employer / applicable ASNT programme", iso: "IANDT" },
  { label: "Governing framework", asnt: "Employer Written Practice based on SNT-TC-1A", iso: "BS EN ISO 9712" },
  { label: "Primary use", asnt: "Employer/company NDT programmes", iso: "Independent personnel credential" },
];

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M10 1.5l2.59 5.25 5.79.84-4.19 4.08.99 5.77L10 14.77l-5.18 2.67.99-5.77L1.62 7.6l5.79-.84L10 1.5z" />
    </svg>
  );
}

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "ASNT NDT | Arco Angola",
    description: "Employer-based ASNT NDT development and qualification pathways for NDT personnel and industrial organisations.",
    alternates: {
      canonical: `/${locale}/signature-programmes/asnt-ndt`,
      languages: {
        pt: "/pt/signature-programmes/asnt-ndt",
        en: "/en/signature-programmes/asnt-ndt",
        fr: "/fr/signature-programmes/asnt-ndt",
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function AsntNdtPage({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <Navbar />
      <main>
        <section className="relative flex items-center overflow-hidden pt-24 lg:pt-28 pb-14 lg:pb-20">
          <div className="absolute inset-0 bg-black" aria-hidden="true" />
          <Image
            src="/assets/hero-training-session.jpeg"
            alt=""
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-navy/80" aria-hidden="true" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/50 mb-6">
              <Link href={`/${locale}`} className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span>Signature Programmes</span>
              <span>/</span>
              <span className="text-[#D4AF37]">ASNT NDT</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.25em] text-[#D4AF37] mb-4">
                <StarIcon className="w-3.5 h-3.5" />
                Signature Programme
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.05] tracking-tight text-white mb-4">
                ASNT NDT
              </h1>
              <p className="text-lg sm:text-xl text-white/85 font-bold mb-6">
                NDT Training &amp; Employer-Based Qualification Pathways
              </p>

              <p className="text-sm sm:text-base text-white/75 leading-relaxed mb-4 max-w-2xl">
                ARCO ANGOLA provides structured Non-Destructive Testing training and professional-development pathways aligned with internationally recognised ASNT practices, supporting NDT personnel and organisations in developing the knowledge, practical capability and documented qualification required for employer-based NDT certification.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <a href="#pathway" className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue hover:bg-white hover:text-navy text-white font-bold text-sm transition-colors">
                  Explore NDT Programmes
                  <ArrowIcon className="w-4 h-4" />
                </a>
                <a href={whatsAppLink("Hello ARCO ANGOLA, I would like to request corporate NDT training for our team.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/30 hover:border-white text-white font-bold text-sm transition-colors">
                  Request Corporate Training
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-xs sm:text-sm font-bold text-white/70">
              <span>SNT-TC-1A</span>
              <span className="text-[#D4AF37]">NDT Level II</span>
              <span>Employer Written Practice</span>
            </div>
          </div>
        </section>

        <section id="pathway" className="py-14 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-4">Understanding the ASNT pathway</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight mb-5">
                Employer-Based NDT Qualification &amp; Certification
              </h2>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                Recommended Practice No. SNT-TC-1A provides guidance to employers for establishing written practices for the qualification and certification of NDT personnel. Under this model, personnel qualification is based on applicable education, training, experience, examinations and visual-acuity requirements, while certification is controlled by the employer in accordance with its written practice.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-3 text-center">
                <div className="border border-gray-200 bg-white px-5 py-4 min-w-[220px] shadow-sm">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-blue mb-2">ARCO ANGOLA</p>
                  <p className="text-sm text-navy font-bold">Training • Knowledge Development • Practical Skills Development • Examination Preparation</p>
                </div>
                <div className="text-3xl text-gray-300">↓</div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-3 text-center">
                <div className="border border-gray-200 bg-white px-5 py-4 min-w-[220px] shadow-sm">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-blue mb-2">CANDIDATE</p>
                  <p className="text-sm text-navy font-bold">Training • Experience • Examination • Practical Competency • Vision Requirements</p>
                </div>
                <div className="text-3xl text-gray-300">↓</div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-3 text-center">
                <div className="border border-gray-200 bg-white px-5 py-4 min-w-[220px] shadow-sm">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-blue mb-2">EMPLOYER WRITTEN PRACTICE</p>
                  <p className="text-sm text-navy font-bold">Qualification requirements and employer-specific certification process</p>
                </div>
                <div className="text-3xl text-gray-300">↓</div>
              </div>

              <div className="text-center">
                <div className="border border-gray-200 bg-navy px-5 py-4 mx-auto max-w-xl shadow-sm">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#D4AF37] mb-2">EMPLOYER</p>
                  <p className="text-lg text-white font-black">EMPLOYER-BASED NDT CERTIFICATION</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 border-y border-gray-100 py-14 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-4">Reference framework</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight mb-5">
                ASNT Recommended Practice No. SNT-TC-1A
              </h2>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                ARCO ANGOLA&apos;s employer-based NDT professional-development pathway is structured with reference to the applicable requirements and recommendations of ASNT Recommended Practice No. SNT-TC-1A — Personnel Qualification and Certification in Nondestructive Testing, together with the employer&apos;s approved Written Practice.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {methodCards.map((method) => (
                <div key={method.code} className="border border-gray-200 bg-white p-6 flex flex-col gap-3">
                  <span className="text-3xl font-black text-blue">{method.code}</span>
                  <h3 className="text-lg font-black text-navy">{method.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{method.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-4">Level II professional pathway</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight mb-5">
                Develop the competence to perform, interpret &amp; evaluate
              </h2>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                ARCO ANGOLA&apos;s NDT Level II training pathway develops the theoretical knowledge, method-specific understanding and practical capability required of NDT personnel progressing toward Level II responsibilities under an applicable employer-based certification programme.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-7 gap-3">
              {pathwaySteps.map((step, index) => (
                <div key={step} className="border border-gray-200 bg-gray-50 p-4 min-h-[140px] flex flex-col">
                  <span className="text-3xl font-black text-gray-300 mb-3">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-sm font-black text-navy leading-snug">{step}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border-l-4 border-[#D4AF37] bg-[#D4AF37]/5 p-5 max-w-3xl">
              <p className="text-sm sm:text-base text-navy leading-relaxed font-semibold">
                Training alone does not equal certification. This distinction is essential for employers and personnel using an SNT-TC-1A-based qualification framework.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-navy py-14 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <span className="block text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4">The Written Practice</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
                The foundation of employer-based certification
              </h2>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                Under an SNT-TC-1A-based programme, the employer establishes a Written Practice defining its requirements for NDT personnel qualification and certification. The Written Practice addresses applicable training, experience, examinations, visual acuity, responsibilities, certification and recertification requirements.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-3">
              {writtenPracticeItems.map((item) => (
                <div key={item} className="border border-white/10 bg-white/5 p-4 text-center">
                  <span className="text-sm font-black text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-4">Important distinction</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight mb-5">
                ASNT NDT / SNT-TC-1A vs BS EN ISO 9712
              </h2>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                ASNT NDT and BS EN ISO 9712 are not the same model. The ASNT pathway is employer-based and linked to the employer&apos;s Written Practice, whereas BS EN ISO 9712 is an independent personnel-certification architecture.
              </p>
            </div>

            <div className="overflow-hidden border border-gray-200 bg-white">
              <div className="grid grid-cols-3 bg-navy text-white text-xs font-black uppercase tracking-[0.15em]">
                <div className="p-4">Comparison</div>
                <div className="p-4 border-l border-white/10">ASNT / SNT-TC-1A</div>
                <div className="p-4 border-l border-white/10">BS EN ISO 9712</div>
              </div>

              {comparisonRows.map((row) => (
                <div key={row.label} className="grid grid-cols-3 border-t border-gray-200 text-sm">
                  <div className="p-4 font-black text-navy bg-gray-50">{row.label}</div>
                  <div className="p-4 text-gray-600 border-l border-gray-200">{row.asnt}</div>
                  <div className="p-4 text-gray-600 border-l border-gray-200">{row.iso}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-4">Corporate NDT workforce development</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight mb-5">
                Build a competent NDT workforce
              </h2>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                ARCO ANGOLA supports operators, EPC contractors, fabrication companies, inspection organisations and industrial employers in developing structured NDT workforce-competency programmes aligned with project requirements and applicable employer Written Practices.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {corporateAreas.map((area) => (
                <div key={area} className="border border-gray-200 bg-white p-5 flex items-start gap-3">
                  <span className="mt-1 flex items-center justify-center w-6 h-6 bg-blue text-white text-xs font-black">✓</span>
                  <span className="text-sm font-bold text-navy leading-snug">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy py-14 sm:py-20 lg:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="block text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4">Why ARCO ANGOLA</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              International framework. Industrial focus. Practical workforce development.
            </h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-8 max-w-3xl mx-auto">
              We help employers and professionals build a stronger NDT capability through structured training, skill development and qualification-readiness aligned to real operational requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={whatsAppLink("Hello ARCO ANGOLA, I would like to discuss our NDT workforce development needs.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue hover:bg-white hover:text-navy text-white font-bold text-sm transition-colors">
                Request a Consultation
                <ArrowIcon className="w-4 h-4" />
              </a>
              <Link href={`/${locale}`} className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/30 hover:border-white text-white font-bold text-sm transition-colors">
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
