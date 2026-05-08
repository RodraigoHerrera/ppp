export type Tone = "olive" | "gold" | "orange" | "blue";
export type EyebrowTone = "olive" | "gold";

export type SpeciesCategoryId = "mammals" | "birds" | "reptiles";
export type SpeciesFilterId = "all" | SpeciesCategoryId;

export type IconName =
  | "activity"
  | "bird"
  | "camera"
  | "chevronDown"
  | "droplets"
  | "flame"
  | "info"
  | "landmark"
  | "layoutGrid"
  | "list"
  | "map"
  | "mapPin"
  | "pawPrint"
  | "quote"
  | "repeat"
  | "snail"
  | "thermometerSun"
  | "trees";

export type PercentageWidth = `${number}%`;

export interface PredioPartner {
  src: string;
  alt: string;
}

export interface PredioNavLink {
  href: `#${string}`;
  label: string;
}

export interface PredioHeroTitle {
  leading: string;
  highlight: string;
  trailing: string;
}

export interface PredioMetric {
  icon: IconName;
  value: string;
  label: string;
  iconClassName?: string;
}

export interface PredioHero {
  locationLabel: string;
  backgroundImage: string;
  backgroundAlt: string;
  title: PredioHeroTitle;
  description: string;
  metrics: PredioMetric[];
  cta: {
    href: `#${string}`;
    label: string;
  };
}

export interface PredioImpactCard {
  title: string;
  description: string;
  icon: IconName;
  tone: Tone;
}

export interface PredioHealthMetric {
  label: string;
  value: string;
  width: PercentageWidth;
  description: string;
}

export interface PredioImpact {
  eyebrow: string;
  title: {
    leading: string;
    highlight: string;
  };
  description: string;
  primaryMetric: {
    value: string;
    unit: string;
    description: string;
    badge: string;
    icon: IconName;
  };
  cards: PredioImpactCard[];
  health: {
    title: string;
    icon: IconName;
    metrics: PredioHealthMetric[];
  };
  quote: string;
}

export interface PredioSpeciesCategory {
  id: SpeciesCategoryId;
  label: string;
  speciesCount: number;
  icon: IconName;
  iconClassName?: string;
}

export interface PredioFeaturedSpecies {
  name: string;
  scientific: string;
  image: string;
  records: number;
  badge: string;
  badgeClassName: string;
  roleDescription: string;
  category: SpeciesCategoryId;
  icon?: IconName;
}

export interface PredioClassification {
  label: string;
  title: string;
  description: string;
  className: string;
}

export interface PredioSpeciesRow {
  name: string;
  count: string;
  barWidth?: PercentageWidth;
  countClassName?: string;
}

export interface PredioSpeciesGroup {
  category: SpeciesCategoryId;
  title: string;
  countLabel: string;
  icon: IconName;
  iconClassName?: string;
  rows: PredioSpeciesRow[];
  note?: string;
}

export interface PredioBiodiversity {
  eyebrow: string;
  title: {
    leading: string;
    highlight: string;
  };
  description: string;
  totalSpecies: number;
  categories: PredioSpeciesCategory[];
  featuredSpecies: PredioFeaturedSpecies[];
  classifications: PredioClassification[];
  speciesGroups: PredioSpeciesGroup[];
  whyItMatters: {
    title: string;
    description: string;
  };
}

export interface PredioLocationStat {
  icon: IconName;
  label: string;
  value: string;
}

export interface PredioLocation {
  eyebrow: string;
  title: string;
  description: string;
  mapImage: string;
  mapAlt: string;
  coordinates: string;
  elevation: string;
  stats: PredioLocationStat[];
}

export interface PredioMethodItem {
  title: string;
  description: string;
  icon: IconName;
  tone: Tone;
  borderClassName: string;
}

export interface PredioMethod {
  eyebrow: string;
  title: {
    leading: string;
    highlight: string;
  };
  description: string;
  items: PredioMethodItem[];
}

export interface PredioGalleryItem {
  title: string;
  description: string;
  image: string;
}

export interface PredioGalleryRow {
  title: string;
  accentClassName: string;
  items: PredioGalleryItem[];
}

export interface PredioGallery {
  eyebrow: string;
  title: string;
  description: string;
  rows: PredioGalleryRow[];
}

export interface PredioFooterMetric {
  value: string;
  label: string;
}

export interface PredioFooter {
  title: string;
  description: string;
  metrics: PredioFooterMetric[];
  copyright: string;
}

export interface PredioData {
  slug: string;
  name: string;
  brandSubtitle: string;
  assetPath: string;
  logo: {
    src: string;
    alt: string;
  };
  navLinks: PredioNavLink[];
  partners: PredioPartner[];
  hero: PredioHero;
  impact: PredioImpact;
  biodiversity: PredioBiodiversity;
  location: PredioLocation;
  method: PredioMethod;
  gallery: PredioGallery;
  footer: PredioFooter;
}
