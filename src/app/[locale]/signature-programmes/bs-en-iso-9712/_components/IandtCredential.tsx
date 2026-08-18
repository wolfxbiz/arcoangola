"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowIcon } from "./icons";

const CERTIFICATE = { src: "/assets/doc-pcb124-certificate.webp", width: 1980, height: 1530 };
const SCOPE = { src: "/assets/doc-pcb124-scope.webp", width: 1468, height: 8028 };

export default function IandtCredential() {
  const t = useTranslations("iso9712.credential");
  const [lightbox, setLightbox] = useState<typeof CERTIFICATE | null>(null);

  const facts = [
    { label: t("pcbLabel"), value: t("pcbValue") },
    { label: t("accredLabel"), value: t("accredValue") },
    { label: t("bodyLabel"), value: t("bodyValue") },
    { label: t("refLabel"), value: t("refValue") },
  ];

  return (
    <>
      <section className="py-14 sm:py-20 lg:py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-10 max-w-2xl">
            <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-4">
              {t("badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-navy leading-tight mb-4">
              {t("heading")}
            </h2>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
              {t("intro")}
            </p>
          </div>

          <div className="border border-gray-200 bg-white flex flex-col lg:flex-row">

            {/* Certificate — visible on the page */}
            <button
              onClick={() => setLightbox(CERTIFICATE)}
              className="group relative lg:w-1/2 shrink-0 overflow-hidden border-b lg:border-b-0 lg:border-r border-gray-200 text-left"
            >
              <Image
                src={CERTIFICATE.src}
                alt={t("certificateLabel")}
                width={CERTIFICATE.width}
                height={CERTIFICATE.height}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-200 flex items-center justify-center">
                <svg
                  className="w-9 h-9 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 drop-shadow"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                </svg>
              </div>
              <span className="absolute bottom-3 left-3 text-[10px] font-black uppercase tracking-widest text-white bg-navy/80 px-2.5 py-1">
                {t("certificateLabel")}
              </span>
            </button>

            {/* Facts */}
            <div className="flex-1 flex flex-col">
              <div className="p-6 sm:p-8 border-b border-gray-200">
                <p className="text-lg font-black text-navy">{t("orgName")}</p>
                <p className="text-sm text-gray-500">{t("orgLocation")}</p>
              </div>

              <div className="grid sm:grid-cols-2">
                {facts.map((f, i) => (
                  <div
                    key={f.label}
                    className={`p-5 sm:p-6 border-b border-gray-200 ${i % 2 === 0 ? "sm:border-r" : ""}`}
                  >
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5">{f.label}</p>
                    <p className="text-sm font-bold text-navy leading-snug">{f.value}</p>
                  </div>
                ))}
              </div>

              <div className="p-6 sm:p-8 mt-auto">
                <button
                  onClick={() => setLightbox(SCOPE)}
                  className="inline-flex items-center gap-2 text-xs font-black text-blue hover:text-navy uppercase tracking-widest transition-colors"
                >
                  {t("cta")}
                  <ArrowIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/92 flex items-center justify-center p-4 sm:p-10"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-h-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-9 right-0 text-white/60 hover:text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2"
            >
              {t("close")}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={lightbox.src}
              alt={lightbox === CERTIFICATE ? t("certificateLabel") : t("scopeLabel")}
              width={lightbox.width}
              height={lightbox.height}
              style={{ maxHeight: "90vh", width: "auto", objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
