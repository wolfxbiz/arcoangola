import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const photos = [
  { src: "/assets/training-inspection-team.jpg", label: "photo1" },
  { src: "/assets/training-practical-inspection.jpg", label: "photo2" },
  { src: "/assets/training-practical-assessment.jpg", label: "photo3" },
  { src: "/assets/training-instructor-session.jpg", label: "photo4" },
  { src: "/assets/training-classroom.jpg", label: "photo5" },
  { src: "/assets/training-trainee-group.jpg", label: "photo6" },
];

const reversePhotos = [...photos].reverse();

export default function TrainingGallery() {
  const t = useTranslations("trainingGallery");

  function renderPhotoRow(rowPhotos: typeof photos, reverse = false) {
    return (
      <div className={`training-marquee-track${reverse ? " training-marquee-track-reverse" : ""}`}>
        {[false, true].map((duplicate) => (
          <div
            className="training-marquee-group"
            key={`${reverse ? "reverse" : "forward"}-${duplicate ? "duplicate" : "original"}`}
            aria-hidden={duplicate || undefined}
          >
            {rowPhotos.map(({ src, label }) => (
              <figure key={src} className="training-marquee-card group relative isolate overflow-hidden bg-navy">
                <Image
                  src={src}
                  alt={duplicate ? "" : t(label)}
                  fill
                  sizes="(min-width: 1024px) 22rem, 76vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-3 text-xs font-bold text-white sm:p-4 sm:text-sm">
                  {t(label)}
                </figcaption>
              </figure>
            ))}
          </div>
        ))}
      </div>
    );
  }

  return (
    <section className="border-y border-gray-100 bg-gray-50 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-9 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-blue">
              {t("badge")}
            </span>
            <h2 className="mb-4 text-3xl font-black leading-tight text-navy sm:text-4xl lg:text-5xl">
              {t("heading")}
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-gray-500 sm:text-base">
              {t("intro")}
            </p>
          </div>
          <Link
            href="#courses"
            className="inline-flex shrink-0 items-center gap-2 self-start text-sm font-black text-blue transition-colors hover:text-navy sm:self-auto"
          >
            {t("cta")}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div
          className="training-marquee space-y-3 sm:space-y-4"
          role="group"
          aria-label={t("heading")}
        >
          <div className="training-marquee-viewport">{renderPhotoRow(photos)}</div>
          <div className="training-marquee-viewport" aria-hidden="true">
            {renderPhotoRow(reversePhotos, true)}
          </div>
        </div>
      </div>
    </section>
  );
}
