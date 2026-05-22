<script setup lang="ts">
import MotionReveal from "@/components/ui/MotionReveal.vue";

const pasos = [
  {
    titulo: "Cuéntanos tu evento",
    descripcion: "Fecha, ciudad, tipo y número aproximado de invitados.",
  },
  {
    titulo: "Cotización personalizada",
    descripcion: "Ventas arma la propuesta según tus necesidades.",
  },
  {
    titulo: "Montaje y operación",
    descripcion: "Equipo y personal el día del evento.",
  },
  {
    titulo: "Desmontaje",
    descripcion: "Salida ordenada al terminar.",
  },
];
</script>

<template>
  <section class="section-y border-y border-white/10 bg-surface-elevated">
    <div class="mx-auto max-w-6xl px-4 md:px-6">
      <MotionReveal as="div" class="max-w-2xl">
        <p class="type-eyebrow text-brand">Cómo trabajamos</p>
        <h2 class="type-section-title mt-2 text-white">
          De la idea al desmontaje
        </h2>
      </MotionReveal>

      <ol class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <li v-for="(paso, index) in pasos" :key="paso.titulo">
          <MotionReveal
            as="article"
            :delay="index * 0.06"
            class="relative h-full rounded-2xl border border-white/10 bg-black/40 p-6"
          >
            <span
              class="font-display text-brand text-3xl leading-none opacity-80"
              aria-hidden="true"
            >
              {{ String(index + 1).padStart(2, "0") }}
            </span>
            <h3 class="font-display mt-3 text-lg text-white">{{ paso.titulo }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-muted">{{ paso.descripcion }}</p>
          </MotionReveal>
        </li>
      </ol>
    </div>
  </section>
</template>
