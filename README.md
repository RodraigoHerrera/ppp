# Predio Los Corrales — Next.js + TypeScript + Tailwind

Migración del HTML/CSS/JS original a una página real de Next.js usando componentes TSX, estado de React y Tailwind CSS.

## Qué incluye

- `app/page.tsx`: página recreada como componentes React/TypeScript. No usa `String.raw`, `pageHtml` ni `dangerouslySetInnerHTML`.
- `app/layout.tsx`: configuración base, metadata, fuente Inter e Iconify.
- `app/globals.css`: estilos personalizados migrados desde el CSS original.
- `tailwind.config.ts`: paleta personalizada (`olive`, `sand`, `gold`, `ink`).
- `public/assets/animales/`: carpeta lista para copiar tus imágenes.

## Ejecutar

```bash
npm install
npm run dev
```

Luego abre:

```bash
http://localhost:3000
```

## Imágenes

Copia tus imágenes originales dentro de:

```txt
public/assets/animales/
```

Mantén los mismos nombres de archivo usados en el HTML original, por ejemplo:

- `puma_chaco_bg.png`
- `Puma.jpg`
- `Oso bandera.jpg`
- `mapa.jpg`
- `logo-PPP(principal).png`
