import { locales } from "./site-content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap() {
  const now = new Date();

  const localeRoutes = locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: locale === "es" ? 1 : 0.9,
    alternates: {
      languages: {
        es: `${siteUrl}/es`,
        en: `${siteUrl}/en`,
      },
    },
  }));

  const seoRoutes = [
    {
      url: `${siteUrl}/tatuajes-en-el-salvador`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
      alternates: {
        languages: {
          es: `${siteUrl}/tatuajes-en-el-salvador`,
          en: `${siteUrl}/en/get-a-tattoo-in-el-salvador`,
        },
      },
    },
    {
      url: `${siteUrl}/en/get-a-tattoo-in-el-salvador`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
      alternates: {
        languages: {
          es: `${siteUrl}/tatuajes-en-el-salvador`,
          en: `${siteUrl}/en/get-a-tattoo-in-el-salvador`,
        },
      },
    },
  ];

  return [...localeRoutes, ...seoRoutes];
}
