"use client";

import { useState, type KeyboardEvent, type ReactNode } from "react";
import { Inter } from "next/font/google";
import {
  Activity,
  Bird,
  Camera,
  ChevronDown,
  Droplets,
  Flame,
  Info,
  Landmark,
  LayoutGrid,
  List,
  Map,
  MapPin,
  PawPrint,
  Quote,
  Repeat,
  Snail,
  ThermometerSun,
  Trees,
  type LucideIcon,
} from "lucide-react";

import type {
  EyebrowTone,
  IconName,
  PredioBiodiversity,
  PredioData,
  PredioFeaturedSpecies,
  PredioGalleryItem,
  PredioGalleryRow,
  PredioHealthMetric,
  PredioImpact,
  PredioLocation,
  PredioMethod,
  PredioPartner,
  PredioSpeciesCategory,
  PredioSpeciesGroup,
  PredioSpeciesRow,
  SpeciesFilterId,
  Tone,
} from "@/types/predio";

const inter = Inter({ subsets: ["latin"] });

const ICONS: Record<IconName, LucideIcon> = {
  activity: Activity,
  bird: Bird,
  camera: Camera,
  chevronDown: ChevronDown,
  droplets: Droplets,
  flame: Flame,
  info: Info,
  landmark: Landmark,
  layoutGrid: LayoutGrid,
  list: List,
  map: Map,
  mapPin: MapPin,
  pawPrint: PawPrint,
  quote: Quote,
  repeat: Repeat,
  snail: Snail,
  thermometerSun: ThermometerSun,
  trees: Trees,
};

interface PredioTemplateProps {
  predio: PredioData;
  className?: string;
}

function buildAssetUrl(assetPath: string, fileName: string) {
  if (fileName.startsWith("/") || fileName.startsWith("http")) return fileName;
  return `${assetPath}/${fileName}`;
}

