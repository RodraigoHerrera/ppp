"use client";

import { useState, type ReactNode } from "react";
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
} from "lucide-react";

const inter = Inter({ subsets: ["latin"] });
const ASSET_PATH = "/assets/animales";

type Tone = "olive" | "gold" | "orange" | "blue";
type EyebrowTone = "olive" | "gold";
type SpeciesFilterId = "all" | "mammals" | "birds" | "reptiles";
type SpeciesCategory = Exclude<SpeciesFilterId, "all">;

const speciesFilterLabels: Record<SpeciesFilterId, string> = {
  all: "Todas",
  mammals: "Mamíferos",
  birds: "Aves",
  reptiles: "Reptiles",
};

type FeaturedSpecies = {
  name: string;
  scientific: string;
  image: string;
  records: number;
  badge: string;
  badgeClass: string;
  roleDescription: string;
  category: SpeciesCategory;
  icon?: "flame";
};

type SpeciesStat = {
  name: string;
  count: string;
  width: string;
  colorClass: string;
};

type GalleryItem = {
  title: string;
  description: string;
  image: string;
};

type Partner = {
  src: string;
  alt: string;
};

type ImpactCard = {
  title: string;
  description: string;
  icon: ReactNode;
  tone: Tone;
};

type MethodItem = {
  title: string;
  description: string;
  icon: ReactNode;
  tone: Tone;
  borderClass: string;
};

const partners: Partner[] = [
  { src: "logo-fcbc.png", alt: "FCBC" },
  { src: "logo-prometo(fondoblanco).png", alt: "Prometa" },
  { src: "logo-asociacion-suecia.png", alt: "Suecia" },
];

const featuredSpecies: FeaturedSpecies[] = [
  {
    name: "Oso Bandera",
    scientific: "Myrmecophaga tridactyla",
    image: "Oso bandera.jpg",
    records: 3,
    badge: "VU",
    badgeClass: "bg-red-100 text-red-800 border-red-200",
    category: "mammals",
    roleDescription:
      "El oso bandera controla poblaciones de hormigas y termitas, ayudando a mantener el equilibrio del suelo. Su presencia indica que el ecosistema conserva alimento, refugio y tranquilidad suficiente para especies sensibles.",
  },
  {
    name: "Puma",
    scientific: "Puma concolor",
    image: "Puma.jpg",
    records: 2,
    badge: "Depredador Top",
    badgeClass: "bg-[#5B6B3C] text-white border-[#5B6B3C]",
    category: "mammals",
    roleDescription:
      "El puma es un depredador tope: regula naturalmente las poblaciones de herbívoros y animales medianos. Cuando está presente, suele ser señal de que la cadena alimentaria funciona y que el territorio todavía ofrece corredores seguros.",
    icon: "flame",
  },
  {
    name: "Chancho Majano",
    scientific: "Tayassu pecari",
    image: "Chancho majano.jpg",
    records: 23,
    badge: "Sensible",
    badgeClass: "bg-yellow-100/90 text-yellow-800 border-yellow-200",
    category: "mammals",
    roleDescription:
      "El chancho majano remueve el suelo, dispersa semillas y abre caminos dentro del monte. Es una especie muy sensible a la presión humana, por eso encontrarlo refleja que el bosque mantiene alimento, cobertura y rutas de desplazamiento.",
  },
];

const mammals: SpeciesStat[] = [
  { name: "Mara chaqueña", count: "93", width: "100%", colorClass: "text-[#B8962A]" },
  { name: "Chancho majano", count: "23", width: "25%", colorClass: "text-[#B8962A]" },
  { name: "Zorro patas amarillas", count: "14", width: "15%", colorClass: "text-[#5B6B3C]" },
  { name: "Quirquincho bolita", count: "8", width: "9%", colorClass: "text-[#555555]" },
  { name: "Oso bandera", count: "3", width: "4%", colorClass: "text-[#B8962A]" },
];

const birds = [
  { name: "Chuña", count: "35" },
  { name: "Torcaza", count: "16" },
  { name: "Bandurria mora", count: "9" },
];

const reptiles = [
  { name: "Iguana", count: "5" },
  { name: "Lagartija", count: "2" },
  { name: "Coral falsa", count: "1" },
];

const faunaGallery: GalleryItem[] = [
  {
    title: "Zorro patas amarillas",
    description: "Lycalopex gymnocercus · 14 registros",
    image: "Zorro patas amarillas.jpg",
  },
  { title: "Corzuela", description: "Subulo gouazoubira", image: "Corzuela.jpg" },
  { title: "Iguana", description: "Salvator rufescens · 5 registros", image: "Iguana.jpg" },
  {
    title: "Quirquincho bolita",
    description: "Tolypeutes matacus · 8 registros",
    image: "Quirquincho bolita.jpg",
  },
];


