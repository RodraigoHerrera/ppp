import { notFound } from "next/navigation";

import { PredioTemplate } from "@/components/predios/PredioTemplate";
import { prediosBySlug } from "@/data/predios/";


type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(prediosBySlug).map((slug) => ({ slug }));
}

export default async function PredioPage({ params }: PageProps) {
  const { slug } = await params;
  const predio = prediosBySlug[slug];

  if (!predio) {
    notFound();
  }

  return <PredioTemplate predio={predio} />;
}