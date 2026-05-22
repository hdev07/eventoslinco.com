<script setup lang="ts">
export type LegalSection = {
  titulo: string;
  parrafos: string[];
};

defineProps<{
  titulo: string;
  ultimaActualizacion: string;
  nota?: string;
  secciones: LegalSection[];
}>();
</script>

<template>
  <article class="legal-document">
    <header class="border-b border-white/10 bg-surface-elevated">
      <div class="mx-auto max-w-3xl px-4 py-14 md:px-6 md:py-20">
        <p class="type-eyebrow text-brand">Legal</p>
        <h1 class="type-page-title mt-2 text-white">{{ titulo }}</h1>
        <p class="mt-4 text-sm text-muted">
          Última actualización: {{ ultimaActualizacion }}
        </p>
        <p v-if="nota" class="mt-4 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100/90">
          {{ nota }}
        </p>
      </div>
    </header>

    <div class="mx-auto max-w-3xl px-4 py-14 md:px-6 md:py-20">
      <section
        v-for="(seccion, index) in secciones"
        :key="seccion.titulo"
        class="legal-document__section"
        :class="{ 'mt-10': index > 0 }"
      >
        <h2 class="font-display text-xl text-white md:text-2xl">{{ seccion.titulo }}</h2>
        <p
          v-for="(parrafo, pIndex) in seccion.parrafos"
          :key="pIndex"
          class="mt-4 text-sm leading-relaxed text-muted md:text-base"
        >
          {{ parrafo }}
        </p>
      </section>
    </div>
  </article>
</template>
