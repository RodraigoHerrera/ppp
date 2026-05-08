import type { PredioData } from "@/types/predio";

export const laAhogadaPredio = {
  slug: "la-ahogada",
  name: "La Ahogada",
  brandSubtitle: "Origen Verificado",
  assetPath: "/assets/ahogada",
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
    backgroundImage: "hero-la-ahogada.jpg",
    backgroundAlt: "Fauna chaqueña registrada en el predio La Ahogada",
    title: {
      leading: "TU HISTORIA Y LA DEL",
      highlight: "CHACO",
      trailing: "HOY SE PROTEGEN JUNTAS",
    },
    description:
      "Tus manos sostienen el legado del predio La Ahogada. Este producto nace de un paisaje ganadero donde la producción convive con el bosque, el agua y la fauna silvestre del Chaco boliviano.",
    metrics: [
      {
        icon: "trees",
        value: "1.758",
        label: "Hectáreas",
        iconClassName: "text-[#a4b486]",
      },
      {
        icon: "pawPrint",
        value: "24",
        label: "Especies",
        iconClassName: "text-[#E5C44D]",
      },
      {
        icon: "camera",
        value: "133",
        label: "Registros",
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
    description:
      "La Ahogada combina bosque nativo conservado, potreros para ganadería extensiva y cuerpos de agua que sostienen la biodiversidad chaqueña.",
    primaryMetric: {
      value: "1.758",
      unit: "ha",
      description: "Superficie bajo el modelo de Paisajes Productivos Protegidos",
      badge: "Verificado PPP",
      icon: "map",
    },
    cards: [
      {
        title: "0-48°C",
        description: "Clima semiárido extremo",
        icon: "thermometerSun",
        tone: "orange",
      },
      {
        title: "Aguadas",
        description: "Puntos críticos para la fauna en época seca",
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
          value: "Densa",
          width: "88%",
          description:
            "El predio presenta una matriz con vegetación densa y saludable, especialmente hacia la zona central y norte. Esta cobertura ofrece refugio, alimento y estabilidad ecológica para la fauna silvestre.",
        },
        {
          label: "Conectividad ecológica",
          value: "Funcional",
          width: "84%",
          description:
            "Las franjas de bosque, corredores naturales y cursos de agua permiten que la fauna se desplace entre distintas zonas del predio, manteniendo conexión entre ambientes naturales y productivos.",
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
      "En La Ahogada se registraron mamíferos, aves y reptiles que reflejan un paisaje productivo con bosque, agua y refugios funcionales. La presencia del oso bandera, el puma y el chancho majano confirma que el predio conserva procesos ecológicos importantes.",
    totalSpecies: 24,
    categories: [
      {
        id: "mammals",
        label: "Mamíferos",
        speciesCount: 11,
        icon: "pawPrint",
        iconClassName: "text-[#5B6B3C]",
      },
      {
        id: "birds",
        label: "Aves",
        speciesCount: 12,
        icon: "bird",
        iconClassName: "text-[#D4B03A]",
      },
      {
        id: "reptiles",
        label: "Reptiles",
        speciesCount: 1,
        icon: "snail",
        iconClassName: "text-[#555555]",
      },
    ],
    featuredSpecies: [
  {
    name: "Puma",
    scientific: "Puma concolor",
    image: "pumaConColor.png",
    records: 1,
    badge: "Depredador Top",
    badgeClassName: "bg-[#5B6B3C] text-white border-[#5B6B3C]",
    category: "mammals",
    roleDescription:
      "El puma es un depredador tope y regulador ecológico. Su presencia ayuda a controlar poblaciones de mamíferos y puede reducir la propagación de enfermedades al eliminar presas débiles o enfermas.",
    icon: "flame",
  },
  {
    name: "Corzuela",
    scientific: "Subulo gouazoubira",
    image: "subulo.png",
    records: 1,
    badge: "Dispersora",
    badgeClassName: "bg-green-100 text-green-800 border-green-200",
    category: "mammals",
    roleDescription:
      "La corzuela es una especie asociada a montes en buen estado. Al desplazarse por el predio contribuye a la dispersión de semillas, favoreciendo la regeneración del bosque, la sombra y la humedad del ecosistema.",
  },
  {
    name: "Mara chaqueña",
    scientific: "Dolichotis salinicola",
    image: "maraChaqueña.png",
    records: 1,
    badge: "Presa clave",
    badgeClassName: "bg-yellow-100 text-yellow-800 border-yellow-200",
    category: "mammals",
    roleDescription:
      "La mara chaqueña, también conocida como conejo de los palos, cumple un rol importante como presa para depredadores medianos y grandes. Además, participa en la dispersión de semillas, el consumo de vegetación y la aireación del suelo mediante sus madrigueras.",
  },
  {
    name: "Zorro patas amarillas",
    scientific: "Lycalopex gymnocercus",
    image: "zorroPatas.png",
    records: 1,
    badge: "Controlador",
    badgeClassName: "bg-orange-100 text-orange-800 border-orange-200",
    category: "mammals",
    roleDescription:
      "El zorro patas amarillas contribuye al equilibrio ecológico como controlador de roedores e insectos. También participa en la dispersión de semillas, actúa como carroñero y cumple un rol de depredador intermedio dentro de la red trófica.",
  },
  {
    name: "Zorrino",
    scientific: "Conepatus chinga",
    image: "zorrino.png",
    records: 1,
    badge: "Depredador intermedio",
    badgeClassName: "bg-stone-100 text-stone-800 border-stone-200",
    category: "mammals",
    roleDescription:
      "El zorrino cumple un rol ecológico como depredador intermedio oportunista. Ayuda al control de insectos y pequeños vertebrados, y mediante su actividad de forrajeo contribuye a la aireación del suelo.",
  },
  {
    name: "Quirquincho bolita",
    scientific: "Tolypeutes matacus",
    image: "quirquincho.png",
    records: 1,
    badge: "NT",
    badgeClassName: "bg-yellow-100 text-yellow-800 border-yellow-200",
    category: "mammals",
    roleDescription:
      "El quirquincho bolita es importante como controlador natural de plagas, dispersor de semillas y oxigenador del suelo mediante sus cuevas. Es una especie nativa del Gran Chaco y se encuentra casi amenazada por la caza y la pérdida de hábitat.",
  },
  {
    name: "Oso bandera",
    scientific: "Myrmecophaga tridactyla",
    image: "osoBandera.png",
    records: 1,
    badge: "VU",
    badgeClassName: "bg-red-100 text-red-800 border-red-200",
    category: "mammals",
    roleDescription:
      "El oso bandera es una especie vulnerable y clave para el equilibrio ecológico. Actúa como controlador biológico de hormigas y termitas, airea el suelo al excavar, puede dispersar semillas y funciona como especie sombrilla al requerir hábitats extensos.",
  },
  {
    name: "Gato montés",
    scientific: "Leopardus geoffroyi",
    image: "gatoMontes.png",
    records: 1,
    badge: "Controlador",
    badgeClassName: "bg-orange-100 text-orange-800 border-orange-200",
    category: "mammals",
    roleDescription:
      "El gato montés es un depredador clave para el equilibrio del ecosistema. Controla poblaciones de roedores, liebres y otras especies que pueden actuar como plagas agrícolas, ayudando a mantener la biodiversidad del predio.",
  },
  {
    name: "Chancho majano",
    scientific: "Tayassu pecari",
    image: "chanchoMajano.png",
    records: 1,
    badge: "Ingeniero ecosistémico",
    badgeClassName: "bg-emerald-100 text-emerald-800 border-emerald-200",
    category: "mammals",
    roleDescription:
      "El chancho majano o tropero cumple un rol importante como ingeniero ecosistémico, dispersor de semillas y presa para grandes depredadores como el puma. Al remover el suelo, favorece la fertilidad, la permeabilidad y la dinámica del bosque.",
  },
  {
    name: "Chancho rosillo",
    scientific: "Dicotyles tajacu",
    image: "chanchoRosillo.png",
    records: 1,
    badge: "Regenerador",
    badgeClassName: "bg-green-100 text-green-800 border-green-200",
    category: "mammals",
    roleDescription:
      "El chancho rosillo o pecarí de collar contribuye a la regeneración forestal mediante la dispersión de semillas. También modifica el paisaje al excavar el suelo, airear la tierra, reciclar nutrientes y servir de presa para grandes carnívoros.",
  },
  {
    name: "Gualacato",
    scientific: "Euphractus sexcinctus",
    image: "gualacato.png",
    records: 1,
    badge: "Aireador del suelo",
    badgeClassName: "bg-lime-100 text-lime-800 border-lime-200",
    category: "mammals",
    roleDescription:
      "El gualacato ayuda a mantener el equilibrio ambiental al remover y airear el suelo con sus excavaciones. También controla invertebrados, dispersa semillas, recicla nutrientes y sus madrigueras abandonadas pueden servir de refugio para otras especies.",
  },
],
    classifications: [
      {
        label: "VU",
        title: "Vulnerable",
        description:
          "Indica que la especie enfrenta riesgo de disminución o amenaza si su hábitat se deteriora. En este predio aplica especialmente al oso bandera y al chancho majano.",
        className: "border-red-200 bg-red-50 text-red-800",
      },
      {
        label: "Sensible",
        title: "Especie sensible",
        description:
          "Son especies que dependen de buena cobertura, agua y baja perturbación. Su presencia ayuda a interpretar la salud del paisaje productivo.",
        className: "border-yellow-200 bg-yellow-50 text-yellow-800",
      },
      {
        label: "Depredador Top",
        title: "Regulador del ecosistema",
        description:
          "Son especies ubicadas en la parte alta de la cadena alimentaria. Ayudan a mantener el balance natural y son indicadores de funcionalidad ecológica.",
        className: "border-[#5B6B3C]/20 bg-[#F4F6F0] text-[#5B6B3C]",
      },
    ],
    speciesGroups: [
      {
        category: "mammals",
        title: "Mamíferos",
        countLabel: "11 spp.",
        icon: "pawPrint",
        iconClassName: "text-[#5B6B3C]",
        rows: [
          {
            name: "Mara chaqueña",
            count: "14",
            barWidth: "100%",
            countClassName: "text-[#B8962A]",
          },
          {
            name: "Corzuela",
            count: "8",
            barWidth: "57%",
            countClassName: "text-[#B8962A]",
          },
          {
            name: "Majano",
            count: "8",
            barWidth: "57%",
            countClassName: "text-[#B8962A]",
          },
          {
            name: "Oso Bandera",
            count: "8",
            barWidth: "57%",
            countClassName: "text-[#B8962A]",
          },
          {
            name: "Zorro patas amarillas",
            count: "6",
            barWidth: "43%",
            countClassName: "text-[#5B6B3C]",
          },
          {
            name: "Gato montés",
            count: "1",
            barWidth: "7%",
            countClassName: "text-[#999999]",
          },
          {
            name: "Gualacato",
            count: "1",
            barWidth: "7%",
            countClassName: "text-[#999999]",
          },
          {
            name: "Puma",
            count: "1",
            barWidth: "7%",
            countClassName: "text-[#999999]",
          },
          {
            name: "Quirquincho Bolita",
            count: "1",
            barWidth: "7%",
            countClassName: "text-[#999999]",
          },
          {
            name: "Rosillo",
            count: "1",
            barWidth: "7%",
            countClassName: "text-[#999999]",
          },
          {
            name: "Zorrino",
            count: "1",
            barWidth: "7%",
            countClassName: "text-[#999999]",
          },
        ],
      },
      {
        category: "birds",
        title: "Aves",
        countLabel: "12 spp.",
        icon: "bird",
        iconClassName: "text-[#D4B03A]",
        rows: [
          {
            name: "Torcaza",
            count: "16",
            barWidth: "100%",
            countClassName: "text-[#B8962A]",
          },
          {
            name: "Garza amarilla",
            count: "12",
            barWidth: "75%",
            countClassName: "text-[#B8962A]",
          },
          {
            name: "Bandurria",
            count: "11",
            barWidth: "69%",
            countClassName: "text-[#B8962A]",
          },
          {
            name: "Bandurria Mora",
            count: "9",
            barWidth: "56%",
            countClassName: "text-[#B8962A]",
          },
          {
            name: "Chajá",
            count: "8",
            barWidth: "50%",
            countClassName: "text-[#B8962A]",
          },
          {
            name: "Garza colorada",
            count: "7",
            barWidth: "44%",
            countClassName: "text-[#B8962A]",
          },
          {
            name: "Garza tigre",
            count: "7",
            barWidth: "44%",
            countClassName: "text-[#B8962A]",
          },
          {
            name: "Chuña",
            count: "6",
            barWidth: "38%",
            countClassName: "text-[#B8962A]",
          },
          {
            name: "Tero tero",
            count: "3",
            barWidth: "19%",
            countClassName: "text-[#B8962A]",
          },
          {
            name: "Cacharpolla",
            count: "1",
            barWidth: "6%",
            countClassName: "text-[#999999]",
          },
          {
            name: "Gallareta",
            count: "1",
            barWidth: "6%",
            countClassName: "text-[#999999]",
          },
          {
            name: "Pala pala",
            count: "1",
            barWidth: "6%",
            countClassName: "text-[#999999]",
          },
        ],
      },
      {
        category: "reptiles",
        title: "Reptiles",
        countLabel: "1 spp.",
        icon: "snail",
        iconClassName: "text-[#555555]",
        rows: [
          {
            name: "Iguana colorada",
            count: "1",
            barWidth: "100%",
            countClassName: "text-[#777777]",
          },
        ],
      },
    ],
    whyItMatters: {
      title: "¿Por qué importa?",
      description:
        "La presencia del puma, el oso bandera y el chancho majano indica que el predio mantiene cobertura, agua, alimento y conectividad suficientes para sostener procesos ecológicos esenciales dentro del paisaje chaqueño.",
    },
  },
  location: {
    eyebrow: "Ubicación",
    title: "EL MAPA DE LA VIDA",
    description:
      "Cada punto en nuestro mapa donde producimos es más que un dato; es un árbol que sigue en pie, una fuente de agua que no se agota y un refugio donde la vida silvestre no tiene miedo.",
    mapImage: "mapa-la-ahogada.png",
    mapAlt: "Mapa de ubicación del Predio La Ahogada",
    coordinates: "Cañada Bolívar",
    elevation: "388-390 msnm",
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
        title: "Trampas cámara",
        description:
          "Se utilizaron 8 trampas cámara durante 30 días de muestreo para registrar fauna de hábitos diurnos y nocturnos.",
        icon: "camera",
        tone: "gold",
        borderClassName: "border-l-[#E5C44D]",
      },
      {
        title: "Rotación de potreros",
        description:
          "El sistema de rotación permite la regeneración natural de la vegetación y reduce la presión sobre el campo.",
        icon: "repeat",
        tone: "olive",
        borderClassName: "border-l-[#5B6B3C]",
      },
      {
        title: "Aguadas y corredores",
        description:
          "Las aguadas naturales y franjas de bosque funcionan como refugios y rutas de desplazamiento para la fauna silvestre.",
        icon: "droplets",
        tone: "blue",
        borderClassName: "border-l-[#7d9159]",
      },
    ],
  },
  gallery: {
    eyebrow: "Explora el predio",
    title: "UN PAISAJE CHAQUEÑO QUE SIGUE VIVO",
    description:
      "Acompáñanos a mirar lo que nosotros vemos y sentimos cada día.",
    rows: [
      {
        title: "Fauna registrada",
        accentClassName: "bg-[#7d9159]",
        items: [
          {
            title: "Oso Bandera",
            description: "Myrmecophaga tridactyla · 8 registros",
            image: "oso-bandera.jpg",
          },
          {
            title: "Mara chaqueña",
            description: "Dolichotis salinicola · 14 registros",
            image: "mara-chaquena.jpg",
          },
          {
            title: "Torcaza",
            description: "Zenaida auriculata · 16 registros",
            image: "torcaza.jpg",
          },
          {
            title: "Iguana colorada",
            description: "Salvator rufescens · 1 registro",
            image: "iguana-colorada.jpg",
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
      { value: "24", label: "Especies" },
      { value: "133", label: "Registros" },
      { value: "1°", label: "Inventario" },
    ],
    copyright: "© 2025 Predio La Ahogada · Villa Montes, Tarija",
  },
} satisfies PredioData;
