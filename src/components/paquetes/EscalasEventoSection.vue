<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import MotionReveal from "@/components/ui/MotionReveal.vue";
import escalas from "@/data/escalas-evento.json";
import type { EscalaEvento } from "@/types/data";

const lista = escalas as EscalaEvento[];
</script>

<template>
  <section
    id="escalas"
    class="border-t border-white/10 bg-surface-elevated"
  >
    <div class="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <MotionReveal as="div" class="max-w-2xl">
        <p class="type-eyebrow text-brand">Escala del evento</p>
        <h2 class="type-section-title mt-2 text-white">
          Orden de magnitud sin precios fijos
        </h2>
        <p class="mt-3 text-sm leading-relaxed text-muted md:text-base">
          Esto te ayuda a ubicar tu evento y calificar el brief antes de hablar con ventas. La
          inversión final depende de fecha, ciudad, logística y alcance.
        </p>
      </MotionReveal>

      <div class="mt-10 grid gap-4 sm:grid-cols-2">
        <MotionReveal
          v-for="(escala, index) in lista"
          :key="escala.id"
          as="article"
          :delay="index * 0.05"
          class="rounded-2xl border border-white/10 bg-black/40 p-5 md:p-6"
        >
          <p class="text-xs font-medium tracking-wide text-brand uppercase">
            {{ escala.etiqueta }}
          </p>
          <p class="font-display mt-2 text-lg text-white">{{ escala.rango }}</p>
          <p class="mt-2 text-sm text-muted">{{ escala.produccion }}</p>
        </MotionReveal>
      </div>

      <p class="mt-8 max-w-3xl text-sm leading-relaxed text-white/50">
        Sin montos públicos en la web: cada propuesta se arma a medida. Si tu presupuesto y escala no
        coinciden, lo detectamos desde el primer contacto.
      </p>

      <RouterLink
        to="/contacto"
        class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand transition hover:gap-3 hover:text-white"
      >
        Solicitar cotización personalizada
        <ArrowRight class="h-4 w-4" aria-hidden="true" />
      </RouterLink>
    </div>
  </section>
</template>
