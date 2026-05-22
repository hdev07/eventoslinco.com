<script setup lang="ts">
import { ArrowRight, Building2, Clapperboard, Heart, type LucideIcon } from "lucide-vue-next";
import MotionReveal from "@/components/ui/MotionReveal.vue";
import { track } from "@/composables/useTracking";
import audienciasData from "@/data/audiencias.json";
import type { AudienciaBloque } from "@/types/data";

const bloques = audienciasData.bloques as AudienciaBloque[];

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Heart,
  Clapperboard,
};

function onAudienciaClick(id: string) {
  track("audiencia_click", { audiencia: id });
}
</script>

<template>
  <section
    id="audiencias"
    class="section-y mx-auto max-w-6xl px-4 md:px-6"
    aria-labelledby="audiencias-titulo"
  >
    <MotionReveal as="div" class="max-w-2xl">
      <p class="type-eyebrow text-brand">Perfiles</p>
      <h2 id="audiencias-titulo" class="type-section-title mt-2 text-white">
        {{ audienciasData.titulo }}
      </h2>
      <p class="mt-3 text-muted">{{ audienciasData.subtitulo }}</p>
    </MotionReveal>

    <div class="mt-10 grid gap-6 lg:grid-cols-3">
      <MotionReveal
        v-for="(bloque, index) in bloques"
        :key="bloque.id"
        as="article"
        :delay="index * 0.05"
        class="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6"
      >
        <component
          :is="iconMap[bloque.icon] ?? Building2"
          class="h-8 w-8 text-brand"
          aria-hidden="true"
        />
        <h3 class="font-display mt-4 text-lg text-white">{{ bloque.titulo }}</h3>
        <ul class="mt-3 flex-1 space-y-2 text-sm leading-relaxed text-muted">
          <li v-for="linea in bloque.lineas" :key="linea">{{ linea }}</li>
        </ul>
        <RouterLink
          :to="bloque.enlace"
          class="focus-ring mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand transition hover:text-white"
          @click="onAudienciaClick(bloque.id)"
        >
          {{ bloque.enlaceTexto }}
          <ArrowRight class="h-4 w-4" aria-hidden="true" />
        </RouterLink>
      </MotionReveal>
    </div>
  </section>
</template>
