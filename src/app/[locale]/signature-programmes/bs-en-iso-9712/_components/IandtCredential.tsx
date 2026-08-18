"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowIcon } from "./icons";

const CERT_DOCUMENTS = [
  { src: "/assets/doc-pcb124-certificate.webp", labelKey: "certificateLabel" as const, width: 1980, height: 1530 },
  { src: "/assets/doc-pcb124-scope.webp", labelKey: "scopeLabel" as const, width: 1468, height: 8028 },
];

export default function IandtCredential() {
  const t = useTranslations("iso9712.credential");
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [lightbox, setLightbox] = useState<(typeof CERT_DOCUMENTS)[number] | null>(null);

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

          <div className="border border-gray-200 bg-white">
            <div className="p-6 sm:p-8 border-b border-gray-200">
              <p className="text-lg font-black text-navy">{t("orgName")}</p>
              <p className="text-sm text-gray-500">{t("orgLocation")}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              {facts.map((f, i) => (
                <div
                  key={f.label}
                  className={`p-5 sm:p-6 ${i < facts.length - 1 ? "border-b sm:border-b-0 sm:border-r border-gray-200" : ""}`}
                >
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5">{f.label}</p>
                  <p className="text-sm font-bold text-navy leading-snug">{f.value}</p>
                </div>
              ))}
            </div>

            <div className="p-6 sm:p-8 border-t border-gray-200">
              <button
                onClick={() => setGalleryOpen(true)}
                className="inline-flex items-center gap-2 text-xs font-black text-blue hover:text-navy uppercase tracking-widest transition-colors"
              >
                {t("cta")}
                <ArrowIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Certificate gallery */}
      {galleryOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/92 flex items-center justify-center p-4 sm:p-10"
          onClick={() => setGalleryOpen(false)}
        >
          <div className="relative w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setGalleryOpen(false)}
              className="absolute -top-9 right-0 text-white/60 hover:text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2"
            >
              {t("close")}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-white p-5 sm:p-6">
              <p className="text-[11px] font-black text-navy uppercase tracking-widest mb-4">{t("cta")}</p>
              <div className="grid grid-cols-2 gap-3">
                {CERT_DOCUMENTS.map((doc) => (
                  <button
                    key={doc.src}
                    onClick={() => {
                      setGalleryOpen(false);
                      setLightbox(doc);
                    }}
                    className="group flex flex-col overflow-hidden border border-gray-200 hover:border-blue transition-colors duration-200 text-left"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                      <Image
                        src={doc.src}
                        alt={t(doc.labelKey)}
                        fill
                        sizes="(min-width: 640px) 25vw, 40vw"
                        style={{ objectFit: "cover", objectPosition: "top" }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-200 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                        </svg>
                      </div>
                    </div>
                    <div className="px-2 py-2 border-t border-gray-100">
                      <p className="text-[9px] font-black text-blue uppercase tracking-wide leading-tight">{t(doc.labelKey)}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

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
              alt={t(lightbox.labelKey)}
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
