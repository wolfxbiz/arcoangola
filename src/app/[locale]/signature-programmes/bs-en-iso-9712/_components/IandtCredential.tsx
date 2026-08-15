import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowIcon } from "./icons";

export default function IandtCredential({ locale }: { locale: string }) {
  const t = useTranslations("iso9712.credential");

  const facts = [
    { label: t("pcbLabel"), value: t("pcbValue") },
    { label: t("accredLabel"), value: t("accredValue") },
    { label: t("bodyLabel"), value: t("bodyValue") },
    { label: t("refLabel"), value: t("refValue") },
  ];

  return (
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
            <Link
              href={`/${locale}#accreditations`}
              className="inline-flex items-center gap-2 text-xs font-black text-blue hover:text-navy uppercase tracking-widest transition-colors"
            >
              {t("cta")}
              <ArrowIcon className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
