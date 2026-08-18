import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProgrammeHero from "./_components/ProgrammeHero";
import CertificationEcosystem from "./_components/CertificationEcosystem";
import AboutStandard from "./_components/AboutStandard";
import NdtPortfolio from "./_components/NdtPortfolio";
import CareerPathway from "./_components/CareerPathway";
import CertificationProcess from "./_components/CertificationProcess";
import WhyArco from "./_components/WhyArco";
import CorporateSolutions from "./_components/CorporateSolutions";
import AngolaToAfrica from "./_components/AngolaToAfrica";
import IandtCredential from "./_components/IandtCredential";
import FinalCta from "./_components/FinalCta";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "iso9712.hero" });
  return {
    title: `${t("title")} – ${t("subtitle")} | Arco Angola`,
    description: t("statement"),
    alternates: {
      canonical: `/${locale}/signature-programmes/bs-en-iso-9712`,
      languages: {
        pt: "/pt/signature-programmes/bs-en-iso-9712",
        en: "/en/signature-programmes/bs-en-iso-9712",
        fr: "/fr/signature-programmes/bs-en-iso-9712",
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Iso9712Page({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <Navbar />
      <main>
        <ProgrammeHero locale={locale} />
        <CertificationEcosystem />
        <AboutStandard />
        <NdtPortfolio />
        <CareerPathway />
        <CertificationProcess />
        <WhyArco />
        <CorporateSolutions />
        <AngolaToAfrica />
        <IandtCredential />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
