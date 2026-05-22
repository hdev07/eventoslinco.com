<script setup lang="ts">
import { ArrowRight, Armchair, Users, Volume2 } from "lucide-vue-next";
import type { Component } from "vue";
import MotionReveal from "@/components/ui/MotionReveal.vue";
import serviciosData from "@/data/servicios.json";
import type { CategoriaServicio } from "@/types/data";

const categorias = serviciosData.categorias as CategoriaServicio[];

const icons: Record<string, Component> = {
  "audio-iluminacion": Volume2,
  mobiliario: Armchair,
  personal: Users,
};
</script>

<template>
  <section class="section-y border-y border-white/10 bg-surface-elevated">
    <div class="mx-auto max-w-6xl px-4 md:px-6">
      <MotionReveal as="div" class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p class="type-eyebrow text-brand">Servicios</p>
          <h2 class="type-section-title mt-2 text-white">
            Tres categorías, un solo contacto
          </h2>
        </div>
        <RouterLink
          to="/servicios"
          class="inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-white"
        >
          Ver catálogo completo
          <ArrowRight class="h-4 w-4" aria-hidden="true" />
        </RouterLink>
      </MotionReveal>

      <div class="mt-10 grid gap-6 md:grid-cols-3">
        <MotionReveal
          v-for="(cat, index) in categorias"
          :key="cat.id"
          as="article"
          :delay="index * 0.08"
          class="rounded-2xl border border-white/10 bg-black/40 p-6"
        >
          <span
            class="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand"
            aria-hidden="true"
          >
            <component :is="icons[cat.id]" class="h-5 w-5" />
          </span>
          <h3 class="font-display mt-4 text-xl text-white">{{ cat.nombre }}</h3>
          <ul class="mt-3 space-y-1 text-sm text-muted">
            <li v-for="s in cat.servicios.slice(0, 3)" :key="s.slug">{{ s.nombre }}</li>
          </ul>
        </MotionReveal>
      </div>
    </div>
  </section>
</template>
