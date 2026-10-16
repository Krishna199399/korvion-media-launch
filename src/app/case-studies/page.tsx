import type { Metadata } from 'next';
import { CaseStudiesClient } from './CaseStudiesClient';

export const metadata: Metadata = {
  title: 'Case Studies & Client Results | Korvion Media',
  description:
    'Explore real client growth results, B2B pipeline acceleration, and revenue systems engineered by Korvion Media across manufacturing, tech, and enterprise.',
  alternates: {
    canonical: 'https://www.korvionmedia.com/case-studies/',
  },
  openGraph: {
    title: 'Case Studies & Client Results | Korvion Media',
    description:
      'Real client growth results, B2B pipeline acceleration, and revenue systems engineered by Korvion Media.',
    type: 'website',
    url: 'https://www.korvionmedia.com/case-studies/',
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}
