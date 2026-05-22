<script setup lang="ts">
import TestimonialCard from "@/components/home/TestimonialCard.vue";
import MotionReveal from "@/components/ui/MotionReveal.vue";
import pruebaSocial from "@/data/prueba-social.json";
import type { Testimonio } from "@/types/data";

const testimonios = pruebaSocial.testimonios as Testimonio[];
const publicados = testimonios.filter((t) => t.publicado && t.cita.trim());
</script>

<template>
  <section
    id="testimonios"
    class="section-y mx-auto max-w-6xl px-4 md:px-6"
    aria-labelledby="testimonios-titulo"
  >
    <MotionReveal as="div" class="max-w-2xl">
      <p class="type-eyebrow text-brand">Testimonios</p>
      <h2 id="testimonios-titulo" class="type-section-title mt-2 text-white">
        Lo que dicen nuestros clientes
      </h2>
    </MotionReveal>

    <div
      v-if="publicados.length > 0"
      class="mt-10 grid gap-6 md:grid-cols-3"
    >
      <MotionReveal
        v-for="(t, index) in publicados"
        :key="t.id"
        as="div"
        :delay="index * 0.05"
      >
        <TestimonialCard :testimonio="t" />
      </MotionReveal>
    </div>

    <!-- pendiente autorización -->
    <p
      v-else
      class="mt-8 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-6 py-10 text-center text-sm text-muted"
    >
      {{ pruebaSocial.testimoniosNota }}
    </p>
  </section>
</template>
