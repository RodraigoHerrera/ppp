import type { PredioData } from "@/types/predio";

export const losCorralesPredio = {
  slug: "los-corrales",
  name: "Los Corrales",
  brandSubtitle: "Origen Verificado",
  assetPath: "/assets/animales",
  logo: {
    src: "logo-PPP(principal).png",
    alt: "Logo PPP",
  },
  navLinks: [
    { href: "#impacto", label: "Impacto" },
    { href: "#biodiversidad", label: "Fauna" },
    { href: "#galeria", label: "Galería" },
  ],
  partners: [
    { src: "logo-fcbc.png", alt: "FCBC" },
    { src: "logo-prometo(fondoblanco).png", alt: "Prometa" },
    { src: "logo-asociacion-suecia.png", alt: "Suecia" },
  ],
  hero: {
    locationLabel: "Cañada Bolívar, Villa Montes",
    backgroundImage: "puma_chaco_bg.png",
    backgroundAlt: "Puma en el hábitat del Chaco boliviano",
    title: {
      leading: "TU HISTORIA Y LA DEL",
      highlight: "BOSQUE",
      trailing: "HOY SE ESCRIBEN JUNTAS",
    },
    description:
      "Tus manos sostienen el legado del predio Los Corrales. Este producto nació de un trabajo en armonía con la naturaleza. Al elegirlo, contribuyes a que el planeta siga respirando.",
    metrics: [
      {
        icon: "trees",
        value: "2.818",
        label: "Hectáreas",
        iconClassName: "text-[#a4b486]",
      },
      {
        icon: "pawPrint",
        value: "32",
        label: "Especies",
        iconClassName: "text-[#E5C44D]",
      },
    ],
    cta: {
      href: "#impacto",
      label: "Descubre tu impacto",
    },
  },
  impact: {
    eyebrow: "Impacto Ambiental",
    title: {
      leading: "NUESTRA HERENCIA",
      highlight: "VIVA",
    },
    description: "Conservamos este bosque para seguir produciendo y el agua nunca deje de correr.",
    primaryMetric: {
      value: "2.818",
      unit: "ha",
      description: "Superficie bajo el modelo de Paisajes Productivos Protegidos",
      badge: "Verificado PPP",
      icon: "map",
    },
    cards: [
      {
        title: "0–48°C",
        description: "Clima semiárido extremo",
        icon: "thermometerSun",
        tone: "orange",
      },
      {
        title: "Aguadas",
        description: "Refugios hídricos para fauna",
        icon: "droplets",
        tone: "blue",
      },
    ],
    health: {
      title: "Salud del ecosistema",
      icon: "activity",
      metrics: [
        {
          label: "Cobertura vegetal",
          value: "+90%",
          width: "92%",
          description:
            "Es el hogar de millones de seres invisibles que dan vida a nuestras plantas y donde se refugia la fauna. Al cuidar este manto verde, evitamos que la tierra se canse y logramos que cada gota de lluvia se quede con nosotros.",
        },
        {
          label: "Conectividad ecológica",
          value: "Alta",
          width: "85%",
          description:
            "Al mantener nuestros bosques conectados, permitimos que el jaguar, el puma, el zorro, entre otros, caminen seguros, encuentren su pareja y sigan poblando el monte. Son puentes invisibles que garantizan que la vida silvestre nunca se detenga.",
        },
      ],
    },
    quote:
      "Producir conservando: compatibilizar la producción agropecuaria con la protección de la biodiversidad es posible.",
  },
  biodiversity: {
    eyebrow: "Biodiversidad",
    title: {
      leading: "EL HOGAR QUE DECIDISTE",
      highlight: "CONSERVAR",
    },
    description:
      "Si guardas silencio, podrás escuchar la historia de quienes habitan aquí: el puma que cruza al amanecer o el águila que vigila desde lo alto. Ellos no saben tu nombre, pero sienten tu respeto en cada rincón del bosque que ayudas a conservar bajo producción sostenible.",
    totalSpecies: 32,
    categories: [
      {
        id: "mammals",
        label: "Mamíferos",
        speciesCount: 10,
        icon: "pawPrint",
        iconClassName: "text-[#5B6B3C]",
      },
      {
        id: "birds",
        label: "Aves",
        speciesCount: 19,
        icon: "bird",
        iconClassName: "text-[#D4B03A]",
      },
      {
        id: "reptiles",
        label: "Reptiles",
        speciesCount: 3,
        icon: "snail",
        iconClassName: "text-[#555555]",
      },
    ],
    featuredSpecies: [
      {
        name: "Oso Bandera",
        scientific: "Myrmecophaga tridactyla",
        image: "Oso bandera.jpg",
        records: 3,
        badge: "VU",
        badgeClassName: "bg-red-100 text-red-800 border-red-200",
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
        badgeClassName: "bg-[#5B6B3C] text-white border-[#5B6B3C]",
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
        badgeClassName: "bg-yellow-100/90 text-yellow-800 border-yellow-200",
        category: "mammals",
        roleDescription:
          "El chancho majano remueve el suelo, dispersa semillas y abre caminos dentro del monte. Es una especie muy sensible a la presión humana, por eso encontrarlo refleja que el bosque mantiene alimento, cobertura y rutas de desplazamiento.",
      },
    ],
    classifications: [
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
    ],
    speciesGroups: [
      {
        category: "mammals",
        title: "Mamíferos",
        countLabel: "10 spp.",
        icon: "pawPrint",
        iconClassName: "text-[#5B6B3C]",
        rows: [
          {
            name: "Mara chaqueña",
            count: "93",
            barWidth: "100%",
            countClassName: "text-[#B8962A]",
          },
          {
            name: "Chancho majano",
            count: "23",
            barWidth: "25%",
            countClassName: "text-[#B8962A]",
          },
          {
            name: "Zorro patas amarillas",
            count: "14",
            barWidth: "15%",
            countClassName: "text-[#5B6B3C]",
          },
          {
            name: "Quirquincho bolita",
            count: "8",
            barWidth: "9%",
            countClassName: "text-[#555555]",
          },
          {
            name: "Oso bandera",
            count: "3",
            barWidth: "4%",
            countClassName: "text-[#B8962A]",
          },
          {
            name: "Puma · Quimilero · Rosillo · Zorrino · Corzuela",
            count: "7",
            countClassName: "text-[#999999]",
          },
        ],
      },
      {
        category: "birds",
        title: "Aves",
        countLabel: "19 spp.",
        icon: "bird",
        iconClassName: "text-[#D4B03A]",
        rows: [
          { name: "Chuña", count: "35", countClassName: "text-[#B8962A]" },
          { name: "Torcaza", count: "16", countClassName: "text-[#B8962A]" },
          { name: "Bandurria mora", count: "9", countClassName: "text-[#B8962A]" },
        ],
        note:
          "Charata · Carcancho · Pato brasilero · Gallareta · Bandurria · Cata · Pato picasso · Carau · Chaisita · Chubi · Bientefue · Garcita azulada · Loro cabeza azul · Pato silbador · Sucha · Trepatroncos",
      },
      {
        category: "reptiles",
        title: "Reptiles",
        countLabel: "3 spp.",
        icon: "snail",
        iconClassName: "text-[#555555]",
        rows: [
          { name: "Iguana", count: "5", countClassName: "text-[#777777]" },
          { name: "Lagartija", count: "2", countClassName: "text-[#777777]" },
          { name: "Coral falsa", count: "1", countClassName: "text-[#777777]" },
        ],
      },
    ],
    whyItMatters: {
      title: "¿Por qué importa?",
      description:
        "La presencia de depredadores tope como el puma, herbívoros de gran porte como el majano y especies insectívoras especializadas como el oso bandera indica que el predio mantiene una red trófica funcional y completa.",
    },
  },
  location: {
    eyebrow: "Ubicación",
    title: "EL MAPA DE LA VIDA",
    description:
      "Cada punto en nuestro mapa donde producimos es más que un dato; es un árbol que sigue en pie, una fuente de agua que no se agota y un refugio donde la vida silvestre no tiene miedo.",
    mapImage: "mapa.jpg",
    mapAlt: "Mapa de ubicación del Predio Los Corrales",
    coordinates: "~21°09'S · 63°28'W",
    elevation: "388–390 msnm",
    stats: [
      {
        icon: "mapPin",
        label: "Comunidad",
        value: "Cañada Bolívar",
      },
      {
        icon: "landmark",
        label: "Región",
        value: "Villa Montes, Chaco",
      },
    ],
  },
  method: {
    eyebrow: "El Método",
    title: {
      leading: "EL LATIDO DE LA",
      highlight: "TIERRA",
    },
    description:
      "No sobrecargamos al campo; lo acompañamos rotando los espacios de producción para que el suelo recupere su fuerza. Mantener el bosque en pie es nuestra forma de asegurar que la tierra nunca deje de darnos lo mejor de sí.",
    items: [
      {
        title: "Rotación de potreros",
        description: "Permite la regeneración natural de la vegetación entre ciclos de pastoreo.",
        icon: "repeat",
        tone: "gold",
        borderClassName: "border-l-[#E5C44D]",
      },
      {
        title: "Corredores de bosque",
        description:
          "Franjas de vegetación nativa que conectan hábitats y permiten el desplazamiento de fauna.",
        icon: "trees",
        tone: "olive",
        borderClassName: "border-l-[#5B6B3C]",
      },
      {
        title: "Aguadas protegidas",
        description:
          "Cuerpos de agua permanentes que son puntos críticos para la fauna durante la época seca.",
        icon: "droplets",
        tone: "olive",
        borderClassName: "border-l-[#7d9159]",
      },
    ],
  },
  gallery: {
    eyebrow: "Explora el predio",
    title: "UN RINCÓN DEL MUNDO QUE AHORA ES TUYO",
    description: "Acompáñanos a mirar lo que nosotros vemos y sentimos cada día.",
    rows: [
      {
        title: "Fauna Terrestre",
        accentClassName: "bg-[#7d9159]",
        items: [
          {
            title: "Zorro patas amarillas",
            description: "Lycalopex gymnocercus · 14 registros",
            image: "9.jpg",
          },
          {
            title: "Corzuela",
            description: "Subulo gouazoubira",
            image: "3.jpg",
          },
          {
            title: "Iguana",
            description: "Salvator rufescens · 5 registros",
            image: "5.jpg",
          },
          {
            title: "Quirquincho bolita",
            description: "Tolypeutes matacus · 8 registros",
            image: "1.jpg",
          },
        ],
      },
    ],
  },
  footer: {
    title: "GRACIAS POR SER PARTE DEL CAMBIO",
    description:
      "Al elegir este producto, contribuyes a que la historia de este ecosistema nunca deje de escribirse.",
    metrics: [
      { value: "32", label: "Especies" },
      { value: "3", label: "Vulnerables" },
      { value: "1°", label: "Inventario" },
    ],
    copyright: "© 2025 Predio Los Corrales · Villa Montes, Tarija",
  },
} satisfies PredioData;

export const prediosBySlug = {
  [losCorralesPredio.slug]: losCorralesPredio,
} satisfies Record<string, PredioData>;
