# eventoslinco.com

Landing de **LINCO** — Vue 3 + Vite + Tailwind + Vue Router.

## Desarrollo

```bash
npm install
npm run dev
```

Abre la URL que muestra Vite (por defecto `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Variables de entorno

Copia `.env.example` a `.env` y ajusta los valores:

- `VITE_SITE_URL` — URL del sitio en producción
- `VITE_WHATSAPP_NUMBER` — número sin `+` (ej. `525568671815`)
- `VITE_CONTACT_EMAIL`
- `VITE_ANALYTICS_URL` — URL del script de analytics (vacío = desactivado)
- `VITE_ANALYTICS_SITE_ID` — ID del sitio en Umami (opcional; no aplica a Plausible)

## Estructura

- `src/data/` — textos, servicios, paquetes y ciudades (JSON)
- `src/views/` — una vista por ruta
- `src/components/layout/` — header, footer y layout global
- `src/components/home/` — secciones del home (hero, pilares, teasers, proceso, CTA)
- `src/components/splash/` — pantalla de carga (fondo `backgound.png`, tipografías Lastica/CuteFont, responsive)
- `src/components/galeria/` — grid de galería
- `src/composables/` — `useWhatsApp`, `usePageSeo` / `useSeo`, `useAnalytics`
- `public/assets/` — fuentes y logos
- `public/robots.txt`, `public/sitemap.xml` — SEO
- `legacy/` — respaldo del splash HTML estático original

## Analytics (Umami / Plausible)

La carga es **condicional**: si `VITE_ANALYTICS_URL` está vacío, no se inyecta ningún script y el sitio funciona igual (sin errores en consola).

El composable `src/composables/useAnalytics.ts` monta el script en `App.vue`. También expone `trackEvent()` para eventos personalizados (Umami o Plausible).

### Configurar Umami (recomendado)

1. Desplegar [Umami](https://umami.is/) (self-hosted o Umami Cloud).
2. En el panel, crear el sitio **eventoslinco.com** y copiar el **Website ID**.
3. En Vercel (o en `.env` local), definir:
   - `VITE_ANALYTICS_URL` → URL del script, ej. `https://analytics.tudominio.com/script.js`
   - `VITE_ANALYTICS_SITE_ID` → UUID del sitio en Umami
4. Hacer redeploy. En Umami deberían aparecer visitas y rutas de la SPA.

### Plausible

Solo define `VITE_ANALYTICS_URL` con la URL del script de tu dominio en Plausible. No uses `VITE_ANALYTICS_SITE_ID`.

## Deploy en Vercel

El proyecto ya está pensado para Vercel. `vercel.json` reescribe todas las rutas a `index.html` para que el refresh en `/servicios`, `/contacto`, etc. no devuelva 404.

| Ajuste | Valor |
|--------|--------|
| Build command | `npm run build` |
| Output directory | `dist` |
| Framework | Vite (auto-detectado) |

### Pasos

1. Repo conectado a Vercel.
2. Variables de entorno en **Project → Settings → Environment Variables** (mismas que `.env.example`).
3. Dominio **eventoslinco.com** apuntando a Vercel (DNS).
4. Tras cada push a la rama de producción, Vercel ejecuta build y publica `dist`.
5. Verificar HTTPS y abrir `/servicios` directamente en el navegador (debe cargar la SPA, no 404).

## Rutas

- Pantalla de carga en **cada recarga** del sitio (cualquier URL); luego queda la ruta actual (`/inicio`, `/contacto`, etc.)
- `/` — redirige a `/inicio`
- `/inicio`, `/servicios`, `/paquetes`, etc. — con header, footer y botón flotante de WhatsApp

## Pantalla de carga (legacy)

El splash original con animación de ondas está en `legacy/index.static.html`.

## Plan de implementación

Ver `PLAN-LANDING.md` para el checklist completo.
