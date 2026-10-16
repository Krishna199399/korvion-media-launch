import type { Metadata } from 'next';
import { ManufacturingClient } from './ManufacturingClient';

export const metadata: Metadata = {
  title: 'Digital Marketing for Manufacturers | Korvion Media',
  description:
    'Explore digital marketing strategies for manufacturers to improve online visibility, reach target buyers, and generate qualified business leads.',
  keywords: [
    'digital marketing for manufacturers',
    'digital marketing for manufacturing industry',
    'digital marketing agency for manufacturers',
    'manufacturing B2B marketing',
    'marketing for manufacturing industry',
    'B2B industrial marketing',
    'how to market industrial product',
    'B2B manufacturer marketing',
    'digital marketing for manufacturing industries',
    'marketing for manufacturing companies',
    'manufacturing marketing services',
    'digital marketing strategy for manufacturing company',
    'manufacturing marketing ideas',
    'marketing plan for a manufacturing company',
    'marketing strategy of manufacturing company',
    'digital marketing for industrial products',
    'marketing strategy for industrial products',
    'how to sell industrial products online',
    'how to sell manufactured products',
    'content marketing for manufacturers',
    'lead generation for manufacturers',
    'how to generate leads in manufacturing industries',
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.korvionmedia.com/industries/manufacturing/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Korvion Media',
    title: 'Digital Marketing for Manufacturers | Korvion Media',
    description:
      'Explore digital marketing strategies for manufacturers to improve online visibility, reach target buyers, and generate qualified business leads.',
    url: 'https://www.korvionmedia.com/industries/manufacturing/',
    images: [
      {
        url: 'https://www.korvionmedia.com/_next/static/media/korvion-logo.8e946297.png',
        alt: 'Korvion Media logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing for Manufacturers | Korvion Media',
    description:
      'Explore digital marketing strategies for manufacturers to improve online visibility, reach target buyers, and generate qualified business leads.',
    images: [
      {
        url: 'https://www.korvionmedia.com/_next/static/media/korvion-logo.8e946297.png',
        alt: 'Korvion Media logo',
      },
    ],
  },
};

const manufacturingSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.korvionmedia.com/industries/manufacturing/#webpage',
      url: 'https://www.korvionmedia.com/industries/manufacturing/',
      name: 'Digital Marketing for Manufacturers | Korvion Media',
      description:
        'Explore digital marketing strategies for manufacturers to improve online visibility, reach target buyers, and generate qualified business leads.',
      keywords:
        'digital marketing for manufacturers, digital marketing for manufacturing industry, digital marketing agency for manufacturers, manufacturing B2B marketing, marketing for manufacturing industry, B2B industrial marketing, how to market industrial product, B2B manufacturer marketing, digital marketing for manufacturing industries, marketing for manufacturing companies, manufacturing marketing services, digital marketing strategy for manufacturing company, manufacturing marketing ideas, marketing plan for a manufacturing company, marketing strategy of manufacturing company, digital marketing for industrial products, marketing strategy for industrial products, how to sell industrial products online, how to sell manufactured products, content marketing for manufacturers, lead generation for manufacturers, how to generate leads in manufacturing industries',
      isPartOf: {
        '@id': 'https://www.korvionmedia.com/#website',
      },
      about: {
        '@id': 'https://www.korvionmedia.com/#organization',
      },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'Service',
      name: 'Digital Marketing for Manufacturers',
      serviceType: 'B2B Industrial Marketing and Commercial Growth',
      provider: {
        '@type': 'Organization',
        name: 'Korvion Media',
        url: 'https://www.korvionmedia.com/',
      },
      areaServed: {
        '@type': 'Country',
        name: 'India',
      },
      description:
        'Digital marketing for manufacturing companies, spanning SEO, catalog creation, B2B lead generation, distributor acquisition, and export readiness.',
    },
  ],
};

export default function ManufacturingPage() {
  return (
    <>
      {/*
        === TARGET KEYWORDS & SEARCH VOLUMES (IMMEDIATE HEAD) ===
        Keyword                                              Volume    Priority
        digital marketing for manufacturers                  170       Primary
        digital marketing for manufacturing industry         170       High
        digital marketing agency for manufacturers           40        High
        manufacturing B2B marketing                          30        High
        marketing for manufacturing industry                 30        High
        B2B industrial marketing                             30        High
        how to market industrial product                     30        Medium
        B2B manufacturer marketing                           20        High
        digital marketing for manufacturing industries       20        High
        marketing for manufacturing companies                20        High
        manufacturing marketing services                     20        High
        digital marketing strategy for manufacturing company 20        Medium
        manufacturing marketing ideas                        20        Low
        marketing plan for a manufacturing company           20        Low
        marketing strategy of manufacturing company          20        Low
        digital marketing for industrial products            20        Medium
        marketing strategy for industrial products           20        Medium
        how to sell industrial products online               20        Medium
        how to sell manufactured products                    20        Medium
        content marketing for manufacturers                  10        Medium
        lead generation for manufacturers                    10        High
        how to generate leads in manufacturing industries    0         Low for now
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(manufacturingSchema) }}
      />
      <ManufacturingClient />
    </>
  );
}