const impactCards: ImpactCard[] = [
  {
    title: "0–48°C",
    description: "Clima semiárido extremo",
    icon: <ThermometerSun size={18} />,
    tone: "orange",
  },
  {
    title: "Aguadas",
    description: "Refugios hídricos para fauna",
    icon: <Droplets size={18} />,
    tone: "blue",
  },
];

const methodItems: MethodItem[] = [
  {
    title: "Rotación de potreros",
    description: "Permite la regeneración natural de la vegetación entre ciclos de pastoreo.",
    icon: <Repeat size={18} />,
    tone: "gold",
    borderClass: "border-l-[#E5C44D]",
  },
  {
    title: "Corredores de bosque",
    description: "Franjas de vegetación nativa que conectan hábitats y permiten el desplazamiento de fauna.",
    icon: <Trees size={18} />,
    tone: "olive",
    borderClass: "border-l-[#5B6B3C]",
  },
  {
    title: "Aguadas protegidas",
    description: "Cuerpos de agua permanentes que son puntos críticos para la fauna durante la época seca.",
    icon: <Droplets size={18} />,
    tone: "olive",
    borderClass: "border-l-[#7d9159]",
  },
];

function asset(fileName: string) {
  return `${ASSET_PATH}/${fileName}`;
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

function IconBox({ children, tone = "olive", className = "" }: { children: ReactNode; tone?: Tone; className?: string }) {
  const toneClass: Record<Tone, string> = {
    olive: "bg-[#E5EADF] text-[#5B6B3C]",
    gold: "bg-[#FDF8D8] text-[#B8962A]",
    orange: "bg-orange-50 text-orange-500",
    blue: "bg-blue-50 text-blue-500",
  };

  return (
    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${toneClass[tone]} ${className}`}>
      {children}
    </div>
  );
}

function SectionEyebrow({ tone = "olive", children }: { tone?: EyebrowTone; children: ReactNode }) {
  const isGold = tone === "gold";

  return (
    <div className="mb-4 inline-flex items-center gap-1.5">
      <span className={`h-px w-8 ${isGold ? "bg-[#D4B03A]" : "bg-[#5B6B3C]"}`} />
      <span className={`text-[11px] font-bold uppercase tracking-[0.12em] ${isGold ? "text-[#B8962A]" : "text-[#4A5630]"}`}>
        {children}
      </span>
    </div>
  );
}

function StatBar({ width }: { width: string }) {
  return (
    <div className="h-1.5 overflow-hidden rounded-full bg-[#E5EADF]">
      <div className="h-full rounded-full bg-gradient-to-r from-[#7d9159] to-[#5B6B3C]" style={{ width }} />
    </div>
  );
}

function PartnerLogo({ src, alt, nav = false }: Partner & { nav?: boolean }) {
  return (
    <div className={`${nav ? "rounded-md bg-white/95 p-1" : "rounded-lg bg-white/90 p-1.5"} shadow-sm transition-transform duration-200 hover:scale-105`}>
      <img src={asset(src)} alt={alt} className={`${nav ? "h-4 md:h-5" : "h-6 md:h-8 lg:h-12"} object-contain`} />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="glass-nav fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between px-4 transition-all duration-500 md:px-6 lg:h-20 lg:px-12">
      <a href="#" className="relative z-10 flex items-center gap-3 transition hover:brightness-110" aria-label="Los Corrales - Inicio">
        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-gray-100/50 bg-white shadow-sm md:h-11 md:w-11 lg:h-14 lg:w-14">
          <img src={asset("logo-PPP(principal).png")} alt="Logo PPP" className="h-full w-full object-contain p-0.5" />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-sm font-extrabold leading-tight tracking-tight text-white md:text-base lg:text-xl">Los Corrales</span>
          <span className="mt-0.5 text-[9px] font-bold uppercase leading-tight tracking-wider text-[#E5C44D] md:text-[10px] lg:text-xs">
            Origen Verificado
          </span>
        </div>
      </a>

      <div className="relative z-10 flex items-center gap-2 md:gap-3 lg:gap-4">
        <a href="#impacto" className="hidden rounded-lg px-2 py-1.5 text-xs font-semibold text-white/80 transition-colors hover:bg-white/5 hover:text-white md:block lg:px-4 lg:text-sm">
          Impacto
        </a>
        <a href="#biodiversidad" className="hidden rounded-lg px-2 py-1.5 text-xs font-semibold text-white/80 transition-colors hover:bg-white/5 hover:text-white md:block lg:px-4 lg:text-sm">
          Fauna
        </a>
        <a href="#galeria" className="hidden rounded-lg px-2 py-1.5 text-xs font-semibold text-white/80 transition-colors hover:bg-white/5 hover:text-white md:block lg:px-4 lg:text-sm">
          Galería
        </a>

        <div className="ml-1 flex items-center gap-1.5 border-l border-white/20 pl-2 md:ml-3 md:gap-2 md:pl-4">
          {partners.map((partner) => (
            <PartnerLogo key={partner.src} nav {...partner} />
          ))}
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="grain relative flex min-h-[92dvh] flex-col justify-end overflow-hidden bg-[#1A1A1A] pb-14 pt-24" aria-label="Portada">
      <div className="absolute inset-0">
        <img src={asset("puma_chaco_bg.png")} alt="Puma en el hábitat del Chaco boliviano" className="h-full w-full scale-105 object-cover" />
        <div className="hero-overlay absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto mt-20 w-full max-w-lg px-5 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] lg:mt-32 lg:max-w-6xl">
        <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3.5 py-2 backdrop-blur-sm">
          <MapPin size={12} className="text-[#F5E47A]" />
          <span className="text-xs font-medium text-white/90">Cañada Bolívar, Villa Montes</span>
        </div>

        <h1 className="mb-4 text-[2.5rem] font-extrabold leading-[1.08] tracking-[-0.03em] md:text-5xl lg:mb-8 lg:text-7xl">
          TU HISTORIA Y LA DEL<br />
          <span className="text-[#F5E47A]">BOSQUE</span> HOY SE ESCRIBEN JUNTAS
        </h1>

        <p className="mb-7 max-w-md text-base font-light leading-relaxed text-white/65 md:text-lg lg:mb-10 lg:max-w-2xl lg:text-xl">
          Tus manos sostienen el legado del predio <strong className="font-semibold text-white/90">Los Corrales.</strong> <br />
          Este producto nació de un trabajo en armonía con la naturaleza. Al elegirlo, contribuyes a que el planeta siga respirando.
        </p>

        <div className="mb-10 flex flex-wrap gap-3">
          <HeroMetric icon={<Trees size={24} className="text-[#a4b486]" />} value="2.818" label="Hectáreas" />
          <HeroMetric icon={<PawPrint size={24} className="text-[#E5C44D]" />} value="32" label="Especies" />
        </div>

        <a href="#impacto" className="scroll-indicator mx-auto flex w-fit flex-col items-center gap-1.5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/35">Descubre tu impacto</span>
          <ChevronDown size={18} className="text-white/35" />
        </a>
      </div>
    </section>
  );
}

function HeroMetric({ icon, value, label }: { icon: ReactNode; value: string; label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-3.5 backdrop-blur-sm">
      {icon}
      <div>
        <div className="text-2xl font-extrabold tracking-[-0.03em]">{value}</div>
        <div className="text-[10px] font-semibold uppercase tracking-widest text-white/45">{label}</div>
      </div>
    </div>
  );
}

function ImpactSection() {
  return (
    <section id="impacto" className="relative bg-[#F9F5EC] px-5 py-20" aria-labelledby="impacto-title">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[250px] w-[500px] -translate-x-1/2 rounded-full bg-[#5B6B3C]/[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-lg lg:max-w-6xl">
        <div className="mb-10">
          <SectionEyebrow>Impacto Ambiental</SectionEyebrow>
          <h2 id="impacto-title" className="mb-3 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[#1A1A1A] md:text-3xl">
            NUESTRA HERENCIA <span className="text-olive-gradient">VIVA</span>
          </h2>
          <p className="text-sm leading-relaxed text-[#777777]">
            Conservamos este bosque para seguir produciendo y el agua nunca deje de correr.
          </p>
        </div>

        <div className="mb-6 grid grid-cols-2 gap-3 lg:mb-10 lg:grid-cols-4 lg:gap-6">
          <article className="col-span-2 overflow-hidden rounded-2xl border border-[#E5EADF] bg-white p-5 shadow-sm transition hover:border-[#5B6B3C]/20 hover:shadow-[0_12px_32px_-8px_rgba(91,107,60,0.1)] lg:col-span-2">
            <div className="relative z-10 mb-3 flex items-start justify-between">
              <IconBox>
                <Map size={20} />
              </IconBox>
              <span className="rounded-full border border-[#F5E47A]/50 bg-[#FDF8D8] px-2.5 py-1 text-[10px] font-semibold text-[#B8962A] shadow-sm">
                Verificado PPP
              </span>
            </div>
            <div className="mb-1 text-4xl font-extrabold leading-none tracking-[-0.02em] text-[#5B6B3C]">
              2.818 <span className="text-base font-normal text-[#999999]">ha</span>
            </div>
            <p className="text-xs font-medium text-[#777777]">Superficie bajo el modelo de Paisajes Productivos Protegidos</p>
          </article>

          {impactCards.map((card) => (
            <article key={card.title} className="rounded-2xl border border-[#E5EADF] bg-white p-4 shadow-sm transition hover:border-[#5B6B3C]/20 hover:shadow-[0_12px_32px_-8px_rgba(91,107,60,0.1)]">
              <IconBox tone={card.tone} className="mb-3">
                {card.icon}
              </IconBox>
              <div className="mb-0.5 text-xl font-extrabold tracking-[-0.02em] text-[#2D2D2D]">{card.title}</div>
              <p className="text-[11px] text-[#777777]">{card.description}</p>
            </article>
          ))}
        </div>

        <article className="mb-6 rounded-2xl border border-[#E5EADF] bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <Activity size={16} className="text-[#5B6B3C]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D2D2D]">Salud del ecosistema</span>
          </div>
          <div className="space-y-3">
            <HealthMetric
              label="Cobertura vegetal"
              value="+90%"
              width="92%"
              description="Es el hogar de millones de seres invisibles que dan vida a nuestras plantas y donde se refugia la fauna. Al cuidar este manto verde, evitamos que la tierra se canse y logramos que cada gota de lluvia se quede con nosotros."
            />
            <HealthMetric
              label="Conectividad ecológica"
              value="Alta"
              width="85%"
              description="Al mantener nuestros bosques conectados, permitimos que el jaguar, el puma, el zorro, entre otros, caminen seguros, encuentren su pareja y sigan poblando el monte. Son puentes invisibles que garantizan que la vida silvestre nunca se detenga."
            />
          </div>
        </article>

        <div className="flex gap-3 rounded-2xl border border-[#E5EADF] bg-gradient-to-br from-[#FDFBF5] to-[#F9F5EC] p-5">
          <Quote size={20} className="mt-0.5 shrink-0 text-[#a4b486]" />
          <p className="text-sm font-medium italic leading-relaxed text-[#555555]">
            “Producir conservando: compatibilizar la producción agropecuaria con la protección de la biodiversidad es posible.”
          </p>
        </div>
      </div>
    </section>
  );
}

function HealthMetric({
  label,
  value,
  width,
  description,
}: {
  label: string;
  value: string;
  width: string;
  description: string;
}) {
  const [isHovering, setIsHovering] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const isOpen = isHovering || isPinned;

  const togglePinned = () => setIsPinned((current) => !current);
  const closePopup = () => {
    setIsPinned(false);
    setIsHovering(false);
  };

  return (
    <div className="relative">
      <div className="mb-1 flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] font-medium text-[#555555]">{label}</span>

          <div
            className="relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <button
              type="button"
              onClick={togglePinned}
              aria-expanded={isOpen}
              aria-label={`Ver explicación de ${label}`}
              className="flex h-5 w-5 items-center justify-center rounded-full border border-[#E5EADF] bg-[#FDFBF5] text-[#5B6B3C] transition hover:bg-[#E5EADF]"
            >
              <Info size={12} />
            </button>

            <div
              className={`absolute left-1/2 top-7 z-20 w-64 -translate-x-1/2 rounded-2xl border border-[#E5EADF] bg-white p-3 text-[11px] leading-relaxed text-[#666666] shadow-xl transition duration-200 sm:left-0 sm:translate-x-0 ${
                isOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
              }`}
            >
              <div className="mb-1 flex items-center justify-between gap-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#5B6B3C]">{label}</span>
                {isPinned && (
                  <button type="button" onClick={closePopup} className="text-[10px] font-bold text-[#999999] transition hover:text-[#5B6B3C]">
                    Cerrar
                  </button>
                )}
              </div>
              {description}
            </div>
          </div>
        </div>

        <span className="text-[11px] font-bold text-[#5B6B3C]">{value}</span>
      </div>
      <StatBar width={width} />
    </div>
  );
}

function BiodiversitySection() {
  const [activeSpeciesFilter, setActiveSpeciesFilter] = useState<SpeciesFilterId>("all");

  const filteredFeaturedSpecies =
    activeSpeciesFilter === "all"
      ? featuredSpecies
      : featuredSpecies.filter((species) => species.category === activeSpeciesFilter);

  return (
    <section id="biodiversidad" className="relative border-y border-[#E5EADF] bg-[#FDFBF5] px-5 py-20" aria-labelledby="bio-title">
      <div className="mx-auto max-w-lg lg:max-w-6xl">
        <div className="mb-8">
          <SectionEyebrow tone="gold">Biodiversidad</SectionEyebrow>
          <h2 id="bio-title" className="mb-3 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[#1A1A1A] md:text-3xl">
            EL HOGAR QUE DECIDISTE <span className="text-gold-gradient">CONSERVAR</span>
          </h2>
          <p className="text-sm leading-relaxed text-[#777777]">
            Si guardas silencio, podrás escuchar la historia de quienes habitan aquí: el puma que cruza al amanecer o el águila que vigila desde lo alto.
            Ellos no saben tu nombre, pero sienten tu respeto en cada rincón del bosque que ayudas a conservar bajo producción sostenible.
          </p>
        </div>

        <SpeciesFilters activeFilter={activeSpeciesFilter} onChange={setActiveSpeciesFilter} />

        {filteredFeaturedSpecies.length > 0 ? (
          <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {filteredFeaturedSpecies.map((species) => (
              <FeaturedSpeciesCard key={species.name} species={species} />
            ))}
          </div>
        ) : (
          <EmptyFeaturedSpecies filterLabel={speciesFilterLabels[activeSpeciesFilter]} />
        )}

        <ClassificationLegend />

        <SpeciesList activeFilter={activeSpeciesFilter} />

        <article className="mt-6 rounded-2xl border border-[#E5EADF] bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <Info size={15} className="text-[#5B6B3C]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D2D2D]">¿Por qué importa?</span>
          </div>
          <p className="text-xs leading-relaxed text-[#777777]">
            La presencia de <strong className="text-[#2D2D2D]">depredadores tope</strong> (puma), <strong className="text-[#2D2D2D]">herbívoros de gran porte</strong> (majano) y <strong className="text-[#2D2D2D]">especies insectívoras especializadas</strong> (oso bandera) indica que el predio mantiene una <strong className="text-[#5B6B3C]">red trófica funcional y completa</strong>.
          </p>
        </article>
      </div>
    </section>
  );
}

function SpeciesFilters({
  activeFilter,
  onChange,
}: {
  activeFilter: SpeciesFilterId;
  onChange: (filter: SpeciesFilterId) => void;
}) {
  const filters: { id: SpeciesFilterId; label: string; icon: ReactNode }[] = [
    { id: "all", label: "Todas (32)", icon: <LayoutGrid size={13} /> },
    { id: "mammals", label: "Mamíferos (10)", icon: <PawPrint size={13} /> },
    { id: "birds", label: "Aves (19)", icon: <Bird size={13} /> },
    { id: "reptiles", label: "Reptiles (3)", icon: <Snail size={13} /> },
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
            {filter.icon}
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
        <Info size={17} />
      </div>
      <h3 className="text-sm font-extrabold text-[#1A1A1A]">No hay especies destacadas para {filterLabel}</h3>
      <p className="mt-1 text-xs leading-relaxed text-[#777777]">
        Puedes revisar las especies de esta categoría en la lista completa que aparece debajo.
      </p>
    </article>
  );
}

function FeaturedSpeciesCard({ species }: { species: FeaturedSpecies }) {
  return (
    <article className="group/card flex flex-col overflow-hidden rounded-2xl border border-[#E5EADF] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#a4b486] hover:shadow-xl">
      <div className="relative h-48 w-full overflow-hidden bg-[#F3EDDD]">
        <AnimalInfoTrigger species={species} variant="image">
          <img src={asset(species.image)} alt={species.name} className="h-full w-full object-cover transition duration-700 group-hover/card:scale-105" />
        </AnimalInfoTrigger>

        <div className="absolute right-3 top-3">
          <span className={`flex items-center gap-1 rounded-full border px-3 py-1 text-[9px] font-bold uppercase tracking-wide shadow-md ${species.badgeClass}`}>
            {species.icon === "flame" ? <Flame size={12} /> : <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />}
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
            <Camera size={16} className="text-[#7d9159]" />
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
  variant,
  children,
}: {
  species: FeaturedSpecies;
  variant: "image" | "title";
  children: ReactNode;
}) {
  const [isHovering, setIsHovering] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const isOpen = isHovering || isPinned;

  const popupPosition =
    variant === "image"
      ? "left-4 right-4 top-4"
      : "left-0 top-9 w-72 max-w-[calc(100vw-3rem)]";

  const togglePinned = () => setIsPinned((current) => !current);
  const closePopup = () => {
    setIsPinned(false);
    setIsHovering(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
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
      className={`relative block outline-none ${variant === "image" ? "h-full w-full cursor-pointer" : "inline-block cursor-pointer"}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={togglePinned}
      onKeyDown={handleKeyDown}
    >
      {children}

      <div
        onClick={(event) => event.stopPropagation()}
        className={`absolute z-30 rounded-2xl border border-[#E5EADF] bg-white/95 p-4 text-left shadow-2xl backdrop-blur-md transition duration-200 ${popupPosition} ${
          isOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        <div className="mb-1 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#5B6B3C]">
            <PawPrint size={12} />
            Rol ecológico
          </div>
          {isPinned && (
            <button type="button" onClick={closePopup} className="text-[10px] font-bold text-[#999999] transition hover:text-[#5B6B3C]">
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

function ClassificationLegend() {
  const classifications = [
    {
      label: "VU",
      title: "Vulnerable",
      description:
        "Indica que la especie enfrenta riesgo de disminución o amenaza si su hábitat continúa deteriorándose. Su presencia refuerza la importancia de conservar el bosque.",
      className: "border-red-200 bg-red-50 text-red-800",
    },
    {
      label: "Sensible",
      title: "Especie sensible",
      description:
        "Se refiere a animales que responden rápidamente a cambios en el ambiente, la presión humana o la pérdida de cobertura. Verlos es una señal positiva de equilibrio ecológico.",
      className: "border-yellow-200 bg-yellow-50 text-yellow-800",
    },
    {
      label: "Depredador Top",
      title: "Regulador del ecosistema",
      description:
        "Son especies ubicadas en la parte alta de la cadena alimentaria. Ayudan a mantener el balance natural controlando poblaciones y fortaleciendo la salud del territorio.",
      className: "border-[#5B6B3C]/20 bg-[#F4F6F0] text-[#5B6B3C]",
    },
  ];

  return (
    <article className="mb-8 rounded-2xl border border-[#E5EADF] bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <Info size={15} className="text-[#5B6B3C]" />
        <span className="text-xs font-bold uppercase tracking-wider text-[#2D2D2D]">Significado de las clasificaciones</span>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {classifications.map((item) => (
          <div key={item.label} className="rounded-2xl border border-[#E5EADF] bg-[#FDFBF5] p-3">
            <span className={`mb-2 inline-flex rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide ${item.className}`}>
              {item.label}
            </span>
            <h4 className="mb-1 text-xs font-extrabold text-[#1A1A1A]">{item.title}</h4>
            <p className="text-[11px] leading-relaxed text-[#777777]">{item.description}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

function SpeciesList({ activeFilter }: { activeFilter: SpeciesFilterId }) {
  const showMammals = activeFilter === "all" || activeFilter === "mammals";
  const showBirds = activeFilter === "all" || activeFilter === "birds";
  const showReptiles = activeFilter === "all" || activeFilter === "reptiles";

  return (
    <article className="overflow-hidden rounded-2xl border border-[#E5EADF] bg-white shadow-sm">
      <div className="flex w-full items-center justify-between rounded-2xl p-4 text-left">
        <div className="flex items-center gap-2">
          <List size={15} className="text-[#5B6B3C]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#2D2D2D]">
            Lista completa de especies
            {activeFilter !== "all" && (
              <span className="ml-1 text-[#5B6B3C]">· {speciesFilterLabels[activeFilter]}</span>
            )}
          </span>
        </div>
        <ChevronDown size={16} className="text-[#999999]" />
      </div>

      <div className="space-y-4 px-4 pb-4">
        {showMammals && <MammalList />}
        {showBirds && <BirdList />}
        {showReptiles && <ReptileList />}
      </div>
    </article>
  );
}

function MammalList() {
  return (
    <div>
      <SpeciesGroupHeader icon={<PawPrint size={13} className="text-[#5B6B3C]" />} title="Mamíferos" count="10 spp." />
      <div className="space-y-1">
        {mammals.map((mammal) => (
          <div key={mammal.name} className="flex items-center justify-between rounded-lg px-3 py-2 transition hover:bg-[#F4F6F0]">
            <span className="text-xs font-medium text-[#2D2D2D]">{mammal.name}</span>
            <div className="flex items-center gap-2">
              <div className="w-12">
                <StatBar width={mammal.width} />
              </div>
              <span className={`w-5 text-right text-[10px] font-bold ${mammal.colorClass}`}>{mammal.count}</span>
            </div>
          </div>
        ))}
        <div className="flex items-center justify-between rounded-lg px-3 py-2 transition hover:bg-[#F4F6F0]">
          <span className="text-xs font-medium text-[#2D2D2D]">Puma · Quimilero · Rosillo · Zorrino · Corzuela</span>
          <span className="w-5 text-right text-[10px] font-bold text-[#999999]">7</span>
        </div>
      </div>
    </div>
  );
}

function BirdList() {
  return (
    <div>
      <SpeciesGroupHeader icon={<Bird size={13} className="text-[#D4B03A]" />} title="Aves" count="19 spp." />
      <div className="space-y-1">
        {birds.map((bird) => (
          <SimpleSpeciesRow key={bird.name} name={bird.name} count={bird.count} countClass="text-[#B8962A]" />
        ))}
        <div className="rounded-lg px-3 py-2 text-[11px] leading-relaxed text-[#777777] transition hover:bg-[#F4F6F0]">
          Charata · Carcancho · Pato brasilero · Gallareta · Bandurria · Cata · Pato picasso · Carau · Chaisita · Chubi · Bientefue · Garcita azulada · Loro cabeza azul · Pato silbador · Sucha · Trepatroncos
        </div>
      </div>
    </div>
  );
}

function ReptileList() {
  return (
    <div>
      <SpeciesGroupHeader icon={<Snail size={13} className="text-[#555555]" />} title="Reptiles" count="3 spp." />
      <div className="space-y-1">
        {reptiles.map((reptile) => (
          <SimpleSpeciesRow key={reptile.name} name={reptile.name} count={reptile.count} countClass="text-[#777777]" />
        ))}
      </div>
    </div>
  );
}

function SpeciesGroupHeader({ icon, title, count }: { icon: ReactNode; title: string; count: string }) {
  return (
    <div className="mb-2.5 flex items-center gap-2">
      {icon}
      <span className="text-[11px] font-bold uppercase tracking-wider text-[#3F3F3F]">{title}</span>
      <span className="text-[10px] font-medium text-[#B5B5B5]">{count}</span>
    </div>
  );
}

function SimpleSpeciesRow({ name, count, countClass }: { name: string; count: string; countClass: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg px-3 py-2 transition hover:bg-[#F4F6F0]">
      <span className="text-xs font-medium text-[#2D2D2D]">{name}</span>
      <span className={`text-[10px] font-bold ${countClass}`}>{count}</span>
    </div>
  );
}

function LocationAndMethodSection() {
  return (
    <section className="bg-[#F9F5EC] px-5 py-20" aria-labelledby="ubicacion-title">
      <div className="mx-auto max-w-lg lg:max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <LocationColumn />
          <MethodColumn />
        </div>
      </div>
    </section>
  );
}

function LocationColumn() {
  return (
    <div>
      <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.12em] text-[#4A5630]">Ubicación</span>
      <h2 id="ubicacion-title" className="mb-5 text-2xl font-extrabold tracking-[-0.02em] text-[#1A1A1A] md:text-3xl">
        EL MAPA DE LA VIDA
      </h2>
      <p className="text-sm leading-relaxed text-[#777777]">
        Cada punto en nuestro mapa donde producimos es más que un dato; es un árbol que sigue en pie, una fuente de agua que no se agota y un refugio donde la vida silvestre no tiene miedo.
      </p>

      <div className="relative mb-4 overflow-hidden rounded-2xl border border-[#E5EADF] bg-[#FDFBF5] shadow-sm">
        <img src={asset("mapa.jpg")} alt="Mapa de ubicación del Predio Los Corrales" className="h-auto w-full object-cover" />
        <div className="absolute bottom-3 left-3 rounded-lg border border-[#E5EADF] bg-white/95 px-3 py-2 shadow-sm backdrop-blur-sm">
          <div className="text-[9px] font-bold uppercase tracking-wider text-[#999999]">Coordenadas</div>
          <div className="font-mono text-[11px] font-medium text-[#2D2D2D]">~21°09&apos;S · 63°28&apos;W</div>
          <div className="text-[10px] text-[#999999]">388–390 msnm</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <LocationStat icon={<MapPin size={17} className="mb-1.5 text-[#5B6B3C]" />} label="Comunidad" value="Cañada Bolívar" />
        <LocationStat icon={<Landmark size={17} className="mb-1.5 text-[#5B6B3C]" />} label="Región" value="Villa Montes, Chaco" />
      </div>
    </div>
  );
}

function LocationStat({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#E5EADF] bg-white p-3.5 shadow-sm">
      {icon}
      <div className="text-[10px] font-bold uppercase tracking-wider text-[#999999]">{label}</div>
      <div className="mt-0.5 text-sm font-bold text-[#1A1A1A]">{value}</div>
    </div>
  );
}

function MethodColumn() {
  return (
    <div>
      <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.12em] text-[#4A5630]">El Método</span>
      <h2 className="mb-3 text-2xl font-extrabold tracking-[-0.02em] text-[#1A1A1A] md:text-3xl">
        EL LATIDO DE LA <span className="text-olive-gradient">TIERRA</span>
      </h2>
      <p className="mb-5 text-sm leading-relaxed text-[#777777]">
        No sobrecargamos al campo; lo acompañamos rotando los espacios de producción para que el suelo recupere su fuerza. Mantener el bosque en pie es nuestra forma de asegurar que la tierra nunca deje de darnos lo mejor de sí.
      </p>

      <div className="space-y-3">
        {methodItems.map((item) => (
          <div key={item.title} className={`flex gap-3 rounded-2xl border border-[#E5EADF] ${item.borderClass} border-l-4 bg-gradient-to-br from-[#FDFBF5] to-[#F9F5EC] p-4 shadow-sm`}>
            <IconBox tone={item.tone} className="mt-0.5">
              {item.icon}
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

function GallerySection() {
  return (
    <section id="galeria" className="relative overflow-hidden bg-white py-20" aria-labelledby="galeria-title">
      <div className="mx-auto mb-8 max-w-lg px-5 lg:max-w-6xl">
        <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.12em] text-[#4A5630]">Explora el predio</span>
        <h2 id="galeria-title" className="mb-2 text-2xl font-extrabold tracking-[-0.02em] text-[#1A1A1A] md:text-3xl">
          UN RINCÓN DEL MUNDO QUE AHORA ES TUYO
        </h2>
        <p className="text-sm text-[#999999]">Acompáñanos a mirar lo que nosotros vemos y sentimos cada día.</p>
      </div>

      <GalleryRow title="Fauna Terrestre" accentClass="bg-[#7d9159]" items={faunaGallery} showBottomSpace />
    </section>
  );
}

function GalleryRow({ title, accentClass, items, showBottomSpace = false }: { title: string; accentClass: string; items: GalleryItem[]; showBottomSpace?: boolean }) {
  return (
    <div className="mx-auto max-w-lg pl-5 lg:max-w-6xl">
      <h3 className="mb-4 flex items-center gap-2 pr-5 text-[11px] font-bold uppercase tracking-wider text-[#999999]">
        <span className={`h-px w-4 ${accentClass}`} />
        {title}
      </h3>
      <div className="gallery-row mb-3">
        {items.map((item) => (
          <GalleryCard key={item.title} item={item} />
        ))}
        <div className="w-5 shrink-0" />
      </div>
      <GalleryDots className={showBottomSpace ? "mb-10" : ""} />
    </div>
  );
}

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <article className="gallery-item group">
      <img src={asset(item.image)} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 pt-12">
        <p className="text-[11px] font-bold uppercase tracking-wider text-white">{item.title}</p>
        <p className="mt-0.5 text-[9px] text-white/50">{item.description}</p>
      </div>
    </article>
  );
}

function GalleryDots({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center gap-1.5 pr-5 ${className}`}>
      <span className="h-1.5 w-5 rounded-full bg-[#5B6B3C]" />
      <span className="h-1.5 w-1.5 rounded-full bg-[#E5EADF]" />
      <span className="h-1.5 w-1.5 rounded-full bg-[#E5EADF]" />
      <span className="h-1.5 w-1.5 rounded-full bg-[#E5EADF]" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-[#4A5630] px-5 py-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(91,107,60,0.25),_transparent_42%)]" />
      <div className="relative z-10 mx-auto max-w-lg text-center lg:max-w-4xl">
        <h2 className="mb-2 text-2xl font-extrabold tracking-[-0.02em]">GRACIAS POR SER PARTE DEL CAMBIO</h2>
        <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-white/40">
          Al elegir este producto, contribuyes a que la historia de este ecosistema nunca deje de escribirse.
        </p>

        <div className="mx-auto mb-8 grid max-w-md grid-cols-3 gap-3">
          <FooterMetric value="32" label="Especies" />
          <FooterMetric value="3" label="Vulnerables" />
          <FooterMetric value="1°" label="Inventario" />
        </div>

        <div className="border-t border-white/[0.06] pt-6">
          <p className="text-[9px] font-bold uppercase tracking-[0.15em]">© 2025 Predio Los Corrales · Villa Montes, Tarija</p>
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

export default function PredioLosCorralesPage() {
  return (
    <main className={`${inter.className} overflow-x-hidden bg-[#F9F5EC] text-[#2D2D2D] antialiased`}>
      <GlobalStyles />
      <Navbar />
      <HeroSection />
      <ImpactSection />
      <BiodiversitySection />
      <LocationAndMethodSection />
      <GallerySection />
      <Footer />
    </main>
  );
}
