<script setup lang="ts">
import { MapPin } from "lucide-vue-next";
import MotionReveal from "@/components/ui/MotionReveal.vue";
import ciudades from "@/data/ciudades.json";
</script>

<template>
  <section class="section-y mx-auto max-w-6xl px-4 md:px-6">
    <MotionReveal as="div" class="max-w-2xl">
      <p class="type-eyebrow text-brand">Cobertura</p>
      <h2 class="type-section-title mt-2 text-white">
        Principales ciudades y todo México
      </h2>
      <p class="mt-3 text-sm text-muted md:text-base">{{ ciudades.nota }}</p>
    </MotionReveal>

    <ul class="mt-8 flex flex-wrap gap-2">
      <li
        v-for="ciudad in ciudades.destacadas"
        :key="ciudad"
        class="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-sm text-white/85"
      >
        <MapPin class="h-3.5 w-3.5 text-brand" aria-hidden="true" />
        {{ ciudad }}
      </li>
    </ul>
  </section>
</template>
