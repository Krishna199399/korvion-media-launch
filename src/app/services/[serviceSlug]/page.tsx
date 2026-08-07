import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/lib/services-data";
import { ServiceDetailClient } from "@/app/services/[serviceSlug]/ServiceDetailClient";

export async function generateStaticParams() {
  return services.map((s) => ({
    serviceSlug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}): Promise<Metadata> {
  const { serviceSlug } = await params;
  const s = getServiceBySlug(serviceSlug);
  const title = s ? `${s.title} — Korvion Media` : "Service — Korvion Media";
  const description = s?.headline ?? "Premium growth services by Korvion Media.";

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.korvionmedia.com/services/${serviceSlug}/`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}) {
  const { serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient serviceSlug={serviceSlug} />;
}
