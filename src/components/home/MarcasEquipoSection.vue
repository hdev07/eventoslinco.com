<script setup lang="ts">
import MotionReveal from "@/components/ui/MotionReveal.vue";
import marcasData from "@/data/marcas-equipo.json";

type MarcaEquipo = {
  id: string;
  nombre: string;
  logo: string;
  raster?: boolean;
};

const { titulo, subtitulo, marcas } = marcasData;
const marcasList = marcas as MarcaEquipo[];
</script>

<template>
  <section
    class="section-y border-y border-white/10 bg-black/40"
    aria-labelledby="marcas-equipo-titulo"
  >
    <div class="mx-auto max-w-6xl px-4 md:px-6">
      <MotionReveal as="div" class="max-w-2xl text-center md:mx-auto">
        <p class="type-eyebrow text-brand">Equipamiento</p>
        <h2 id="marcas-equipo-titulo" class="type-section-title mt-2 text-white">
          {{ titulo }}
        </h2>
        <p class="mt-3 text-sm leading-relaxed text-muted">
          {{ subtitulo }}
        </p>
      </MotionReveal>

      <MotionReveal as="ul" :delay="0.08" class="marcas-equipo__grid mt-10">
        <li
          v-for="marca in marcasList"
          :key="marca.id"
          class="marcas-equipo__item"
        >
          <img
            :src="marca.logo"
            :alt="`Logo ${marca.nombre}`"
            class="marcas-equipo__logo"
            :class="{ 'marcas-equipo__logo--raster': marca.raster }"
            width="160"
            height="48"
            loading="lazy"
            decoding="async"
          />
        </li>
      </MotionReveal>
    </div>
  </section>
</template>

<style scoped>
.marcas-equipo__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: center;
  gap: 2rem 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

@media (min-width: 640px) {
  .marcas-equipo__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2.5rem 2rem;
  }
}

@media (min-width: 1024px) {
  .marcas-equipo__grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.marcas-equipo__item {
  display: flex;
  align-items: center;
  justify-content: center;
  /* Caja uniforme: todos los logos se escalan dentro del mismo recuadro */
  height: 4.5rem;
}

.marcas-equipo__logo {
  display: block;
  width: 100%;
  height: 100%;
  max-width: 9rem;
  object-fit: contain;
  opacity: 0.78;
  transition: opacity 0.2s ease;
}

/* PNG/JPG: el SVG con <image> no carga en <img>; filtro CSS en el raster */
.marcas-equipo__logo--raster {
  filter: brightness(0) invert(1);
}

.marcas-equipo__item:hover .marcas-equipo__logo,
.marcas-equipo__item:focus-within .marcas-equipo__logo {
  opacity: 1;
}

@media (min-width: 768px) {
  .marcas-equipo__item {
    height: 5rem;
  }

  .marcas-equipo__logo {
    max-width: 10rem;
  }
}
</style>
