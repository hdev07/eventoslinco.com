<script setup lang="ts">
import type { Component } from "vue";
import type { Servicio } from "@/types/data";

defineProps<{
  servicio: Servicio;
  icon?: Component;
}>();
</script>

<template>
  <article
    class="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-brand/30 hover:bg-white/[0.05]"
  >
    <div class="flex items-start gap-3">
      <span
        v-if="icon"
        class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/15 text-brand"
        aria-hidden="true"
      >
        <component :is="icon" class="h-4 w-4" />
      </span>
      <div class="min-w-0">
        <h3 class="font-medium text-white">{{ servicio.nombre }}</h3>
        <p class="mt-1.5 text-sm leading-relaxed text-muted">
          {{ servicio.descripcion }}
        </p>
      </div>
    </div>
  </article>
</template>
