# Media real del estudio

Esta carpeta está pensada para reemplazar los SVG temporales por material real de Inka Tatoo.

## Estructura sugerida

- `public/media/hero/`
  - video de portada del inicio, por ejemplo: `hero-video.mp4`
  - imagen póster opcional, por ejemplo: `hero-poster.jpg`
- `public/media/gallery/`
  - fotos reales de trabajos terminados
- `public/media/team/`
  - retratos o fotos del equipo

## Cómo se usan en Next.js

Todo lo que esté dentro de `public/` se sirve desde la raíz del sitio.

Ejemplos:

- `public/media/hero/hero-video.mp4` → `/media/hero/hero-video.mp4`
- `public/media/gallery/tatuaje-01.jpg` → `/media/gallery/tatuaje-01.jpg`
- `public/media/team/artista-01.jpg` → `/media/team/artista-01.jpg`

## Siguiente paso recomendado

Cuando tengan el video e imágenes finales, puedo conectar esta carpeta directamente al hero y a la galería para que el sitio use el material real en vez de los assets temporales.
