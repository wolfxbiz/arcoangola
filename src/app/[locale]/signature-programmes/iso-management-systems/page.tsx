import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "./_components/Hero";
import CoreSystems from "./_components/CoreSystems";
import DevelopmentPathway from "./_components/DevelopmentPathway";
import AdditionalStandards from "./_components/AdditionalStandards";
import ProfessionalDevelopment from "./_components/ProfessionalDevelopment";
import IntegratedSystems from "./_components/IntegratedSystems";
import CertificationArchitecture from "./_components/CertificationArchitecture";
import CorporateSolutions from "./_components/CorporateSolutions";
import Industries from "./_components/Industries";
import WhyArco from "./_components/WhyArco";
import FinalCta from "./_components/FinalCta";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "isoMs.hero" });
  return {
    title: `${t("title")} – ${t("subtitle")} | Arco Angola`,
    description: t("statement"),
    alternates: {
      canonical: `/${locale}/signature-programmes/iso-management-systems`,
      languages: {
        pt: "/pt/signature-programmes/iso-management-systems",
        en: "/en/signature-programmes/iso-management-systems",
        fr: "/fr/signature-programmes/iso-management-systems",
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function IsoManagementSystemsPage({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <Navbar />
      <main>
        <Hero locale={locale} />
        <CoreSystems />
        <DevelopmentPathway />
        <AdditionalStandards />
        <ProfessionalDevelopment />
        <IntegratedSystems />
        <CertificationArchitecture />
        <CorporateSolutions />
        <Industries />
        <WhyArco />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
