import Image from "next/image";
import { useTranslations } from "next-intl";
import { whatsAppLink } from "@/lib/whatsapp";
import { ArrowIcon, CheckIcon } from "./icons";

export default function CorporateSolutions() {
  const t = useTranslations("iso9712.corporate");

  const items = [
    t("item1"), t("item2"), t("item3"), t("item4"), t("item5"),
    t("item6"), t("item7"), t("item8"), t("item9"), t("item10"),
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="border border-gray-200 flex flex-col lg:flex-row overflow-hidden">
          <div className="relative h-56 lg:h-auto lg:w-2/5 shrink-0">
            <Image
              src="/assets/img-civil-engineer-office.webp"
              alt="Corporate NDT workforce training"
              fill
              style={{ objectFit: "cover", objectPosition: "center 15%" }}
            />
          </div>
          <div className="p-6 sm:p-10 lg:p-12 flex-1 flex flex-col gap-6 bg-navy">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#D4AF37]">
                {t("badge")}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight mt-2 mb-3">
                {t("heading")}
              </h2>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                {t("intro")}
              </p>
            </div>

            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/85">
                  <CheckIcon className="w-4 h-4 shrink-0 text-[#D4AF37] mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={whatsAppLink(t("waMessage"))}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start inline-flex items-center gap-2 px-6 py-3.5 bg-blue hover:bg-white hover:text-navy text-white font-bold text-sm transition-colors"
            >
              {t("cta")}
              <ArrowIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
