import type { PredioData } from "@/types/predio";

export const monteCristoPredio = {
  slug: "montecristo",
  name: "Montecristo",
  brandSubtitle: "Origen Verificado",
  assetPath: "/assets/montecristo",
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
    backgroundImage: "https://www.worldanimalprotection.es/cdn-cgi/image/width=800,format=auto,fit=cover/globalassets/shared-regional-blocks/int-and-latam/animal-facts/maned-wolves/1037456-meta.png",
    backgroundAlt: "Puma registrado mediante trampa cámara en el predio Montecristo",
    title: {
      leading: "TU HISTORIA Y LA DEL",
      highlight: "CHACO",
      trailing: "HOY SE CONSERVAN JUNTAS",
    },
    description:
      "Tus manos sostienen el legado del predio Montecristo. Este producto nace de un paisaje ganadero donde la producción convive con el bosque, las aguadas y una comunidad diversa de mamíferos silvestres chaqueños.",
    metrics: [
      {
        icon: "trees",
        value: "3.167",
        label: "Hectáreas",
        iconClassName: "text-[#a4b486]",
      },
      {
        icon: "pawPrint",
        value: "14",
        label: "Mamíferos",
        iconClassName: "text-[#E5C44D]",
      },
      {
        icon: "camera",
        value: "PPP",
        label: "Monitoreo",
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
      "Montecristo combina ganadería extensiva, bosque nativo, potreros y cuerpos de agua que sostienen el desplazamiento, refugio y alimentación de mamíferos silvestres del Chaco.",
    primaryMetric: {
      value: "3.167",
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
        description: "Microhábitats críticos para la fauna silvestre",
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
          value: "Moderada-alta",
          width: "82%",
          description:
            "El predio presenta vegetación adaptada a la escasez hídrica y altas temperaturas, con bosques bajos y sectores que funcionan como refugio para la fauna silvestre.",
        },
        {
          label: "Conectividad ecológica",
          value: "Importante",
          width: "86%",
          description:
            "Los parches de bosque, corredores naturales y zonas cercanas a cuerpos de agua permiten que los mamíferos continúen desplazándose dentro del predio.",
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
    totalSpecies: 14,
    categories: [
      {
        id: "mammals",
        label: "Mamíferos",
        speciesCount: 14,
        icon: "pawPrint",
        iconClassName: "text-[#5B6B3C]",
      },
    ],
    featuredSpecies: [
      {
        name: "Chancho majano",
        scientific: "Tayassu pecari",
        image: "chancho-majano.png",
        records: 44,
        badge: "Ingeniero ecosistémico",
        badgeClassName: "bg-[#5B6B3C] text-white border-[#5B6B3C]",
        category: "mammals",
        roleDescription:
          "El chancho majano o tropero es crucial como ingeniero ecosistémico, dispersor de semillas y presa fundamental para depredadores tope como el jaguar y el puma. Además, remueve el suelo, favoreciendo su fertilidad y permeabilidad.",
      },
      {
        name: "Corzuela",
        scientific: "Subulo gouazoubira",
        image: "corzuela.png",
        records: 10,
        badge: "Dispersora",
        badgeClassName: "bg-[#FDF8D8] text-[#B8962A] border-yellow-200",
        category: "mammals",
        roleDescription:
          "La presencia de la corzuela muestra que el monte del predio todavía se encuentra sano. Dispersa semillas durante su recorrido, ayudando a que el bosque se regenere y mantenga sombra y humedad.",
      },
      {
        name: "Mara chaqueña",
        scientific: "Dolichotis salinicola",
        image: "mara-chaquena.png",
        records: 39,
        badge: "Presa clave",
        badgeClassName: "bg-[#FDF8D8] text-[#B8962A] border-yellow-200",
        category: "mammals",
        roleDescription:
          "La mara chaqueña, también conocida como conejo de los palos, es fundamental como presa para depredadores medianos y grandes. También dispersa semillas, influye en la vegetación local y airea el suelo mediante sus madrigueras.",
      },
      {
        name: "Zorro patas amarillas",
        scientific: "Lycalopex gymnocercus",
        image: "zorro-patas-amarillas.png",
        records: 25,
        badge: "Controlador",
        badgeClassName: "bg-[#E5EADF] text-[#5B6B3C] border-[#D8DEC8]",
        category: "mammals",
        roleDescription:
          "El zorro patas amarillas es clave para el equilibrio ecológico como controlador de plagas, especialmente roedores e insectos. También dispersa semillas, contribuye a la regeneración forestal y regula la cadena trófica como carnívoro de rango medio.",
      },
      {
        name: "Zorrino",
        scientific: "Conepatus chinga",
        image: "zorrino.png",
        records: 9,
        badge: "Depredador intermedio",
        badgeClassName: "bg-[#E5EADF] text-[#5B6B3C] border-[#D8DEC8]",
        category: "mammals",
        roleDescription:
          "El zorrino cumple un rol ecológico relevante como depredador intermedio oportunista. Contribuye al control de insectos y pequeños vertebrados, además de airear el suelo mediante su actividad de forrajeo.",
      },
      {
        name: "Quirquincho bolita",
        scientific: "Tolypeutes matacus",
        image: "quirquincho-bolita.png",
        records: 1,
        badge: "Casi amenazado",
        badgeClassName: "bg-yellow-100 text-yellow-800 border-yellow-200",
        category: "mammals",
        roleDescription:
          "El quirquincho bolita es importante como controlador natural de plagas, especialmente hormigas y termitas. También dispersa semillas y oxigena el suelo mediante sus cuevas. Es nativo del Gran Chaco y destaca por su defensa de enrollarse.",
      },
      {
        name: "Comadreja",
        scientific: "Didelphis albiventris",
        image: "comadreja.png",
        records: 1,
        badge: "Aliado ecológico",
        badgeClassName: "bg-[#E5EADF] text-[#5B6B3C] border-[#D8DEC8]",
        category: "mammals",
        roleDescription:
          "La comadreja overa es un aliado ecológico clave como controlador natural de plagas, incluyendo roedores, insectos y serpientes. También dispersa semillas y ayuda a regenerar ambientes rurales.",
      },
      {
        name: "Gato montés",
        scientific: "Leopardus geoffroyi",
        image: "gato-montes.png",
        records: 1,
        badge: "Depredador",
        badgeClassName: "bg-[#5B6B3C] text-white border-[#5B6B3C]",
        category: "mammals",
        roleDescription:
          "El gato montés es un depredador clave que ayuda a mantener la biodiversidad y el equilibrio ecosistémico. Controla poblaciones de roedores, liebres y especies que pueden actuar como plagas agrícolas.",
      },
      {
        name: "Gualacato",
        scientific: "Euphractus sexcinctus",
        image: "gualacato.png",
        records: 3,
        badge: "Aireador del suelo",
        badgeClassName: "bg-[#FDF8D8] text-[#B8962A] border-yellow-200",
        category: "mammals",
        roleDescription:
          "El gualacato es clave para el ecosistema porque airea y remueve el suelo con sus excavaciones, controla plagas de invertebrados, dispersa semillas y recicla nutrientes mediante su dieta omnívora y carroñera.",
      },
      {
        name: "Mayhuato",
        scientific: "Procyon cancrivorus",
        image: "mayhuato.png",
        records: 1,
        badge: "Ribereño",
        badgeClassName: "bg-blue-50 text-blue-800 border-blue-200",
        category: "mammals",
        roleDescription:
          "El mayhuato es clave en ecosistemas húmedos y ribereños como dispersor de semillas, controlador biológico de pequeños animales y parte de la cadena trófica. Su dieta variada ayuda a la salud forestal y acuática.",
      },
      {
        name: "Oso melero",
        scientific: "Tamandua tetradactyla",
        image: "oso-melero.png",
        records: 1,
        badge: "Bioindicador",
        badgeClassName: "bg-[#E5EADF] text-[#5B6B3C] border-[#D8DEC8]",
        category: "mammals",
        roleDescription:
          "El oso melero es fundamental para el equilibrio ecológico al controlar poblaciones de hormigas y termitas. Además, airea el suelo al excavar, dispersa nutrientes, actúa como bioindicador de salud ambiental y ayuda a la regeneración forestal.",
      },
      {
        name: "Chancho Rosillo",
        scientific: "Dicotyles tajacu",
        image: "chancho-rosillo.png",
        records: 3,
        badge: "Regenerador",
        badgeClassName: "bg-[#FDF8D8] text-[#B8962A] border-yellow-200",
        category: "mammals",
        roleDescription:
          "El chancho rosillo o pecarí de collar es clave como dispersor de semillas, regenerador forestal y modificador del paisaje. Al excavar el suelo, airea la tierra y recicla nutrientes; además, es presa importante para grandes carnívoros.",
      },
      {
        name: "Puma",
        scientific: "Puma concolor",
        image: "puma.png",
        records: 12,
        badge: "Depredador Top",
        badgeClassName: "bg-[#5B6B3C] text-white border-[#5B6B3C]",
        category: "mammals",
        roleDescription:
          "El puma actúa como regulador ecológico y puede ayudar a prevenir la propagación de enfermedades al eliminar presas débiles o enfermas. Como depredador tope, controla poblaciones de mamíferos como zorros, chanchos de monte y corzuelas.",
        icon: "flame",
      },
      {
        name: "Oso bandera",
        scientific: "Myrmecophaga tridactyla",
        image: "oso-bandera.png",
        records: 14,
        badge: "VU",
        badgeClassName: "bg-red-100 text-red-800 border-red-200",
        category: "mammals",
        roleDescription:
          "El oso bandera es crucial para el equilibrio ecológico como controlador biológico de hormigas y termitas. Además, airea suelos al excavar, dispersa semillas y actúa como especie sombrilla. Está clasificado como vulnerable.",
      },
    ],
    classifications: [
      {
        label: "VU",
        title: "Vulnerable",
        description:
          "Indica que la especie enfrenta riesgo de disminución si su hábitat se deteriora. En este predio aplica especialmente al oso bandera.",
        className: "border-red-200 bg-red-50 text-red-800",
      },
      {
        label: "Depredador Top",
        title: "Regulador del ecosistema",
        description:
          "Son especies ubicadas en la parte alta de la cadena alimentaria. Ayudan a mantener el balance natural controlando poblaciones de presas y animales medianos.",
        className: "border-[#5B6B3C]/20 bg-[#F4F6F0] text-[#5B6B3C]",
      },
      {
        label: "Aliado ecológico",
        title: "Función positiva en el predio",
        description:
          "Son especies que aportan al equilibrio del ecosistema mediante dispersión de semillas, control de plagas, aireación del suelo, regeneración forestal o reciclaje de nutrientes.",
        className: "border-yellow-200 bg-yellow-50 text-yellow-800",
      },
    ],
    speciesGroups: [
      {
        category: "mammals",
        title: "Mamíferos aliados del predio",
        countLabel: "14 spp.",
        icon: "pawPrint",
        iconClassName: "text-[#5B6B3C]",
        rows: [
          {
            name: "Chancho majano",
            count: "44",
            barWidth: "100%",
            countClassName: "text-[#B8962A]",
          },
          {
            name: "Mara chaqueña",
            count: "39",
            barWidth: "89%",
            countClassName: "text-[#B8962A]",
          },
          {
            name: "Zorro patas amarillas",
            count: "25",
            barWidth: "57%",
            countClassName: "text-[#5B6B3C]",
          },
          {
            name: "Oso bandera",
            count: "14",
            barWidth: "32%",
            countClassName: "text-[#B8962A]",
          },
          {
            name: "Puma",
            count: "12",
            barWidth: "27%",
            countClassName: "text-[#5B6B3C]",
          },
          {
            name: "Corzuela",
            count: "10",
            barWidth: "23%",
            countClassName: "text-[#B8962A]",
          },
          {
            name: "Zorrino",
            count: "9",
            barWidth: "20%",
            countClassName: "text-[#B8962A]",
          },
          {
            name: "Gualacato",
            count: "3",
            barWidth: "7%",
            countClassName: "text-[#999999]",
          },
          {
            name: "Chancho Rosillo",
            count: "3",
            barWidth: "7%",
            countClassName: "text-[#999999]",
          },
          {
            name: "Comadreja",
            count: "1",
            barWidth: "2%",
            countClassName: "text-[#999999]",
          },
          {
            name: "Gato montés",
            count: "1",
            barWidth: "2%",
            countClassName: "text-[#999999]",
          },
          {
            name: "Mayhuato",
            count: "1",
            barWidth: "2%",
            countClassName: "text-[#999999]",
          },
          {
            name: "Oso melero",
            count: "1",
            barWidth: "2%",
            countClassName: "text-[#999999]",
          },
          {
            name: "Quirquincho bolita",
            count: "1",
            barWidth: "2%",
            countClassName: "text-[#999999]",
          },
        ],
      },
    ],
    whyItMatters: {
      title: "¿Por qué importa?",
      description:
        "La presencia conjunta de depredadores, dispersores de semillas, controladores de plagas, aireadores del suelo y especies bioindicadoras muestra que Montecristo mantiene una red ecológica funcional dentro del paisaje productivo chaqueño.",
    },
  },
  location: {
    eyebrow: "Ubicación",
    title: "EL MAPA DE LA VIDA",
    description:
      "Cada punto en nuestro mapa donde producimos es más que un dato; es un árbol que sigue en pie, una fuente de agua que no se agota y un refugio donde la vida silvestre no tiene miedo.",
    mapImage: "mapa-montecristo.png",
    mapAlt: "Mapa de ubicación del Predio Montecristo",
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
          "Las fotografías de los mamíferos fueron obtenidas mediante trampas cámara instaladas en el marco del Proyecto PPP.",
        icon: "camera",
        tone: "gold",
        borderClassName: "border-l-[#E5C44D]",
      },
      {
        title: "Fauna aliada",
        description:
          "Las especies registradas cumplen funciones como dispersión de semillas, control de plagas, aireación del suelo y regulación de la cadena trófica.",
        icon: "pawPrint",
        tone: "olive",
        borderClassName: "border-l-[#5B6B3C]",
      },
      {
        title: "Bosque y producción",
        description:
          "El predio mantiene vegetación chaqueña y condiciones que permiten la convivencia entre producción ganadera y fauna silvestre.",
        icon: "trees",
        tone: "olive",
        borderClassName: "border-l-[#7d9159]",
      },
    ],
  },
  gallery: {
    eyebrow: "Explora el predio",
    title: "UN RINCON DEL MUNDO QUE AHORA ES TUYO",
    description:
      "Fotos obtenidas mediante trampas cámara instaladas en el marco del Proyecto PPP.",
    rows: [
      {
        title: "Mamíferos registrados",
        accentClassName: "bg-[#7d9159]",
        items: [
          {
            title: "Chancho majano",
            description: "Tayassu pecari",
            image: "1.jpg",
          },
          {
            title: "Corzuela",
            description: "Subulo gouazoubira",
            image: "2.jpg",
          },
          {
            title: "Mara chaqueña",
            description: "Dolichotis salinicola",
            image: "3.jpg",
          },
          {
            title: "Zorro patas amarillas",
            description: "Lycalopex gymnocercus",
            image: "4.jpg",
          },
          {
            title: "Zorrino",
            description: "Conepatus chinga",
            image: "5.jpg",
          },
          {
            title: "Quirquincho bolita",
            description: "Tolypeutes matacus",
            image: "6.jpg",
          },
          {
            title: "Comadreja",
            description: "Didelphis albiventris",
            image: "7.jpg",
          },
          {
            title: "Gato montés",
            description: "Leopardus geoffroyi",
            image: "8.jpg",
          },
          {
            title: "Gualacato",
            description: "Euphractus sexcinctus",
            image: "9.jpg",
          },
          {
            title: "Mayhuato",
            description: "Procyon cancrivorus",
            image: "10.jpg",
          },
          {
            title: "Oso melero",
            description: "Tamandua tetradactyla",
            image: "11.jpg",
          },
          {
            title: "Chancho Rosillo",
            description: "Dicotyles tajacu",
            image: "12.jpg",
          },
          {
            title: "Puma",
            description: "Puma concolor",
            image: "13.jpg",
          },
          {
            title: "Oso bandera",
            description: "Myrmecophaga tridactyla",
            image: "14.jpg",
          },
        ],
      },
    ],
  },
  footer: {
    title: "GRACIAS POR SER PARTE DEL CAMBIO",
    description:
      "Al elegir este producto, contribuyes a que la historia de este ecosistema chaqueño siga escribiéndose con producción, bosque, aguadas y biodiversidad.",
    metrics: [
      { value: "14", label: "Mamíferos" },
      { value: "PPP", label: "Proyecto" },
      { value: "1°", label: "Inventario" },
    ],
    copyright: "© 2025 Predio Montecristo · Villa Montes, Tarija",
  },
} satisfies PredioData;