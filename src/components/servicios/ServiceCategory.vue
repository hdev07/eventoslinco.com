<script setup lang="ts">
import type { Component } from "vue";
import { ArrowRight } from "lucide-vue-next";
import ServiceCard from "@/components/servicios/ServiceCard.vue";
import type { CategoriaServicio, Servicio } from "@/types/data";

const props = defineProps<{
  categoria: CategoriaServicio;
  icon: Component;
  serviceIcons?: Record<string, Component>;
}>();

function iconFor(servicio: Servicio): Component | undefined {
  return props.serviceIcons?.[servicio.slug];
}
</script>

<template>
  <section :id="categoria.id" class="scroll-mt-24">
    <div class="flex items-center gap-3">
      <span
        class="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand"
        aria-hidden="true"
      >
        <component :is="icon" class="h-5 w-5" />
      </span>
      <h2 class="font-display text-2xl text-white md:text-3xl">{{ categoria.nombre }}</h2>
    </div>

    <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <ServiceCard
        v-for="servicio in categoria.servicios"
        :key="servicio.slug"
        :servicio="servicio"
        :icon="iconFor(servicio)"
      />
    </div>

    <div class="mt-8">
      <RouterLink
        to="/contacto"
        class="inline-flex items-center gap-2 rounded-full border border-brand/50 px-5 py-2.5 text-sm font-medium text-brand transition hover:bg-brand hover:text-white"
      >
        Solicitar cotización
        <ArrowRight class="h-4 w-4" aria-hidden="true" />
      </RouterLink>
    </div>
  </section>
</template>