function DynamicIcon({
  name,
  size = 18,
  className,
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  const Icon = ICONS[name];
  return <Icon size={size} className={className} />;
}

function GlobalStyles() {
  return (
    <style>{`
      html { scroll-behavior: smooth; }

      .glass-nav {
        background: rgba(27, 31, 20, 0.60);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border-bottom: 1px solid rgba(255,255,255,.05);
      }

      .hero-overlay {
        background: linear-gradient(
          to top,
          rgba(27,31,20,.97) 0%,
          rgba(27,31,20,.65) 30%,
          rgba(27,31,20,.15) 60%,
          rgba(27,31,20,.35) 100%
        );
      }

      .text-olive-gradient {
        background: linear-gradient(135deg, #7d9159, #5B6B3C, #4A5630);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .text-gold-gradient {
        background: linear-gradient(135deg, #F5E47A, #E5C44D, #D4B03A);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .grain::after {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
        opacity: .025;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        background-size: 128px 128px;
      }

      .scroll-indicator { animation: bounceSoft 2s infinite; }

      @keyframes bounceSoft {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-8px); }
        60% { transform: translateY(-4px); }
      }

            .health-info-button {
        position: relative;
        isolation: isolate;
      }

      .health-info-button::after {
        content: "";
        position: absolute;
        inset: -4px;
        border-radius: 999px;
        border: 1px solid rgba(91, 107, 60, 0.45);
        animation: healthInfoPulse 1.6s ease-out infinite;
      }

      .health-info-icon {
        animation: healthInfoBlink 1.35s ease-in-out infinite;
      }

      .health-info-button:hover::after,
      .health-info-button[aria-expanded="true"]::after,
      .health-info-button:hover .health-info-icon,
      .health-info-button[aria-expanded="true"] .health-info-icon {
        animation: none;
      }

      @keyframes healthInfoBlink {
        0%, 100% {
          opacity: 1;
          transform: scale(1);
        }
        45% {
          opacity: 0.35;
          transform: scale(0.88);
        }
        70% {
          opacity: 1;
          transform: scale(1.12);
        }
      }

      @keyframes healthInfoPulse {
        0% {
          opacity: 0.75;
          transform: scale(0.8);
        }
        70%, 100% {
          opacity: 0;
          transform: scale(1.9);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .health-info-button::after,
        .health-info-icon {
          animation: none;
        }
      }

      .gallery-row {
        display: flex;
        gap: .875rem;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        padding-bottom: .5rem;
        scrollbar-width: none;
        -ms-overflow-style: none;
      }

      .gallery-row::-webkit-scrollbar { display: none; }

      .gallery-item {
        scroll-snap-align: center;
        position: relative;
        flex-shrink: 0;
        width: 72%;
        max-width: 280px;
        aspect-ratio: 3 / 4;
        overflow: hidden;
        border-radius: 1rem;
        border: 1px solid #E5EADF;
        background: #F3EDDD;
        box-shadow: 0 4px 12px -2px rgba(0,0,0,.08);
      }

      @media (min-width: 1024px) {
        .gallery-item { width: 28%; max-width: none; }
      }

      ::-webkit-scrollbar { width: 3px; height: 3px; }
      ::-webkit-scrollbar-thumb { background: #cbd5b8; border-radius: 999px; }

    `}</style>
  );
}

function IconBox({
  children,
  tone = "olive",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const toneClass: Record<Tone, string> = {
    olive: "bg-[#E5EADF] text-[#5B6B3C]",
    gold: "bg-[#FDF8D8] text-[#B8962A]",
    orange: "bg-orange-50 text-orange-500",
    blue: "bg-blue-50 text-blue-500",
  };

  return (
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${toneClass[tone]} ${className}`}
    >
      {children}
    </div>
  );
}

function SectionEyebrow({
  tone = "olive",
  children,
}: {
  tone?: EyebrowTone;
  children: ReactNode;
}) {
  const isGold = tone === "gold";

  return (
    <div className="mb-4 inline-flex items-center gap-1.5">
      <span className={`h-px w-8 ${isGold ? "bg-[#D4B03A]" : "bg-[#5B6B3C]"}`} />
      <span
        className={`text-[11px] font-bold uppercase tracking-[0.12em] ${
          isGold ? "text-[#B8962A]" : "text-[#4A5630]"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

function StatBar({ width }: { width: string }) {
  return (
    <div className="h-1.5 overflow-hidden rounded-full bg-[#E5EADF]">
      <div
        className="h-full rounded-full bg-gradient-to-r from-[#7d9159] to-[#5B6B3C]"
        style={{ width }}
      />
    </div>
  );
}

function PartnerLogo({
  partner,
  assetUrl,
  nav = false,
}: {
  partner: PredioPartner;
  assetUrl: (fileName: string) => string;
  nav?: boolean;
}) {
  return (
    <div
      className={`${
        nav ? "rounded-md bg-white/95 p-1" : "rounded-lg bg-white/90 p-1.5"
      } shadow-sm transition-transform duration-200 hover:scale-105`}
    >
      <img
        src={assetUrl(partner.src)}
        alt={partner.alt}
        className={`${nav ? "h-4 md:h-5" : "h-6 md:h-8 lg:h-12"} object-contain`}
      />
    </div>
  );
}

function Navbar({
  predio,
  assetUrl,
}: {
  predio: PredioData;
  assetUrl: (fileName: string) => string;
}) {
  return (
    <nav className="glass-nav fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between px-4 transition-all duration-500 md:px-6 lg:h-20 lg:px-12">
      <a
        href="#"
        className="relative z-10 flex items-center gap-3 transition hover:brightness-110"
        aria-label={`${predio.name} - Inicio`}
      >
        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-gray-100/50 bg-white shadow-sm md:h-11 md:w-11 lg:h-14 lg:w-14">
          <img
            src={assetUrl(predio.logo.src)}
            alt={predio.logo.alt}
            className="h-full w-full object-contain p-0.5"
          />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-sm font-extrabold leading-tight tracking-tight text-white md:text-base lg:text-xl">
            {predio.name}
          </span>
          <span className="mt-0.5 text-[9px] font-bold uppercase leading-tight tracking-wider text-[#E5C44D] md:text-[10px] lg:text-xs">
            {predio.brandSubtitle}
          </span>
        </div>
      </a>

      <div className="relative z-10 flex items-center gap-2 md:gap-3 lg:gap-4">
        {predio.navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hidden rounded-lg px-2 py-1.5 text-xs font-semibold text-white/80 transition-colors hover:bg-white/5 hover:text-white md:block lg:px-4 lg:text-sm"
          >
            {link.label}
          </a>
        ))}

        <div className="ml-1 flex items-center gap-1.5 border-l border-white/20 pl-2 md:ml-3 md:gap-2 md:pl-4">
          {predio.partners.map((partner) => (
            <PartnerLogo key={partner.src} partner={partner} assetUrl={assetUrl} nav />
          ))}
        </div>
      </div>
    </nav>
  );
}

function HeroSection({
  predio,
  assetUrl,
}: {
  predio: PredioData;
  assetUrl: (fileName: string) => string;
}) {
  const { hero } = predio;

  return (
    <section
      className="grain relative flex min-h-[92dvh] flex-col justify-end overflow-hidden bg-[#1A1A1A] pb-14 pt-24"
      aria-label="Portada"
    >
      <div className="absolute inset-0">
        <img
          src={assetUrl(hero.backgroundImage)}
          alt={hero.backgroundAlt}
          className="h-full w-full scale-105 object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto mt-20 w-full max-w-lg px-5 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] lg:mt-32 lg:max-w-6xl">
        <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3.5 py-2 backdrop-blur-sm">
          <DynamicIcon name="mapPin" size={12} className="text-[#F5E47A]" />
          <span className="text-xs font-medium text-white/90">{hero.locationLabel}</span>
        </div>

        <h1 className="mb-4 text-[2.5rem] font-extrabold leading-[1.08] tracking-[-0.03em] md:text-5xl lg:mb-8 lg:text-7xl">
          {hero.title.leading}
          <br />
          <span className="text-[#F5E47A]">{hero.title.highlight}</span>{" "}
          {hero.title.trailing}
        </h1>

        <p className="mb-7 max-w-md text-base font-light leading-relaxed text-white/65 md:text-lg lg:mb-10 lg:max-w-2xl lg:text-xl">
          {hero.description}
        </p>

        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-3">
            {hero.metrics.map((metric) => (
              <HeroMetric key={metric.label} metric={metric} />
            ))}
          </div>

          <a
            href="#ubicacion-metodo"
            className="group inline-flex w-fit items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-[#F5E47A]/60 hover:bg-[#F5E47A] hover:text-[#1A1A1A] hover:shadow-xl"
          >
            Ver ubicación y método
            <DynamicIcon
              name="mapPin"
              size={15}
              className="transition group-hover:scale-110"
            />
          </a>
        </div>

        <a href={hero.cta.href} className="scroll-indicator mx-auto flex w-fit flex-col items-center gap-1.5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/35">
            {hero.cta.label}
          </span>
          <DynamicIcon name="chevronDown" size={18} className="text-white/35" />
        </a>
      </div>
    </section>
  );
}

function HeroMetric({ metric }: { metric: PredioData["hero"]["metrics"][number] }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-3.5 backdrop-blur-sm">
      <DynamicIcon name={metric.icon} size={24} className={metric.iconClassName} />
      <div>
        <div className="text-2xl font-extrabold tracking-[-0.03em]">{metric.value}</div>
        <div className="text-[10px] font-semibold uppercase tracking-widest text-white/45">
          {metric.label}
        </div>
      </div>
    </div>
  );
}

function ImpactSection({ impact }: { impact: PredioImpact }) {
  return (
    <section id="impacto" className="relative bg-[#F9F5EC] px-5 py-20" aria-labelledby="impacto-title">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[250px] w-[500px] -translate-x-1/2 rounded-full bg-[#5B6B3C]/[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-lg lg:max-w-6xl">
        <div className="mb-10">
          <SectionEyebrow>{impact.eyebrow}</SectionEyebrow>
          <h2
            id="impacto-title"
            className="mb-3 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[#1A1A1A] md:text-3xl"
          >
            {impact.title.leading} <span className="text-olive-gradient">{impact.title.highlight}</span>
          </h2>
          <p className="text-sm leading-relaxed text-[#777777]">{impact.description}</p>
        </div>

<article className="mb-6 lg:mb-10 overflow-hidden rounded-2xl border border-[#E5EADF] bg-white shadow-sm transition hover:border-[#5B6B3C]/20 hover:shadow-[0_12px_32px_-8px_rgba(91,107,60,0.1)]">
  <div className="grid grid-cols-3 divide-x divide-[#E5EADF]">
    
    {/* Columna 1: Métrica Principal */}
    <div className="flex flex-col justify-start p-3 sm:p-5">
      <div className="relative z-10 mb-2 flex items-start justify-between">
        <IconBox className="h-7 w-7 shrink-0 !rounded-lg sm:h-10 sm:w-10">
          <DynamicIcon name={impact.primaryMetric.icon} size={16} />
        </IconBox>
        <span className="hidden rounded-full border border-[#F5E47A]/50 bg-[#FDF8D8] px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-[#B8962A] shadow-sm md:inline-flex">
          {impact.primaryMetric.badge}
        </span>
      </div>
      <div className="mb-1 break-words text-lg font-extrabold leading-none tracking-[-0.02em] text-[#5B6B3C] sm:text-3xl">
        {impact.primaryMetric.value}{" "}
        <span className="text-[10px] font-normal text-[#999999] sm:text-sm">{impact.primaryMetric.unit}</span>
      </div>
      <p className="text-[9px] font-medium leading-tight text-[#777777] sm:text-xs">
        {impact.primaryMetric.description}
      </p>
    </div>

    {/* Columnas 2 y 3: Tarjetas Secundarias */}
    {impact.cards.map((card) => (
      <div
        key={card.title}
        className="flex flex-col justify-start p-3 transition hover:bg-[#F9F5EC] sm:p-5"
      >
        <IconBox tone={card.tone} className="mb-2 h-7 w-7 shrink-0 !rounded-lg sm:h-10 sm:w-10">
          <DynamicIcon name={card.icon} size={16} />
        </IconBox>
        <div className="mb-1 break-words text-sm font-extrabold leading-tight tracking-[-0.02em] text-[#2D2D2D] sm:text-xl">
          {card.title}
        </div>
        <p className="text-[9px] leading-tight text-[#777777] sm:text-[11px]">
          {card.description}
        </p>
      </div>
    ))}

  </div>
</article>
        <article className="mb-6 rounded-2xl border border-[#E5EADF] bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <DynamicIcon name={impact.health.icon} size={16} className="text-[#5B6B3C]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D2D2D]">
              {impact.health.title}
            </span>
          </div>
          <div className="space-y-3">
            {impact.health.metrics.map((metric) => (
              <HealthMetric key={metric.label} metric={metric} />
            ))}
          </div>
        </article>

        <div className="flex gap-3 rounded-2xl border border-[#E5EADF] bg-gradient-to-br from-[#FDFBF5] to-[#F9F5EC] p-5">
          <DynamicIcon name="quote" size={20} className="mt-0.5 shrink-0 text-[#a4b486]" />
          <p className="text-sm font-medium italic leading-relaxed text-[#555555]">“{impact.quote}”</p>
        </div>
      </div>
    </section>
  );
}

function HealthMetric({ metric }: { metric: PredioHealthMetric }) {
  const [isHovering, setIsHovering] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const isOpen = isHovering || isPinned;

  const closePopup = () => {
    setIsPinned(false);
    setIsHovering(false);
  };

  return (
    <div className="relative">
      <div className="mb-1 flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] font-medium text-[#555555]">{metric.label}</span>

          <div
            className="relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
<button
  type="button"
  onClick={() => setIsPinned((current) => !current)}
  aria-expanded={isOpen}
  aria-label={`Ver explicación de ${metric.label}`}
  className="health-info-button flex h-5 w-5 items-center justify-center rounded-full border border-[#E5EADF] bg-[#FDFBF5] text-[#5B6B3C] transition hover:bg-[#E5EADF]"
>
  <DynamicIcon name="info" size={12} className="health-info-icon" />
</button>

            <div
              className={`absolute left-1/2 top-7 z-20 w-64 -translate-x-1/2 rounded-2xl border border-[#E5EADF] bg-white p-3 text-[11px] leading-relaxed text-[#666666] shadow-xl transition duration-200 sm:left-0 sm:translate-x-0 ${
                isOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-1 opacity-0"
              }`}
            >
              <div className="mb-1 flex items-center justify-between gap-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#5B6B3C]">
                  {metric.label}
                </span>
                {isPinned && (
                  <button
                    type="button"
                    onClick={closePopup}
                    className="text-[10px] font-bold text-[#999999] transition hover:text-[#5B6B3C]"
                  >
                    Cerrar
                  </button>
                )}
              </div>
              {metric.description}
            </div>
          </div>
        </div>

        <span className="text-[11px] font-bold text-[#5B6B3C]">{metric.value}</span>
      </div>
      <StatBar width={metric.width} />
    </div>
  );
}

function BiodiversitySection({
  biodiversity,
  assetUrl,
}: {
  biodiversity: PredioBiodiversity;
  assetUrl: (fileName: string) => string;
}) {
  const [activeSpeciesFilter, setActiveSpeciesFilter] = useState<SpeciesFilterId>("all");

  const filteredFeaturedSpecies =
    activeSpeciesFilter === "all"
      ? biodiversity.featuredSpecies
      : biodiversity.featuredSpecies.filter((species) => species.category === activeSpeciesFilter);

  const activeFilterLabel =
    activeSpeciesFilter === "all"
      ? "Todas"
      : biodiversity.categories.find((category) => category.id === activeSpeciesFilter)?.label ?? activeSpeciesFilter;

  return (
    <section
      id="biodiversidad"
      className="relative border-y border-[#E5EADF] bg-[#FDFBF5] px-5 py-20"
      aria-labelledby="bio-title"
    >
      <div className="mx-auto max-w-lg lg:max-w-6xl">
        <div className="mb-8">
          <SectionEyebrow tone="gold">{biodiversity.eyebrow}</SectionEyebrow>
          <h2
            id="bio-title"
            className="mb-3 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[#1A1A1A] md:text-3xl"
          >
            {biodiversity.title.leading}{" "}
            <span className="text-gold-gradient">{biodiversity.title.highlight}</span>
          </h2>
          <p className="text-sm leading-relaxed text-[#777777]">{biodiversity.description}</p>
        </div>

        <SpeciesFilters
          activeFilter={activeSpeciesFilter}
          categories={biodiversity.categories}
          totalSpecies={biodiversity.totalSpecies}
          onChange={setActiveSpeciesFilter}
        />

        {filteredFeaturedSpecies.length > 0 ? (
          <div className="-mx-5 mb-5 snap-x snap-mandatory overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max flex-nowrap gap-5">
              {filteredFeaturedSpecies.map((species) => (
                <div
                  key={species.name}
                  className="w-[82vw] min-w-[280px] max-w-[360px] shrink-0 snap-start md:w-[340px] lg:w-[360px]"
                >
                  <FeaturedSpeciesCard species={species} assetUrl={assetUrl} />
                </div>
              ))}
              <div className="w-1 shrink-0" />
            </div>
          </div>
        ) : (
          <EmptyFeaturedSpecies filterLabel={activeFilterLabel} />
        )}

        <ClassificationLegend classifications={biodiversity.classifications} />

        <SpeciesList
          activeFilter={activeSpeciesFilter}
          categories={biodiversity.categories}
          groups={biodiversity.speciesGroups}
        />

        <article className="mt-6 rounded-2xl border border-[#E5EADF] bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <DynamicIcon name="info" size={15} className="text-[#5B6B3C]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D2D2D]">
              {biodiversity.whyItMatters.title}
            </span>
          </div>
          <p className="text-xs leading-relaxed text-[#777777]">
            {biodiversity.whyItMatters.description}
          </p>
        </article>
      </div>
    </section>
  );
}

function SpeciesFilters({
  activeFilter,
  categories,
  totalSpecies,
  onChange,
}: {
  activeFilter: SpeciesFilterId;
  categories: PredioSpeciesCategory[];
  totalSpecies: number;
  onChange: (filter: SpeciesFilterId) => void;
}) {
  const filters = [
    {
      id: "all" as const,
      label: `Todas (${totalSpecies})`,
      icon: "layoutGrid" as const,
    },
    ...categories.map((category) => ({
      id: category.id,
      label: `${category.label} (${category.speciesCount})`,
      icon: category.icon,
    })),
  ];

  return (
    <div className="mb-6 flex gap-2 overflow-x-auto px-1 pb-1">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.id;

        return (
          <button
            key={filter.id}
            type="button"
            onClick={() => onChange(filter.id)}
            aria-pressed={isActive}
            className={`flex items-center gap-1.5 whitespace-nowrap rounded-xl border px-3.5 py-2 text-xs font-bold shadow-sm transition ${
              isActive
                ? "border-[#5B6B3C] bg-[#5B6B3C] text-white"
                : "border-[#E5EADF] bg-white text-[#777777] hover:border-[#5B6B3C]/40 hover:bg-[#F4F6F0] hover:text-[#5B6B3C]"
            }`}
          >
            <DynamicIcon name={filter.icon} size={13} />
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}

function EmptyFeaturedSpecies({ filterLabel }: { filterLabel: string }) {
  return (
    <article className="mb-5 rounded-2xl border border-dashed border-[#D8DEC8] bg-white/70 p-5 text-center">
      <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#F4F6F0] text-[#5B6B3C]">
        <DynamicIcon name="info" size={17} />
      </div>
      <h3 className="text-sm font-extrabold text-[#1A1A1A]">
        No hay especies destacadas para {filterLabel}
      </h3>
      <p className="mt-1 text-xs leading-relaxed text-[#777777]">
        Puedes revisar las especies de esta categoría en la lista completa que aparece debajo.
      </p>
    </article>
  );
}

function FeaturedSpeciesCard({
  species,
  assetUrl,
}: {
  species: PredioFeaturedSpecies;
  assetUrl: (fileName: string) => string;
}) {
  return (
    <article className="group/card flex h-full flex-col overflow-hidden rounded-2xl border border-[#E5EADF] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#a4b486] hover:shadow-xl">
      <div className="relative h-48 w-full overflow-hidden bg-[#F3EDDD]">
        <AnimalInfoTrigger species={species}>
          <img
            src={assetUrl(species.image)}
            alt={species.name}
            className="h-full w-full object-cover transition duration-700 group-hover/card:scale-105"
          />
        </AnimalInfoTrigger>

        <div className="absolute right-3 top-3">
          <span
            className={`flex items-center gap-1 rounded-full border px-3 py-1 text-[9px] font-bold uppercase tracking-wide shadow-md ${species.badgeClassName}`}
          >
            {species.icon ? (
              <DynamicIcon name={species.icon} size={12} />
            ) : (
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />
            )}
            {species.badge}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col bg-white p-5">
        <h3 className="mb-1 text-xl font-extrabold leading-tight text-[#1A1A1A] transition-colors group-hover/card:text-[#5B6B3C]">
          {species.name}
        </h3>

        <p className="mb-4 text-sm italic text-[#999999]">{species.scientific}</p>
        <div className="mt-auto flex items-center justify-between border-t border-[#F3EDDD] pt-4">
          <div className="flex items-center gap-2 text-[#777777]">
            <DynamicIcon name="camera" size={16} className="text-[#7d9159]" />
            <span className="text-xs font-semibold">
              <span className="font-bold text-[#5B6B3C]">{species.records}</span> registros
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

function AnimalInfoTrigger({
  species,
  children,
}: {
  species: PredioFeaturedSpecies;
  children: ReactNode;
}) {
  const [isHovering, setIsHovering] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const isOpen = isHovering || isPinned;

  const closePopup = () => {
    setIsPinned(false);
    setIsHovering(false);
  };

  const togglePinned = () => setIsPinned((current) => !current);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      togglePinned();
    }

    if (event.key === "Escape") {
      closePopup();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      aria-label={`Ver rol ecológico de ${species.name}`}
      className="relative block h-full w-full cursor-pointer outline-none"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={togglePinned}
      onKeyDown={handleKeyDown}
    >
      {children}

      <div
        onClick={(event) => event.stopPropagation()}
        className={`absolute left-4 right-4 top-4 z-30 rounded-2xl border border-[#E5EADF] bg-white/95 p-4 text-left shadow-2xl backdrop-blur-md transition duration-200 ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        <div className="mb-1 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#5B6B3C]">
            <DynamicIcon name="pawPrint" size={12} />
            Rol ecológico
          </div>
          {isPinned && (
            <button
              type="button"
              onClick={closePopup}
              className="text-[10px] font-bold text-[#999999] transition hover:text-[#5B6B3C]"
            >
              Cerrar
            </button>
          )}
        </div>
        <h4 className="mb-1 text-sm font-extrabold text-[#1A1A1A]">{species.name}</h4>
        <p className="text-[11px] leading-relaxed text-[#666666]">{species.roleDescription}</p>
      </div>
    </div>
  );
}

function ClassificationLegend({
  classifications,
}: {
  classifications: PredioBiodiversity["classifications"];
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="mb-8 overflow-hidden rounded-2xl border border-[#E5EADF] bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        className="flex w-full items-center justify-between bg-white p-5 text-left transition hover:bg-[#F4F6F0]"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-2">
          <DynamicIcon name="info" size={15} className="text-[#5B6B3C]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#2D2D2D]">
            Significado de las clasificaciones
          </span>
        </div>
        <DynamicIcon 
          name="chevronDown" 
          size={16} 
          className={`text-[#999999] transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} 
        />
      </button>

      {isExpanded && (
        <div className="grid gap-3 px-5 pb-5 md:grid-cols-3">
          {classifications.map((item) => (
            <div key={item.label} className="rounded-2xl border border-[#E5EADF] bg-[#FDFBF5] p-3">
              <span
                className={`mb-2 inline-flex rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide ${item.className}`}
              >
                {item.label}
              </span>
              <h4 className="mb-1 text-xs font-extrabold text-[#1A1A1A]">{item.title}</h4>
              <p className="text-[11px] leading-relaxed text-[#777777]">{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

function SpeciesList({
  activeFilter,
  categories,
  groups,
}: {
  activeFilter: SpeciesFilterId;
  categories: PredioSpeciesCategory[];
  groups: PredioSpeciesGroup[];
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const activeCategory = categories.find((category) => category.id === activeFilter);
  const visibleGroups =
    activeFilter === "all" ? groups : groups.filter((group) => group.category === activeFilter);

  return (
    <article className="overflow-hidden rounded-2xl border border-[#E5EADF] bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        className="flex w-full items-center justify-between p-4 text-left transition hover:bg-[#F4F6F0]"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-2">
          <DynamicIcon name="list" size={15} className="text-[#5B6B3C]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#2D2D2D]">
            Lista completa de especies
            {activeFilter !== "all" && activeCategory && (
              <span className="ml-1 text-[#5B6B3C]">· {activeCategory.label}</span>
            )}
          </span>
        </div>
        <DynamicIcon 
          name="chevronDown" 
          size={16} 
          className={`text-[#999999] transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} 
        />
      </button>

      {isExpanded && (
        <div className="space-y-4 px-4 pb-4">
          {visibleGroups.map((group) => (
            <SpeciesGroup key={group.category} group={group} />
          ))}
        </div>
      )}
    </article>
  );
}

function SpeciesGroup({ group }: { group: PredioSpeciesGroup }) {
  return (
    <div>
      <SpeciesGroupHeader
        icon={<DynamicIcon name={group.icon} size={13} className={group.iconClassName} />}
        title={group.title}
        count={group.countLabel}
      />
      <div className="space-y-1">
        {group.rows.map((row) => (
          <SpeciesRow key={row.name} row={row} />
        ))}
        {group.note && (
          <div className="rounded-lg px-3 py-2 text-[11px] leading-relaxed text-[#777777] transition hover:bg-[#F4F6F0]">
            {group.note}
          </div>
        )}
      </div>
    </div>
  );
}

function SpeciesGroupHeader({
  icon,
  title,
  count,
}: {
  icon: ReactNode;
  title: string;
  count: string;
}) {
  return (
    <div className="mb-2.5 flex items-center gap-2">
      {icon}
      <span className="text-[11px] font-bold uppercase tracking-wider text-[#3F3F3F]">
        {title}
      </span>
      <span className="text-[10px] font-medium text-[#B5B5B5]">{count}</span>
    </div>
  );
}

function SpeciesRow({ row }: { row: PredioSpeciesRow }) {
  return (
    <div className="flex items-center justify-between rounded-lg px-3 py-2 transition hover:bg-[#F4F6F0]">
      <span className="text-xs font-medium text-[#2D2D2D]">{row.name}</span>
      <div className="flex items-center gap-2">
        {row.barWidth && (
          <div className="w-12">
            <StatBar width={row.barWidth} />
          </div>
        )}
        <span className={`text-right text-[10px] font-bold ${row.countClassName ?? "text-[#777777]"}`}>
          {row.count}
        </span>
      </div>
    </div>
  );
}

function LocationAndMethodSection({
  location,
  method,
  assetUrl,
}: {
  location: PredioLocation;
  method: PredioMethod;
  assetUrl: (fileName: string) => string;
}) {
  return (
    <section
      id="ubicacion-metodo"
      className="bg-[#F9F5EC] px-5 py-20 scroll-mt-24"
      aria-labelledby="ubicacion-title"
    >
      <div className="mx-auto max-w-lg lg:max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <LocationColumn location={location} assetUrl={assetUrl} />
          <MethodColumn method={method} />
        </div>
      </div>
    </section>
  );
}

function LocationColumn({
  location,
  assetUrl,
}: {
  location: PredioLocation;
  assetUrl: (fileName: string) => string;
}) {
  return (
    <div>
      <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.12em] text-[#4A5630]">
        {location.eyebrow}
      </span>
      <h2
        id="ubicacion-title"
        className="mb-5 text-2xl font-extrabold tracking-[-0.02em] text-[#1A1A1A] md:text-3xl"
      >
        {location.title}
      </h2>
      <p className="text-sm leading-relaxed text-[#777777]">{location.description}</p>

      <div className="relative mb-4 overflow-hidden rounded-2xl border border-[#E5EADF] bg-[#FDFBF5] shadow-sm">
        <img src={assetUrl(location.mapImage)} alt={location.mapAlt} className="h-auto w-full object-cover" />
        <div className="absolute bottom-3 left-3 rounded-lg border border-[#E5EADF] bg-white/95 px-3 py-2 shadow-sm backdrop-blur-sm">
          <div className="text-[9px] font-bold uppercase tracking-wider text-[#999999]">Coordenadas</div>
          <div className="font-mono text-[11px] font-medium text-[#2D2D2D]">{location.coordinates}</div>
          <div className="text-[10px] text-[#999999]">{location.elevation}</div>
        </div>
      </div>

      <LocationStat location={location} />
    </div>
  );
}

type PredioLocationWithMaps = PredioLocation & {
  googleMapsUrl?: string;
  googleMapsLabel?: string;
  googleMapsAddress?: string;
};

function LocationStat({ location }: { location: PredioLocationWithMaps }) {
  const statsText = location.stats.map((stat) => stat.value).join(" · ");
  const mapsUrl =
    location.googleMapsUrl ??
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${location.coordinates} ${statsText}`
    )}`;
  const mapsLabel = location.googleMapsLabel ?? "Ver mapa";
  const mapsAddress = location.googleMapsAddress ?? statsText;

  return (
    <a
      href={mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={mapsLabel}
      className="group mt-4 flex items-center gap-4 rounded-2xl border border-[#D8DEC8] bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#D4B03A] hover:shadow-[0_14px_32px_-18px_rgba(91,107,60,0.75)]"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#5B6B3C] text-white transition duration-300 group-hover:bg-[#D4B03A] group-hover:text-[#1A1A1A]">
        <DynamicIcon name="mapPin" size={21} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="mb-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#B8962A]">
          Ubicación del predio
        </div>

        <h3 className="text-sm font-extrabold leading-tight text-[#1A1A1A]">
          Abrir en Google Maps
        </h3>

        <p className="mt-1 truncate text-[11px] leading-relaxed text-[#777777]">
          {mapsAddress}
        </p>

        <div className="mt-2 flex flex-wrap gap-2">
          <span className="rounded-full bg-[#F4F6F0] px-2.5 py-1 text-[10px] font-semibold text-[#5B6B3C]">
            {location.coordinates}
          </span>

          <span className="rounded-full bg-[#F9F5EC] px-2.5 py-1 text-[10px] font-semibold text-[#777777]">
            {location.elevation}
          </span>
        </div>
      </div>

      <div className="hidden rounded-full border border-[#E5EADF] bg-[#FDFBF5] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#5B6B3C] transition duration-300 group-hover:border-[#D4B03A] group-hover:bg-[#D4B03A] group-hover:text-[#1A1A1A] sm:inline-flex">
        {mapsLabel}
      </div>
    </a>
  );
}

function MethodColumn({ method }: { method: PredioMethod }) {
  return (
    <div>
      <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.12em] text-[#4A5630]">
        {method.eyebrow}
      </span>
      <h2 className="mb-3 text-2xl font-extrabold tracking-[-0.02em] text-[#1A1A1A] md:text-3xl">
        {method.title.leading} <span className="text-olive-gradient">{method.title.highlight}</span>
      </h2>
      <p className="mb-5 text-sm leading-relaxed text-[#777777]">{method.description}</p>

      <div className="space-y-3">
        {method.items.map((item) => (
          <div
            key={item.title}
            className={`flex gap-3 rounded-2xl border border-[#E5EADF] ${item.borderClassName} border-l-4 bg-gradient-to-br from-[#FDFBF5] to-[#F9F5EC] p-4 shadow-sm`}
          >
            <IconBox tone={item.tone} className="mt-0.5">
              <DynamicIcon name={item.icon} size={18} />
            </IconBox>
            <div>
              <div className="text-sm font-bold text-[#1A1A1A]">{item.title}</div>
              <p className="mt-1 text-xs leading-relaxed text-[#777777]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GallerySection({
  gallery,
  assetUrl,
}: {
  gallery: PredioData["gallery"];
  assetUrl: (fileName: string) => string;
}) {
  return (
    <section id="galeria" className="relative overflow-hidden bg-white py-20" aria-labelledby="galeria-title">
      <div className="mx-auto mb-8 max-w-lg px-5 lg:max-w-6xl">
        <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.12em] text-[#4A5630]">
          {gallery.eyebrow}
          <h2 id="galeria-title" className="mb-2 text-2xl font-extrabold tracking-[-0.02em] text-[#1A1A1A] md:text-3xl">
          UN RINCÓN DEL MUNDO QUE AHORA ES TUYO
        </h2>
        </span>
      </div>

      {gallery.rows.map((row, index) => (
        <GalleryRow
          key={row.title}
          row={row}
          assetUrl={assetUrl}
          showBottomSpace={index === gallery.rows.length - 1}
        />
      ))}
    </section>
  );
}

function GalleryRow({
  row,
  assetUrl,
  showBottomSpace = false,
}: {
  row: PredioGalleryRow;
  assetUrl: (fileName: string) => string;
  showBottomSpace?: boolean;
}) {
  return (
    <div className="mx-auto max-w-lg pl-5 lg:max-w-6xl">
      <div
        dir="rtl"
        className={`gallery-row mb-3 snap-x snap-mandatory ${showBottomSpace ? "mb-10" : ""}`}
        aria-label={row.title}
      >
        <div className="w-5 shrink-0" />
        {row.items.map((item) => (
          <GalleryCard key={item.image} item={item} assetUrl={assetUrl} />
        ))}
      </div>
    </div>
  );
}

function GalleryCard({
  item,
  assetUrl,
}: {
  item: PredioGalleryItem;
  assetUrl: (fileName: string) => string;
}) {
  return (
    <article className="gallery-item group snap-start" dir="ltr">
      <img
        src={assetUrl(item.image)}
        alt={item.title || "Foto del predio"}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
    </article>
  );
}

function Footer({ footer }: { footer: PredioData["footer"] }) {
  return (
    <footer className="grain relative overflow-hidden bg-[#6a6427] px-5 py-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(91,107,60,0.25),_transparent_42%)]" />
      <div className="relative z-10 mx-auto max-w-lg text-center lg:max-w-4xl">
        <h2 className="mb-2 text-2xl font-extrabold tracking-[-0.02em]">{footer.title}</h2>
        <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-white/40">
          {footer.description}
        </p>

        <div className="mx-auto mb-8 grid max-w-md grid-cols-3 gap-3">
          {footer.metrics.map((metric) => (
            <FooterMetric key={metric.label} value={metric.value} label={metric.label} />
          ))}
        </div>

        <div className="border-t border-white/[0.06] pt-6">
          <p className="text-[9px] font-bold uppercase tracking-[0.15em]">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterMetric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-center">
      <div className="mb-0.5 text-xl font-extrabold tracking-[-0.02em]">{value}</div>
      <div className="text-[10px] font-semibold uppercase tracking-wider text-white/35">{label}</div>
    </div>
  );
}

export function PredioTemplate({ predio, className = "" }: PredioTemplateProps) {
  const assetUrl = (fileName: string) => buildAssetUrl(predio.assetPath, fileName);

  return (
    <main className={`${inter.className} overflow-x-hidden bg-[#F9F5EC] text-[#2D2D2D] antialiased ${className}`}>
      <GlobalStyles />
      <Navbar predio={predio} assetUrl={assetUrl} />
      <HeroSection predio={predio} assetUrl={assetUrl} />
      <ImpactSection impact={predio.impact} />
      <BiodiversitySection biodiversity={predio.biodiversity} assetUrl={assetUrl} />
      <LocationAndMethodSection location={predio.location} method={predio.method} assetUrl={assetUrl} />
      <GallerySection gallery={predio.gallery} assetUrl={assetUrl} />
      <Footer footer={predio.footer} />
    </main>
  );
}