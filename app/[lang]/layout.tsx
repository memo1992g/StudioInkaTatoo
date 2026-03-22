import { notFound } from "next/navigation";
import {
  getAlternateLocale,
  isValidLocale,
  locales,
  siteContent,
  type Locale,
} from "../site-content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    return {};
  }

  const locale = lang as Locale;
  const alternateLocale = getAlternateLocale(locale);
  const content = siteContent[locale];
  const path = `/${locale}`;
  const absoluteUrl = `${siteUrl}${path}`;

  return {
    title: content.seo.title,
    description: content.seo.description,
    alternates: {
      canonical: absoluteUrl,
      languages: {
        es: `${siteUrl}/es`,
        en: `${siteUrl}/en`,
        "x-default": `${siteUrl}/es`,
      },
    },
    openGraph: {
      title: content.seo.title,
      description: content.seo.description,
      url: absoluteUrl,
      siteName: "Alex Melendez Professional Tattoo",
      locale: locale === "es" ? "es_SV" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: content.seo.title,
      description: content.seo.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    other: {
      keywords: content.seo.keywords.join(", "),
      "content-language": locale,
      "geo.region": "SV",
      "geo.placename": "Santa Tecla",
      "geo.position": "13.6769;-89.2797",
      ICBM: "13.6769, -89.2797",
      "article:tag": content.seo.keywords.join(", "),
      "language-alternate": alternateLocale,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return children;
}
