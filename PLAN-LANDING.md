# Plan de trabajo — Landing LINCO

Documento maestro con todos los pasos, decisiones y contenido base para implementar el sitio **eventoslinco.com**.

---

## Tabla de contenidos

1. [Resumen del proyecto](#1-resumen-del-proyecto)
2. [Marca y contenido](#2-marca-y-contenido)
3. [Mapa del sitio](#3-mapa-del-sitio)
4. [Secciones y textos](#4-secciones-y-textos)
5. [Paquetes](#5-paquetes)
6. [Servicios por categoría](#6-servicios-por-categoría)
7. [Contacto y formulario](#7-contacto-y-formulario)
8. [Diseño y UX](#8-diseño-y-ux)
9. [Stack técnico](#9-stack-técnico)
10. [Estructura de carpetas](#10-estructura-de-carpetas)
11. [Componentes Vue](#11-componentes-vue)
12. [SEO y legal](#12-seo-y-legal)
13. [Analytics](#13-analytics)
14. [Deploy en Vercel](#14-deploy-en-vercel)
15. [Fases de implementación](#15-fases-de-implementación)
16. [Checklist paso a paso](#16-checklist-paso-a-paso)
17. [Pendientes de confirmación](#17-pendientes-de-confirmación)

---

## 1. Resumen del proyecto

| Aspecto | Decisión |
|--------|----------|
| Marca | **LINCO** (sin eslogan corporativo fijo) |
| Dominio | eventoslinco.com |
| Público | Todo tipo de eventos (corporativo, social, convenciones, etc.) |
| Cobertura | Todo México; foco: CDMX, Edomex, Monterrey, Querétaro, Veracruz, Guadalajara |
| Precios en web | **No** — siempre dirigir a contacto con ventas |
| Idioma | Solo español |
| Referencias de diseño | Ninguna — look actual + profesionalismo |
| Fotos / video | Hay material real; usar **placeholders** hasta integrar fotos finales |
| Redes sociales | No incluir por ahora |
| Pantalla de carga | **Sí** — se mantiene al entrar al sitio |
| Hosting | Vercel (ya deployado) |

---

## 2. Marca y contenido

### Diferenciador (mensaje principal)

> **Un solo proveedor para tu evento completo:** audio, iluminación, mobiliario y personal profesional.

### Pilares de marca (usar en Nosotros / Home)

1. **Todo en un solo contacto** — Sin coordinar múltiples proveedores.
2. **Cobertura nacional** — Operación en las principales ciudades de México.
3. **Equipo + personal** — No solo renta: meseros, MC y DJ con estándar profesional.
4. **Corporativo y social** — Convenciones, lanzamientos, bodas, XV años, etc.
5. **Cotización personalizada** — Sin precios públicos; asesoría según fecha, ciudad y escala.

### Frase de apoyo para hero (propuesta)

> *Un solo proveedor para tu evento completo.*

### Texto “Nosotros” (borrador)

> LINCO es tu aliado para eventos en todo México. Rentamos audio profesional, iluminación, pantallas, mobiliario y brindamos el personal que tu celebración necesita. Operamos con foco en CDMX, Estado de México, Monterrey, Querétaro, Veracruz, Guadalajara y principales ciudades. Cuéntanos tu evento y armamos la solución a tu medida.

### Contacto comercial

| Campo | Valor |
|-------|--------|
| Responsable | Roberto Colin |
| Teléfono / WhatsApp | 55 6867 1815 |
| Email | robertocolin19@gmail.com |
| Horario | 9:00 a 21:00 hrs (todos los días) |

### Identidad visual existente

- Fondo negro `#000`
- Acento azul `#004aad`
- Tipografías: **Lastica** (títulos), **CuteFont** (acentos / taglines)
- Logos: `assets/logos/logo_white.png`, `assets/logos/logo_black.png`
- Animación de ondas de audio en splash (ya implementada en HTML estático)

---

## 3. Mapa del sitio

```
/                           → Pantalla de carga (splash)
/inicio                     → Home principal
/servicios                  → Catálogo por 3 categorías
/servicios/:slug            → Detalle por servicio (Fase 2)
/paquetes                   → Paquetes sugeridos (sin precios)
/nosotros                   → Historia, diferenciador, cobertura
/galeria                    → Galería con placeholders
/contacto                   → Formulario + datos de Roberto
/aviso-de-privacidad        → Legal
/terminos-y-condiciones     → Legal
```

### Flujo de entrada

1. Usuario entra a `/`
2. Se muestra **LoadingSplash** (animación de ondas + marca LINCO)
3. Al terminar animación / tiempo / clic “Entrar” → redirige a `/inicio`

---

## 4. Secciones y textos

### 4.1 Home (`/inicio`)

| Sección | Contenido |
|---------|-----------|
| **Hero** | Título, subtítulo, CTA WhatsApp + CTA secundario “Ver servicios” |
| **Diferenciador** | 3–5 pilares en cards o lista animada |
| **Servicios (resumen)** | 3 bloques con enlace a `/servicios` |
| **Paquetes (teaser)** | 3–4 cards destacadas + enlace a `/paquetes` |
| **Proceso** | 4 pasos: cuéntanos → cotización → montaje → desmontaje |
| **Cobertura** | Ciudades destacadas + “todo México” |
| **Galería (teaser)** | 4–6 imágenes placeholder + enlace a `/galeria` |
| **CTA final** | WhatsApp + teléfono + horario |

**Hero — textos**

- **Título:** Eventos completos con un solo proveedor
- **Subtítulo:** Audio, iluminación, mobiliario y personal profesional en CDMX, Edomex, Monterrey, Querétaro, Veracruz, Guadalajara y todo México.
- **CTA primario:** Cotizar por WhatsApp
- **CTA secundario:** Ver servicios

### 4.2 Servicios (`/servicios`)

Tres categorías con cards individuales (ver [sección 6](#6-servicios-por-categoría)).

CTA al final de cada categoría y global: **Solicitar cotización** → `/contacto`.

### 4.3 Paquetes (`/paquetes`)

Listado de paquetes (ver [sección 5](#5-paquetes)). Nota legal al pie:

> *Los paquetes son referencias. Cada evento se cotiza según fecha, ciudad, invitados y logística.*

### 4.4 Nosotros (`/nosotros`)

- Texto institucional (borrador en sección 2)
- Pilares de marca
- Mapa o lista de ciudades con cobertura
- CTA contacto

### 4.5 Galería (`/galeria`)

- Grid responsive de imágenes placeholder (eventos, audio, luces, banquete)
- Lightbox (Fase 2)
- Sin redes sociales

### 4.6 Contacto (`/contacto`)

- Datos de Roberto Colin
- Formulario (ver [sección 7](#7-contacto-y-formulario))
- Botones: WhatsApp, llamar, email
- Horario visible

### 4.7 Proceso (“Cómo trabajamos”) — en Home y/o Nosotros

1. **Cuéntanos tu evento** — Fecha, ciudad, tipo y número aproximado de invitados.
2. **Cotización personalizada** — Ventas arma la propuesta según tus necesidades.
3. **Montaje y operación** — Equipo y personal el día del evento.
4. **Desmontaje** — Salida ordenada al terminar.

### 4.8 CTA global (footer y bloques)

> ¿Listo para tu evento? Habla con ventas de 9:00 a 21:00 hrs.

### 4.9 Header (todas las páginas)

- Logo (blanco en fondo oscuro)
- Nav: Inicio, Servicios, Paquetes, Nosotros, Galería, Contacto
- Botón destacado: WhatsApp
- Menú hamburguesa en móvil

### 4.10 Footer (todas las páginas)

- Logo + descripción breve
- Enlaces de navegación
- Contacto (tel, email, horario)
- Ciudades destacadas
- Enlaces legales: Privacidad, Términos
- © LINCO + año

### 4.11 WhatsApp flotante (FAB)

- Visible en todas las páginas excepto splash (opcional también en splash)
- Enlace: `https://wa.me/525568671815`
- Mensaje predeterminado opcional: *Hola, me interesa cotizar un evento con LINCO.*

---

## 5. Paquetes

Sin precios. Cada paquete enlaza a `/contacto?paquete=<slug>`.

| # | Nombre | Slug | Para quién | Incluye (orientativo) |
|---|--------|------|------------|------------------------|
| 1 | Corporativo Esencial | `corporativo-esencial` | Reuniones, capacitaciones | Audio básico, 2 micrófonos, operador, montaje/desmontaje |
| 2 | Corporativo Premium | `corporativo-premium` | Convenciones, lanzamientos | Audio profesional, pantalla gigante, beam/wash, MC, meseros |
| 3 | Social Celebración | `social-celebracion` | Bodas, XV, aniversarios | Audio + DJ, iluminación, mobiliario, MC opcional |
| 4 | Convención Integral | `convencion-integral` | Eventos grandes | Audio escenario, LED, luces, personal de piso |
| 5 | Mobiliario & Banquete | `mobiliario-banquete` | Solo salón / banquete | Mesas, sillas, manteles, meseros |
| 6 | Personal & Animación | `personal-animacion` | Quien ya tiene equipo | MC, DJ, meseros; audio/luces como add-on |

### Texto corto por paquete (para cards)

**Corporativo Esencial**  
Audio claro y profesional para juntas y capacitaciones. Incluye micrófonos y operador.

**Corporativo Premium**  
Experiencia completa para convenciones y lanzamientos: audio, pantalla, luces y personal.

**Social Celebración**  
Todo para tu celebración: música, ambiente, mobiliario y animación.

**Convención Integral**  
Solución de gran escala con coordinación dedicada de ventas.

**Mobiliario & Banquete**  
Montaje impecable de salón con mobiliario y servicio de meseros.

**Personal & Animación**  
MC, DJ y meseros profesionales; complementa tu producción existente.

---

## 6. Servicios por categoría

### Categoría 1: Audio e iluminación

| Servicio | Slug | Descripción corta |
|----------|------|-------------------|
| Renta de audio | `renta-audio` | Sistemas profesionales para interiores y exteriores. |
| Micrófonos | `microfonos` | Inalámbricos y de cable para voces y presentaciones. |
| Luces beam | `luces-beam` | Efectos de haz para escenario y pista. |
| Luces wash | `luces-wash` | Iluminación ambiental y de atmósfera. |
| Pantalla gigante | `pantalla-gigante` | Pantalla LED / proyección para presentaciones y shows. |

### Categoría 2: Mobiliario

| Servicio | Slug | Descripción corta |
|----------|------|-------------------|
| Mesas y sillas | `mesas-sillas` | Mobiliario para banquetes y eventos corporativos. |
| Manteles | `manteles` | Mantelería y montaje de mesas. |

### Categoría 3: Personal

| Servicio | Slug | Descripción corta |
|----------|------|-------------------|
| Meseros | `meseros` | Personal de servicio para banquetes y cócteles. |
| Maestro de ceremonias | `maestro-ceremonias` | Conducción profesional de tu evento. |
| DJ | `dj` | Música y ambiente para celebraciones y corporativos. |

---

## 7. Contacto y formulario

### Campos del formulario

| Campo | Tipo | Requerido |
|-------|------|-----------|
| Nombre | text | Sí |
| Empresa | text | No |
| Servicios de interés | multiselect | Sí |
| Ciudad | text / select | Sí |
| Teléfono / WhatsApp | tel | Sí |
| Fecha del evento | date | No |
| Comentarios | textarea | No |

### Opciones — Servicios de interés

- Renta de audio
- Micrófonos
- Luces beam
- Luces wash
- Pantalla gigante
- Mesas y sillas
- Manteles
- Meseros
- Maestro de ceremonias
- DJ

### Comportamiento (solo front — Fase 1)

1. Validación en cliente (campos requeridos, formato teléfono).
2. Botón **Enviar por WhatsApp** → abre `wa.me/525568671815?text=...` con datos codificados.
3. Mensaje de éxito / confirmación en pantalla.
4. Prellenar paquete si viene query `?paquete=...` desde página de paquetes.

### WhatsApp API (Fase 3 — opcional)

- Integración backend posterior; por ahora solo enlace `wa.me` desde front.

### Texto página Contacto

- **Título:** Cotiza tu evento
- **Subtítulo:** Roberto Colin y el equipo de ventas te atienden de 9:00 a 21:00 hrs.

---

## 8. Diseño y UX

### Principios

- Mantener identidad oscura + azul `#004aad` + ondas de audio.
- Añadir **profesionalismo**: más espacio, grids limpios, jerarquía clara.
- **Animaciones de alto nivel** con Framer Motion (scroll reveal, stagger, transiciones de ruta).
- Respetar `prefers-reduced-motion: reduce`.
- Mobile-first; breakpoints Tailwind estándar.

### Logos

| Contexto | Archivo |
|----------|---------|
| Header / hero oscuro | `logo_white.png` |
| Secciones claras / footer alterno | `logo_black.png` |

### Placeholders de imágenes

- Temáticas: eventos corporativos, consolas de audio, luces de escenario, banquetes.
- Fuente temporal: Unsplash / Pexels o placeholders locales en `public/images/placeholders/`.
- Reemplazar por fotos reales cuando estén listas (misma estructura de rutas).

### Accesibilidad

- `aria-label` en botones icono
- Contraste mínimo WCAG AA en textos
- Navegación por teclado en menú y formulario
- `lang="es"` en HTML

---

## 9. Stack técnico

| Tecnología | Uso |
|------------|-----|
| **Vue 3** | Framework UI |
| **Vite** | Build y dev server |
| **Vue Router** | Multipágina SPA |
| **Tailwind CSS** | Estilos utilitarios + design tokens |
| **Framer Motion** (`motion` para Vue) | Animaciones |
| **Lucide Vue** (o Iconify) | Iconos |
| **@vueuse/head** (opcional) | Meta tags SEO por ruta |
| **JSON estático** | Datos de servicios, paquetes, ciudades |

### Dependencias a instalar

```bash
npm create vite@latest . -- --template vue
npm install vue-router
npm install -D tailwindcss @tailwindcss/vite
npm install motion
npm install lucide-vue-next
npm install @vueuse/head
```

### Variables de entorno (`.env`)

```env
VITE_SITE_URL=https://eventoslinco.com
VITE_WHATSAPP_NUMBER=525568671815
VITE_CONTACT_EMAIL=robertocolin19@gmail.com
VITE_ANALYTICS_URL=          # URL de Umami/Plausible (vacío = desactivado)
```

---

## 10. Estructura de carpetas

```
linco/
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── vercel.json
├── package.json
├── .env.example
├── PLAN-LANDING.md          ← este archivo
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── assets/
│   │   ├── fonts/
│   │   └── logos/
│   └── images/
│       └── placeholders/
├── src/
│   ├── main.ts
│   ├── App.vue
│   ├── style.css              # Tailwind imports + @font-face
│   ├── router/
│   │   └── index.ts
│   ├── views/
│   │   ├── SplashView.vue
│   │   ├── InicioView.vue
│   │   ├── ServiciosView.vue
│   │   ├── ServicioDetalleView.vue   # Fase 2
│   │   ├── PaquetesView.vue
│   │   ├── NosotrosView.vue
│   │   ├── GaleriaView.vue
│   │   ├── ContactoView.vue
│   │   ├── PrivacidadView.vue
│   │   └── TerminosView.vue
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppHeader.vue
│   │   │   ├── AppFooter.vue
│   │   │   └── AppLayout.vue
│   │   ├── splash/
│   │   │   └── LoadingSplash.vue
│   │   ├── home/
│   │   │   ├── HeroSection.vue
│   │   │   ├── DiferenciadorSection.vue
│   │   │   ├── ServiciosTeaser.vue
│   │   │   ├── PaquetesTeaser.vue
│   │   │   ├── ProcesoSection.vue
│   │   │   ├── CoberturaSection.vue
│   │   │   └── CtaSection.vue
│   │   ├── servicios/
│   │   │   ├── ServiceCategory.vue
│   │   │   └── ServiceCard.vue
│   │   ├── paquetes/
│   │   │   └── PackageCard.vue
│   │   ├── galeria/
│   │   │   └── GalleryGrid.vue
│   │   ├── contacto/
│   │   │   └── ContactForm.vue
│   │   └── ui/
│   │       ├── WhatsAppButton.vue
│   │       ├── SeoHead.vue
│   │       ├── ButtonPrimary.vue
│   │       └── PageTransition.vue
│   ├── composables/
│   │   ├── useWhatsApp.ts
│   │   ├── useSeo.ts
│   │   └── useAnalytics.ts
│   └── data/
│       ├── servicios.json
│       ├── paquetes.json
│       └── ciudades.json
└── legacy/                    # opcional: respaldo HTML splash actual
    ├── index.static.html
    └── css/loading.css
```

---

## 11. Componentes Vue

| Componente | Responsabilidad |
|------------|-----------------|
| `LoadingSplash.vue` | Migrar animación de ondas + marca; redirect a `/inicio` |
| `AppLayout.vue` | Header + slot + Footer + FAB WhatsApp |
| `AppHeader.vue` | Nav responsive + logo + CTA |
| `AppFooter.vue` | Links, contacto, legal, ciudades |
| `HeroSection.vue` | Título, subtítulo, CTAs animados |
| `DiferenciadorSection.vue` | Pilares de marca |
| `ServiceCategory.vue` | Bloque de categoría con grid de cards |
| `ServiceCard.vue` | Card individual de servicio |
| `PackageCard.vue` | Card de paquete + link cotización |
| `ProcesoSection.vue` | 4 pasos timeline / grid |
| `CoberturaSection.vue` | Lista de ciudades |
| `GalleryGrid.vue` | Grid imágenes placeholder |
| `ContactForm.vue` | Form + validación + WhatsApp |
| `WhatsAppButton.vue` | FAB fijo |
| `SeoHead.vue` | title, description, og básico |
| `PageTransition.vue` | Wrapper Motion entre rutas |

---

## 12. SEO y legal

### Meta por página

| Ruta | Title | Meta description (≤160 chars) |
|------|-------|--------------------------------|
| `/inicio` | LINCO \| Renta de audio y eventos corporativos CDMX, Edomex | Renta de audio, iluminación, mobiliario y personal para eventos en CDMX, Edomex, Monterrey y México. |
| `/servicios` | Servicios para eventos \| LINCO | Audio, luces, pantalla gigante, mobiliario, meseros, MC y DJ. Cotiza sin compromiso. |
| `/paquetes` | Paquetes para eventos \| LINCO | Soluciones integrales para corporativos y celebraciones. Cotización personalizada. |
| `/nosotros` | Nosotros \| LINCO | Conoce LINCO: un solo proveedor para tu evento en todo México. |
| `/galeria` | Galería \| LINCO | Eventos y montajes realizados por LINCO. |
| `/contacto` | Contacto y cotización \| LINCO | Roberto Colin — WhatsApp 55 6867 1815. Horario 9:00 a 21:00. |

### Keywords objetivo

`renta de audio`, `CDMX`, `Edomex`, `corporativo`, `LINCO`, `eventos`, `iluminación`, `pantalla LED`, `DJ eventos`, `renta mobiliario eventos`

### Archivos SEO

- [ ] `public/robots.txt` — Allow all, sitemap URL
- [ ] `public/sitemap.xml` — Todas las rutas estáticas
- [ ] Favicon (generar desde logo)
- [ ] `og:image` placeholder (logo o imagen hero)

### Aviso de privacidad — secciones obligatorias

1. Responsable del tratamiento (Roberto Colin / LINCO)
2. Datos que se recaban (formulario de contacto)
3. Finalidad (cotización y seguimiento comercial)
4. No venta de datos a terceros
5. Derechos ARCO (acceso, rectificación, cancelación, oposición)
6. Medio de contacto para ejercer derechos
7. Uso de cookies / analytics (si aplica)
8. Fecha de última actualización

### Términos y condiciones — secciones obligatorias

1. Uso del sitio informativo
2. Cotizaciones sujetas a disponibilidad
3. Precios fuera del sitio web
4. Propiedad intelectual de marca LINCO
5. Limitación de responsabilidad
6. Ley aplicable (México)
7. Contacto

> **Nota:** Revisión por abogado recomendada antes de publicar textos legales definitivos.

---

## 13. Analytics

### Requisito

- Librería **open source**, administrada por el cliente.
- Configuración vía variable de entorno; si está vacía, no se carga script.

### Opciones recomendadas

| Herramienta | Tipo | Integración |
|-------------|------|-------------|
| **Umami** | Open source | Script + `VITE_ANALYTICS_URL` |
| **Plausible** | Open core | Mismo patrón |
| **Matomo** | Open source | Más pesado; solo si ya lo usan |

### Pasos

1. Cliente despliega Umami (o instancia cloud).
2. Crear sitio `eventoslinco.com` en panel Umami.
3. Copiar script URL a `VITE_ANALYTICS_URL` en Vercel.
4. Implementar `useAnalytics.ts` que inyecta script en `onMounted` de `App.vue`.

---

## 14. Deploy en Vercel

### `vercel.json`

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Pasos deploy

1. Conectar repo a Vercel (ya hecho).
2. Build command: `npm run build`
3. Output directory: `dist`
4. Variables de entorno en dashboard Vercel.
5. Dominio `eventoslinco.com` apuntando a Vercel.
6. Verificar HTTPS y rutas SPA (refresh en `/servicios` no debe dar 404).

### Migración desde HTML estático

1. Mover assets actuales a `public/assets/`
2. Opcional: guardar splash HTML en `legacy/` como referencia
3. Reemplazar entry por app Vue; splash como primera ruta

---

## 15. Fases de implementación

### Fase 1 — MVP lanzable (prioridad)

| # | Tarea |
|---|--------|
| 1.1 | Inicializar proyecto Vue + Vite + Tailwind |
| 1.2 | Configurar Vue Router con todas las rutas |
| 1.3 | Migrar fuentes y logos a `public/` |
| 1.4 | Crear `style.css` con tokens de color y `@font-face` |
| 1.5 | Implementar `LoadingSplash.vue` (migrar lógica de ondas) |
| 1.6 | Implementar `AppLayout`, `AppHeader`, `AppFooter` |
| 1.7 | Crear JSON de datos (servicios, paquetes, ciudades) |
| 1.8 | Vista `InicioView` con todas las secciones |
| 1.9 | Vista `ServiciosView` con 3 categorías |
| 1.10 | Vista `PaquetesView` con 6 paquetes |
| 1.11 | Vista `NosotrosView` |
| 1.12 | Vista `GaleriaView` con placeholders |
| 1.13 | Vista `ContactoView` + `ContactForm` + WhatsApp |
| 1.14 | Vistas legales (privacidad, términos) |
| 1.15 | `WhatsAppButton` FAB global |
| 1.16 | SEO: `SeoHead`, robots, sitemap |
| 1.17 | Hook analytics (condicional) |
| 1.18 | QA responsive (móvil, tablet, desktop) |
| 1.19 | Build + deploy Vercel + smoke test rutas |

**Estimación Fase 1:** 3–5 días de desarrollo enfocado.

### Fase 2 — Pulido visual

| # | Tarea |
|---|--------|
| 2.1 | Animaciones Framer Motion en todas las secciones |
| 2.2 | Transiciones entre rutas (`PageTransition`) |
| 2.3 | Vista detalle `/servicios/:slug` |
| 2.4 | Galería con lightbox |
| 2.5 | Optimización imágenes (WebP, lazy loading) |
| 2.6 | Testimonios (cuando haya autorización de clientes) |
| 2.7 | Logos de clientes / marcas |

**Estimación Fase 2:** 2–3 días adicionales.

### Fase 3 — Integraciones (opcional)

| # | Tarea |
|---|--------|
| 3.1 | Backend para formulario (email / CRM) |
| 3.2 | WhatsApp Business API oficial |
| 3.3 | CMS para editar textos sin código |
| 3.4 | Reemplazo de placeholders por fotos/videos reales |

---

## 16. Checklist paso a paso

Usar este checklist durante la implementación. Marcar `[x]` al completar.

### A. Preparación

- [ ] A.1 Crear rama `feat/landing-vue` (o trabajar en `main` según flujo del equipo)
- [ ] A.2 Backup del `index.html` y `css/loading.css` actuales en `legacy/`
- [ ] A.3 Inicializar Vite + Vue en el directorio del proyecto
- [ ] A.4 Instalar Tailwind, Vue Router, Motion, Lucide
- [ ] A.5 Configurar `vercel.json` y `.env.example`
- [ ] A.6 Mover `assets/fonts` y `assets/logos` a `public/assets/`

### B. Base de la aplicación

- [ ] B.1 `main.ts` + `App.vue` con `<router-view />`
- [ ] B.2 Definir rutas en `router/index.ts`
- [ ] B.3 `style.css`: Tailwind + variables CSS (`--color-brand`, etc.)
- [ ] B.4 Cargar fuentes Lastica y CuteFont
- [ ] B.5 Crear `data/servicios.json`, `paquetes.json`, `ciudades.json`

### C. Layout global

- [ ] C.1 `AppHeader.vue` — logo blanco, nav, CTA WhatsApp
- [ ] C.2 Menú móvil (hamburguesa + drawer)
- [ ] C.3 `AppFooter.vue` — contacto, legal, ciudades
- [ ] C.4 `AppLayout.vue` — wrapper con header/footer
- [ ] C.5 `WhatsAppButton.vue` — FAB

### D. Splash

- [ ] D.1 `SplashView.vue` o ruta `/` con `LoadingSplash.vue`
- [ ] D.2 Portar animación de barras de audio desde JS actual
- [ ] D.3 Mostrar taglines: corporativo / LINCO / professional audio rental (o solo LINCO si se simplifica)
- [ ] D.4 Lógica de salida: animación completa + timeout + botón "Entrar"
- [ ] D.5 Redirect a `/inicio`

### E. Página Inicio

- [ ] E.1 `HeroSection.vue` con Motion
- [ ] E.2 `DiferenciadorSection.vue` — 5 pilares
- [ ] E.3 `ServiciosTeaser.vue` — 3 categorías resumidas
- [ ] E.4 `PaquetesTeaser.vue` — 3 paquetes destacados
- [ ] E.5 `ProcesoSection.vue` — 4 pasos
- [ ] E.6 `CoberturaSection.vue` — ciudades
- [ ] E.7 Teaser galería (4 imágenes)
- [ ] E.8 `CtaSection.vue` final

### F. Páginas internas

- [ ] F.1 `ServiciosView.vue` — 3 categorías completas
- [ ] F.2 `PaquetesView.vue` — 6 paquetes + nota legal
- [ ] F.3 `NosotrosView.vue` — texto + pilares + cobertura
- [ ] F.4 `GaleriaView.vue` — grid placeholders
- [ ] F.5 `ContactoView.vue` — datos Roberto + formulario
- [ ] F.6 `PrivacidadView.vue`
- [ ] F.7 `TerminosView.vue`

### G. Formulario y WhatsApp

- [ ] G.1 Validación de campos requeridos
- [ ] G.2 Multiselect de servicios
- [ ] G.3 `useWhatsApp.ts` — construir URL con mensaje codificado
- [ ] G.4 Query param `?paquete=` prellenado
- [ ] G.5 Enlaces `tel:` y `mailto:` en página contacto

### H. SEO y legal

- [ ] H.1 `SeoHead.vue` o `@vueuse/head` por ruta
- [ ] H.2 `public/robots.txt`
- [ ] H.3 `public/sitemap.xml`
- [ ] H.4 Redactar texto completo aviso de privacidad
- [ ] H.5 Redactar texto completo términos y condiciones
- [ ] H.6 Favicon

### I. Analytics

- [x] I.1 `useAnalytics.ts` con carga condicional
- [x] I.2 Documentar en README cómo configurar Umami
- [x] I.3 Probar que sin `VITE_ANALYTICS_URL` no hay errores

### J. Animaciones (Fase 2, puede iniciarse en paralelo)

- [ ] J.1 `whileInView` en secciones de Home
- [ ] J.2 Stagger en grids de servicios y paquetes
- [ ] J.3 `PageTransition` entre rutas
- [ ] J.4 Respetar `prefers-reduced-motion`

### K. QA y lanzamiento

- [ ] K.1 Probar todas las rutas en local (`npm run dev`)
- [ ] K.2 Probar build (`npm run build` + `npm run preview`)
- [ ] K.3 Probar en Chrome, Safari, Firefox
- [ ] K.4 Probar iPhone y Android (viewport, FAB, menú)
- [ ] K.5 Probar refresh directo en `/servicios`, `/contacto`, etc.
- [ ] K.6 Lighthouse: Performance, SEO, Accessibility
- [ ] K.7 Deploy Vercel
- [ ] K.8 Verificar dominio producción
- [ ] K.9 Actualizar `README.md` con instrucciones del nuevo stack

### L. Contenido post-lanzamiento

- [ ] L.1 Sustituir placeholders por fotos reales
- [ ] L.2 Agregar videos si aplica
- [ ] L.3 Testimonios con permiso escrito de clientes
- [ ] L.4 Logos de empresas cliente

---

## 17. Pendientes de confirmación

Antes o durante la implementación, confirmar con el cliente:

| # | Pregunta | Propuesta por defecto |
|---|----------|------------------------|
| 1 | Frase hero definitiva | *Un solo proveedor para tu evento completo* |
| 2 | ¿6 paquetes correctos? | Mantener los 6 listados |
| 3 | Herramienta analytics | Umami (open source) |
| 4 | Duración splash | Animación + máx. 4 s + botón "Entrar" |
| 5 | Galería en Fase 1 | Página completa con placeholders |
| 6 | Taglines en splash | ¿Mantener "corporativo" y "professional audio rental" o solo LINCO? |
| 7 | Revisión legal textos | Pendiente abogado |

---

## Ciudades destacadas (para `ciudades.json`)

```json
[
  "Ciudad de México",
  "Estado de México",
  "Monterrey",
  "Querétaro",
  "Veracruz",
  "Guadalajara",
  "Puebla",
  "León",
  "Mérida",
  "Cancún"
]
```

Nota en UI: *Cobertura en todo México. Consulta disponibilidad para tu ciudad.*

---

## Enlace WhatsApp — formato técnico

```
https://wa.me/525568671815?text=<mensaje codificado URL>
```

Ejemplo de mensaje generado desde formulario:

```
Hola, soy [Nombre] de [Empresa].
Ciudad: [Ciudad]
Servicios: [lista]
Tel: [teléfono]
Fecha evento: [fecha]
Comentarios: [texto]
```

---

## README — qué actualizar al terminar Fase 1

- Stack: Vue 3 + Vite + Tailwind + Motion
- Comandos: `npm install`, `npm run dev`, `npm run build`
- Variables de entorno
- Estructura de carpetas
- Cómo cambiar textos en `src/data/*.json`
- Cómo configurar analytics

---

*Última actualización: mayo 2026 — LINCO / eventoslinco.com*


# Mejoras propuestas al PLAN-LANDING.md — Landing PRO orientada a conversión B2B

Este documento complementa el `PLAN-LANDING.md` original. **No reemplaza** lo que ya tienes; agrega las secciones, componentes y decisiones que faltan para que la landing pase de "informativa" a "convierte empresas".

Resumen ejecutivo de qué falta y por qué importa:

1. **Prueba social** (lo más importante para B2B y lo único que no tienes).
2. **Trust signals operativos** (seguros, facturación, tiempos de respuesta).
3. **Sección de casos por industria** (la empresa quiere verse reflejada).
4. **Métricas concretas** (números reales en lugar de adjetivos).
5. **Microcopy de fricción cero** en CTAs y formulario.
6. **Flujo de cotización express** (la empresa no quiere "contactar", quiere cotizar).
7. **FAQ orientada a objeciones reales** de comprador corporativo.
8. **Bloque de "para quién es / no es esto"** (segmenta y filtra).
9. **Performance budget y Core Web Vitals** como meta dura.
10. **Tracking de conversión** además de analytics general.

---

## 1. Nueva sección: **Prueba social** (insertar como sección 4.12)

Sin esto, ninguna empresa contrata. Es la diferencia #1 entre una landing freelance y una que cierra clientes corporativos.

### 1.1 Logos de clientes (banda de logos)

- Ubicación: justo después del Hero, antes del Diferenciador.
- Formato: grid de 6–10 logos en escala de grises, hover a color, animación sutil de fade-in.
- Texto encima: *Empresas que han confiado en LINCO*
- Si todavía no hay autorización por escrito de los logos, usar texto temporal: *Más de [N] eventos corporativos realizados en [año].*
- Componente nuevo: `ClientesLogos.vue`

### 1.2 Testimonios estructurados

Cada testimonio debe incluir:

```
- Foto del cliente (o avatar genérico)
- Nombre completo
- Cargo
- Empresa
- Cita textual (40–80 palabras)
- Tipo de evento + ciudad + fecha (mes/año)
```

- Mínimo 3 testimonios para lanzamiento. Si no hay aún, dejar el componente listo y los slots vacíos con comentario `<!-- pendiente autorización -->`.
- Componente nuevo: `TestimonialCard.vue` + `TestimonialsSection.vue`
- Ubicación: una vez en Home (3 testimonios) y página completa en `/nosotros` o `/casos`.

### 1.3 Métricas en números (counters)

Bloque con 3–4 stats que carguen confianza inmediata. Ejemplos a confirmar con Roberto:

| Métrica | Ejemplo a confirmar |
|---------|---------------------|
| Eventos realizados | +500 eventos desde [año fundación] |
| Ciudades atendidas | 10+ ciudades en México |
| Años de experiencia | [X] años en el mercado |
| Tiempo de respuesta a cotización | < 2 horas en horario laboral |

- Animación: contador que sube al entrar al viewport.
- Componente: `StatsCounter.vue`

### 1.4 Casos de éxito (mini case studies)

Formato corto, 1 párrafo + imagen:

```
[Logo cliente] — [Tipo de evento]
Reto: ...
Solución LINCO: ...
Resultado: [número o cita corta]
```

Mínimo 2 casos. Página: `/casos` o sección dentro de `/nosotros`.

---

## 2. Nueva sección: **Trust signals operativos** (insertar como sección 2.5)

Lo que un comprador corporativo SIEMPRE pregunta antes de contratar:

| Señal | Cómo mostrarlo |
|-------|----------------|
| Facturación CFDI 4.0 | Icono + texto en footer y en página Nosotros |
| Cobertura de seguro / fianza del equipo | Bloque en Nosotros: "Equipo asegurado y respaldado" |
| Personal con uniforme e identificación | Línea en sección Personal |
| Backup de equipo (redundancia) | "Llegamos con equipo de respaldo en cada evento" |
| Tiempo de respuesta | "Respondemos cotizaciones en menos de 2 horas hábiles" |
| Forma de pago | "Aceptamos transferencia, tarjeta y orden de compra corporativa" |
| RFC / razón social | En footer (clave para que el comprador valide proveedor) |
| Antigüedad | "Operando desde [año]" |

Componente sugerido: `TrustSignals.vue` (grid de 4–6 badges con icono Lucide + texto corto).

---

## 3. Mejorar Hero (sección 4.1)

El hero actual está bien pero le falta gancho conversacional. Propuesta:

### Variante recomendada

```
SOBRETÍTULO (eyebrow):  Producción integral de eventos · México
TÍTULO:                  Tu evento completo, con un solo proveedor.
SUBTÍTULO:               Audio profesional, iluminación, mobiliario y personal capacitado.
                         Cotización en menos de 2 horas hábiles.
CTA primario:            Cotizar mi evento
CTA secundario:          Ver paquetes →
MICRO-COPY debajo CTAs:  Sin compromiso · Respuesta el mismo día · Cobertura nacional
```

### Reglas para el hero

- **CTA primario debe ser verbo en primera persona del cliente**: "Cotizar mi evento" convierte más que "Cotizar por WhatsApp".
- **Tres beneficios cortos** debajo del CTA (cada uno máximo 4 palabras).
- **Imagen de fondo o video corto** (mute, autoplay, loop, 6–10s) de un evento real. Si no hay, placeholder oscuro con overlay azul.
- **Botón WhatsApp dentro del hero** además del CTA principal, no solo como FAB.

---

## 4. Nueva sección: **Cotización Express** (insertar como sección 4.2-bis)

La fricción del formulario tradicional es brutal en B2B. Propuesta de mini-wizard de 3 pasos en el home:

```
Paso 1:  ¿Qué tipo de evento?
         [ Corporativo ] [ Social ] [ Convención ] [ Otro ]

Paso 2:  ¿Cuándo y dónde?
         [ Fecha aprox. ] [ Ciudad ▼ ] [ # invitados ▼ ]

Paso 3:  ¿Cómo te contactamos?
         [ Nombre ] [ WhatsApp / email ]
         [ Cotizar mi evento → ]
```

- Cada paso = una pantalla con animación de transición.
- Al terminar, abre WhatsApp con mensaje prellenado o envía a backend si está disponible.
- Barra de progreso arriba (1/3, 2/3, 3/3).
- Botón "Volver" en pasos 2 y 3.
- Componente: `CotizacionExpress.vue` (ubicar en home, después del Hero o como segunda sección).

Esto convierte mucho más que un formulario largo en `/contacto`. El formulario de `/contacto` sigue existiendo para quien lo prefiere.

---

## 5. Nueva sección: **Para quién es esto** (insertar como sección 4.6-bis)

Segmenta visualmente al visitante para que se identifique. Tres bloques tipo "persona":

### Bloque A — Equipos de marketing y eventos corporativos

> Convenciones, lanzamientos, kick-offs, ruedas de prensa, capacitaciones.
> Facturación CFDI, orden de compra y cumplimiento de tiempos.

### Bloque B — Wedding planners y organizadores sociales

> Bodas, XV años, aniversarios.
> Personal con presentación impecable, audio que se escucha bien hasta atrás, luces que arman el ambiente.

### Bloque C — Agencias y productoras

> Renta white-label.
> Equipo certificado, operadores, backup, descuentos por volumen.

Cada bloque con icono + título + 2–3 líneas + link "Ver paquetes para mí →".

Componente: `AudienciasSection.vue`

---

## 6. FAQ orientada a objeciones reales (nueva sección 4.13)

Las preguntas no deben ser genéricas. Deben atacar las objeciones reales de compra:

### Preguntas que SÍ deben estar

1. **¿En cuánto tiempo me cotizan?** → Menos de 2 horas hábiles.
2. **¿Facturan con CFDI 4.0?** → Sí, requerimos razón social, RFC y uso de CFDI.
3. **¿Qué pasa si falla un equipo durante el evento?** → Llegamos con equipo de respaldo.
4. **¿Tienen seguro / fianza?** → [Confirmar con Roberto].
5. **¿Operan en mi ciudad?** → Listar cobertura + "consulta otras ciudades".
6. **¿Cuándo cobran? ¿Hay anticipo?** → Detallar política.
7. **¿Cuánto tiempo antes debo apartar la fecha?** → Recomendado 2–4 semanas; sujeto a disponibilidad.
8. **¿El personal viene uniformado?** → Sí, uniforme e identificación.
9. **¿Se puede modificar el paquete?** → Sí, todo se cotiza a medida.
10. **¿Trabajan en sedes propias o el cliente debe contratar el venue?** → Llevamos producción a tu sede o ayudamos a buscar.

### Reglas técnicas

- Componente: `FaqAccordion.vue` con `<details>` nativos para SEO + accesibilidad.
- Schema.org `FAQPage` en JSON-LD para rich snippets en Google.
- Ubicación: `/inicio` (4–5 preguntas) y `/contacto` (lista completa).

---

## 7. CTA hierarchy: dejar claro qué hace cada botón

Hoy hay solo "Cotizar por WhatsApp" y "Ver servicios". Para corporativo, ofrecer 3 caminos:

| Tipo de visitante | CTA que prefiere | Acción |
|-------------------|------------------|--------|
| Lead caliente con prisa | **WhatsApp directo** | `wa.me` con mensaje |
| Lead que quiere ver primero | **Ver paquetes** | `/paquetes` |
| Lead corporativo formal | **Solicitar propuesta** | `/contacto` formulario |
| Lead que necesita atención humana | **Agendar llamada** | Calendly o WhatsApp con texto "agendar llamada" |

Esos cuatro botones no deben estar todos juntos en el hero; deben aparecer en distintas secciones según el momento del scroll.

---

## 8. Galería: dejar de ser placeholder y volverse herramienta de venta

La galería actual está descrita como "grid de placeholders". Eso no vende. Propuesta:

### Estructura mejorada

- **Filtros por categoría**: Corporativo / Social / Convención / Audio / Iluminación / Mobiliario
- **Cada foto con caption**: "Lanzamiento de producto · CDMX · 350 asistentes" (no solo la imagen).
- **Lightbox con navegación** (Fase 1, no Fase 2).
- **Antes / después** del montaje (carrusel comparativo) — gancho visual fuerte.
- **Video corto embebido** (YouTube/Vimeo lite, no autoplay) de al menos 1 evento real.

Componentes:
- `GalleryGrid.vue` (con filtros)
- `GalleryLightbox.vue`
- `BeforeAfterSlider.vue`

---

## 9. Performance y Core Web Vitals — meta dura, no opcional

Para que Google posicione y para que cargue en CDMX/Edomex donde la red móvil es regular, fijar **presupuesto de performance** desde día 1:

| Métrica | Meta | Cómo lograrlo |
|---------|------|---------------|
| LCP (Largest Contentful Paint) | < 2.5s | Hero con imagen optimizada WebP/AVIF, preload de fuente |
| INP (Interaction to Next Paint) | < 200ms | No bloquear main thread con animaciones pesadas |
| CLS (Cumulative Layout Shift) | < 0.1 | Definir `width`/`height` en todas las imágenes |
| TBT (Total Blocking Time) | < 200ms | Lazy load de Motion en rutas internas |
| Tamaño total JS inicial | < 150kb gzip | Code splitting por ruta |
| Tamaño total imágenes hero | < 200kb cada una | WebP/AVIF, srcset responsive |
| Score Lighthouse Performance | ≥ 90 móvil | Auditar antes de cada deploy |
| Score Lighthouse SEO | ≥ 95 | Meta tags por ruta, semántica correcta |
| Score Lighthouse Accessibility | ≥ 95 | Contraste, aria, navegación teclado |

### Acciones concretas para cumplir

- [ ] Fuentes con `font-display: swap` y preload de la principal
- [ ] Imágenes hero con `<picture>` + WebP + AVIF + fallback JPG
- [ ] `loading="lazy"` en todas las imágenes bajo el fold
- [ ] `decoding="async"` en imágenes
- [ ] Tailwind purgado correctamente (sin clases muertas en producción)
- [ ] Sin librerías de iconos completas — solo los icons que se usan (Lucide tree-shakeable ✓)
- [ ] Motion solo donde se necesita; respetar `prefers-reduced-motion`
- [ ] Splash con timeout máximo 2.5s (4s es demasiado, ahuyenta corporativo)
- [ ] Inline de critical CSS del hero

---

## 10. Tracking de conversión (más allá del analytics general)

Umami/Plausible miden tráfico. Para medir si la landing **vende**, hace falta tracking de eventos específicos:

### Eventos a trackear

| Evento | Cuándo dispararse |
|--------|-------------------|
| `cta_hero_whatsapp_click` | Click en WhatsApp del hero |
| `cta_fab_whatsapp_click` | Click en el botón flotante |
| `cotizacion_express_start` | Usuario abre el wizard |
| `cotizacion_express_step_1` | Completa paso 1 |
| `cotizacion_express_step_2` | Completa paso 2 |
| `cotizacion_express_complete` | Envía cotización |
| `form_contacto_start` | Empieza a llenar el form |
| `form_contacto_submit` | Lo envía |
| `paquete_click` | Click en card de paquete (con slug) |
| `servicio_click` | Click en card de servicio |
| `phone_click` | Click en enlace tel: |
| `email_click` | Click en mailto: |
| `galeria_lightbox_open` | Abre lightbox de galería |
| `faq_open` | Abre una pregunta del FAQ (con texto) |

### Composable

`useTracking.ts` con función `track(event, props?)` que en Fase 1 solo loguea a `console.log` y en producción manda a Umami/Plausible.

---

## 11. Estructura mejorada del mapa del sitio

Agregar a la sección 3 del plan original:

```
/                          → Splash
/inicio                    → Home
/servicios                 → Servicios
/servicios/:slug           → Detalle servicio (Fase 2)
/paquetes                  → Paquetes
/paquetes/:slug            → Detalle paquete (Fase 2) ← NUEVO
/casos                     → Casos de éxito ← NUEVO
/industrias                → Para quién es (corporativo/social/agencias) ← NUEVO
/nosotros                  → Nosotros
/galeria                   → Galería con filtros
/contacto                  → Contacto + form
/cotizar                   → Página dedicada al wizard express ← NUEVO
/preguntas-frecuentes      → FAQ completa ← NUEVO
/aviso-de-privacidad
/terminos-y-condiciones
```

Si la Fase 1 debe ser corta, dejar `/casos`, `/industrias`, `/cotizar` y `/preguntas-frecuentes` como **secciones dentro del home** (anchors `#casos`, `#industrias`, etc.) y crear las páginas dedicadas en Fase 2.

---

## 12. Mejoras al formulario de contacto

El formulario actual está OK pero le falta inteligencia para corporativo. Cambios sugeridos:

### Campos a agregar

| Campo | Tipo | Requerido | Razón |
|-------|------|-----------|-------|
| Tipo de evento | select | Sí | Permite ruteo interno |
| Número aproximado de invitados | select (rangos: <50, 50-150, 150-300, 300+) | Sí | Filtra capacidad |
| Presupuesto aproximado | select (rangos) o "prefiero discutirlo" | No | Califica lead; opcional para no espantar |
| Sede/venue (si ya tienen) | text | No | Da contexto al ventas |
| ¿Cómo nos encontraste? | select | No | Atribución de marketing |
| ¿Necesitas factura? | checkbox | No | Filtra corporativo vs particular |

### Mejoras UX

- **Autosave en localStorage** (que no pierda lo escrito si recarga).
- **Validación inline** (no esperar al submit).
- **Mensaje de éxito con próximos pasos**: "Hemos recibido tu solicitud. Roberto te contactará en menos de 2 horas hábiles."
- **Confirmación por email/WhatsApp** del recibo (Fase 3 con backend).
- **Honeypot anti-spam** invisible (campo `<input type="text" name="website" tabindex="-1" autocomplete="off" style="display:none">`).

---

## 13. Microcopy y tono de voz

Definir guía de tono para que todos los textos suenen igual:

### Reglas

- **Tuteamos** al visitante (no "usted"). Más cercano, sigue siendo profesional.
- **Frases cortas**. Máximo 20 palabras por oración en titulares.
- **Verbos en presente activo**. "Llevamos audio" no "se lleva audio".
- **Cero corporativismo vacío**. NO usar: "soluciones de vanguardia", "experiencia única", "calidad de excelencia".
- **Concreto antes que abstracto**. "350 asistentes" antes que "muchos asistentes".
- **Beneficio antes que feature**. "Tu evento se escucha hasta atrás" antes que "Sistema de audio Line Array".

### Glosario de términos a usar consistentemente

| Usar | No usar |
|------|---------|
| Cotización | Presupuesto, propuesta económica |
| Evento | Festejo, reunión, función |
| Cliente | Usuario, prospecto |
| Equipo (técnico) | Aparatos, instrumentos |
| Personal | Staff, recursos humanos |
| Cobertura | Alcance, presencia |
| Montaje / desmontaje | Instalación / retiro |

---

## 14. Componentes nuevos a agregar a la lista de la sección 11

| Componente | Responsabilidad |
|------------|-----------------|
| `ClientesLogos.vue` | Banda de logos de clientes con animación |
| `TestimonialCard.vue` | Card individual de testimonio |
| `TestimonialsSection.vue` | Sección con 3 testimonios + link a más |
| `StatsCounter.vue` | Contador animado de métricas |
| `CaseStudyCard.vue` | Mini case study |
| `TrustSignals.vue` | Badges de confianza (CFDI, seguro, etc.) |
| `CotizacionExpress.vue` | Wizard de 3 pasos |
| `AudienciasSection.vue` | 3 bloques de "para quién es" |
| `FaqAccordion.vue` | FAQ con `<details>` + schema.org |
| `GalleryLightbox.vue` | Lightbox con teclado y swipe |
| `BeforeAfterSlider.vue` | Comparativo montaje |
| `LeadCapture.vue` | Modal de captura de email (opt-in, sin invasivo) |
| `StickyContactBar.vue` | Barra inferior móvil con CTA permanente |

---

## 15. Sticky bar móvil (importante para conversión móvil)

En móvil, agregar barra fija inferior con dos botones:

```
[ 💬 WhatsApp ]  [ 📞 Llamar ]
```

- Aparece después del primer scroll (no en el hero).
- Se oculta cuando el usuario está en el formulario (para no estorbar).
- En desktop no se muestra (el FAB es suficiente).

Componente: `StickyContactBar.vue`

---

## 16. Política de imágenes mientras no hay fotos reales

Hasta tener material profesional, **NO usar Unsplash** en placeholders públicos. Razones:

1. Las fotos de Unsplash de "eventos corporativos" están en cientos de sitios. Daña credibilidad.
2. Una empresa que busca proveedor reconoce fotos de stock al instante = pierde confianza.

### Mejor alternativa para Fase 1

- Renders/mockups simples con la marca LINCO sobre fondos neutros (puede hacerse con Figma o IA).
- Composiciones tipográficas grandes con tagline y patrón geométrico azul.
- Bloques sólidos de color con icono Lucide centrado.
- Si se usa Unsplash, aplicar **filtros fuertes** (duotone azul/negro) para que no se vea como stock genérico.

Recomendación: presupuestar una sesión de fotos profesional ANTES del lanzamiento público, aunque retrase 2 semanas. Vale más que cualquier otra mejora.

---

## 17. Cómo presentar precios sin ponerlos (porque la empresa SÍ los busca)

El plan dice "no precios". Correcto, pero el visitante corporativo necesita orden de magnitud antes de gastar 2 horas hablando con ventas. Propuesta:

### Indicadores indirectos en cada paquete

```
Corporativo Esencial
Ideal para 30–80 asistentes
Duración: hasta 4 horas
Inversión: desde [rango] · Cotización exacta a medida
```

### O bien, rangos por número de invitados

```
Eventos pequeños  (<50 personas)   → "Producción ligera"
Eventos medianos  (50–200)          → "Producción estándar"
Eventos grandes   (200–500)         → "Producción robusta"
Eventos masivos   (500+)            → "Producción a la medida"
```

Esto **califica al lead** sin comprometer precios fijos. Si la empresa tiene presupuesto para 30 personas pero busca cotizar 500, se autodescarta o eleva su brief.

---

## 18. Internacionalización futura (preparar la arquitectura)

Aunque el plan dice "solo español", la estructura debe soportar i18n con bajo costo:

- Todos los textos en `src/data/i18n/es.json` (no hardcoded en componentes).
- Vue Router con prefijo opcional `/en/...` (deshabilitado en Fase 1).
- Composable `useT(key)` desde el inicio.

Costo en Fase 1: marginal. Beneficio futuro: enorme si el cliente quiere expandirse a clientes en inglés.

---

## 19. Checklist adicional para el checklist de la sección 16

### M. Prueba social (Fase 1)

- [x] M.1 `ClientesLogos.vue` con grid responsivo
- [x] M.2 `TestimonialsSection.vue` con 3 slots (vacíos si aún no hay)
- [x] M.3 `StatsCounter.vue` con 4 métricas confirmadas con Roberto
- [ ] M.4 Conseguir autorización por escrito de mínimo 3 clientes para testimonios
- [ ] M.5 Conseguir autorización para usar 6–10 logos

### N. Trust signals

- [x] N.1 `TrustSignals.vue` con 4–6 badges
- [x] N.2 RFC y razón social en footer (placeholders pendientes confirmar con Roberto)
- [x] N.3 Política de pago y facturación en `/contacto` y FAQ

### O. Cotización express

- [x] O.1 `CotizacionExpress.vue` con 3 pasos
- [x] O.2 Transiciones entre pasos
- [x] O.3 Barra de progreso
- [x] O.4 Integración con tracking de eventos

### P. FAQ

- [ ] P.1 Redactar 10 preguntas reales con Roberto (borrador en `faq.json`)
- [x] P.2 `FaqAccordion.vue` con `<details>` nativos
- [x] P.3 Schema.org `FAQPage` en JSON-LD
- [x] P.4 5 preguntas en home, 10 en `/contacto` (FAQ completa)

### Q. Performance

- [ ] Q.1 Lighthouse Performance ≥ 90 móvil
- [ ] Q.2 Lighthouse SEO ≥ 95
- [ ] Q.3 Lighthouse Accessibility ≥ 95
- [ ] Q.4 LCP < 2.5s en 4G simulado
- [ ] Q.5 CLS < 0.1 en todas las páginas
- [ ] Q.6 Imágenes en WebP/AVIF con fallback
- [ ] Q.7 Critical CSS inline

### R. Tracking de conversión

- [x] R.1 `useTracking.ts` con eventos definidos
- [x] R.2 Tracking en CTAs principales (hero, FAB, sticky, FAQ, express)
- [x] R.3 Tracking en pasos del wizard
- [ ] R.4 Dashboard de eventos en Umami/Plausible

### S. Microcopy

- [ ] S.1 Revisar todos los textos contra glosario
- [ ] S.2 Validar tono con Roberto (tú vs usted)
- [ ] S.3 Lectura final en voz alta de todos los textos

---

## 20. Nuevos pendientes de confirmación (agregar a sección 17)

| # | Pregunta | Propuesta por defecto |
|---|----------|------------------------|
| 8 | ¿Cuántos eventos al año realiza LINCO? | Para el counter de métricas |
| 9 | ¿Año de fundación? | Para "operando desde X" |
| 10 | ¿Tienen seguro/fianza del equipo? | Para trust signals |
| 11 | ¿Política de anticipo y pago? | Para FAQ |
| 12 | ¿Tiempo de respuesta promedio? | Para badge y FAQ |
| 13 | ¿RFC y razón social para footer? | Indispensable B2B |
| 14 | ¿Tutear o tratar de usted? | Tutear (recomendado) |
| 15 | ¿Logos de clientes con autorización? | Conseguir mínimo 6 |
| 16 | ¿Testimonios con autorización? | Conseguir mínimo 3 |
| 17 | ¿Sesión de fotos antes del lanzamiento? | Recomendado fuerte |
| 18 | ¿Rangos de precios o no? | "Desde X" o "ideal para Y personas" |

---

## 21. Orden de prioridad si solo se puede implementar la mitad

Si por tiempo o presupuesto no se puede todo, este es el orden de impacto en conversión, de mayor a menor:

1. **Prueba social** (logos + testimonios + métricas) — sin esto, no contratan.
2. **Trust signals** (CFDI, seguro, RFC, tiempo de respuesta) — corporativo no avanza sin esto.
3. **FAQ con objeciones reales** — resuelve dudas que de otro modo serían emails sin responder.
4. **Cotización express (wizard 3 pasos)** — reduce fricción 3–5x vs formulario tradicional.
5. **Performance budget** — afecta SEO y bounce rate.
6. **Hero mejorado con beneficios y micro-copy** — primera impresión.
7. **Galería con filtros y captions** — refuerza prueba social visual.
8. **Sticky bar móvil** — 60%+ del tráfico es móvil.
9. **Tracking de conversión** — sin medir no se mejora.
10. **Microcopy y tono consistente** — eleva percepción de profesionalismo.

Las demás secciones (industrias dedicadas, casos de éxito, blog, i18n) pueden esperar a Fase 2 o 3.

---

## 22. Resumen ejecutivo para Roberto

Si vas a presentar este plan al cliente, este es el pitch en 30 segundos:

> "El plan técnico que tienes hoy construye una landing **bonita e informativa**. Estas mejoras la convierten en una landing que **vende**. La diferencia: empresas que llegan ven prueba social, entienden en 5 segundos si LINCO es para ellos, cotizan en 3 clics sin formularios largos, y reciben respuesta el mismo día. Resultado esperado: 2–4x más cotizaciones cerradas en los primeros 3 meses post-lanzamiento."

---

*Documento complementario al PLAN-LANDING.md original — LINCO / eventoslinco.com — mayo 2026*