import { useTranslations } from "next-intl";
import { MapPinIcon, GlobeIcon, GridIcon, TrendingUpIcon, BuildingIcon, PartnershipIcon } from "./icons";

export default function WhyArco() {
  const t = useTranslations("iso9712.whyArco");

  const cards = [
    { Icon: MapPinIcon, title: t("card1Title"), desc: t("card1Desc") },
    { Icon: GlobeIcon, title: t("card2Title"), desc: t("card2Desc") },
    { Icon: GridIcon, title: t("card3Title"), desc: t("card3Desc") },
    { Icon: TrendingUpIcon, title: t("card4Title"), desc: t("card4Desc") },
    { Icon: BuildingIcon, title: t("card5Title"), desc: t("card5Desc") },
    { Icon: PartnershipIcon, title: t("card6Title"), desc: t("card6Desc") },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12 lg:mb-16 max-w-2xl mx-auto text-center">
          <span className="block text-blue text-xs font-bold uppercase tracking-widest mb-4">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight">
            {t("heading")}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {cards.map(({ Icon, title, desc }) => (
            <div key={title} className="border border-gray-200 bg-white p-6 sm:p-8 flex flex-col gap-3">
              <Icon className="w-6 h-6 text-blue" />
              <h3 className="text-base font-black text-navy">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
