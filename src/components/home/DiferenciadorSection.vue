<script setup lang="ts">
import MotionReveal from "@/components/ui/MotionReveal.vue";
import marca from "@/data/marca.json";
</script>

<template>
  <section class="section-y mx-auto max-w-6xl px-4 md:px-6">
    <MotionReveal as="div" class="max-w-2xl">
      <p class="type-eyebrow text-brand type-eyebrow--inline-brand">
        <span>Por qué</span>
        <span class="font-brand">LINCO</span>
      </p>
      <h2 class="type-section-title mt-2 text-white">
        {{ marca.heroFrase }}
      </h2>
    </MotionReveal>

    <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <MotionReveal
        v-for="(pilar, index) in marca.pilares"
        :key="pilar.titulo"
        as="article"
        :delay="index * 0.05"
        class="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
      >
        <h3 class="font-display text-lg text-white">{{ pilar.titulo }}</h3>
        <p class="mt-2 text-sm leading-relaxed text-muted">{{ pilar.descripcion }}</p>
      </MotionReveal>
    </div>
  </section>
</template>
