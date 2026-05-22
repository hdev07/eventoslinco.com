<script setup lang="ts">
import { ArrowRight, Clock, Package, Users } from "lucide-vue-next";
import type { Paquete } from "@/types/data";

defineProps<{
  paquete: Paquete;
}>();
</script>

<template>
  <article
    class="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-brand/40 hover:bg-white/[0.05]"
  >
    <div class="flex items-start gap-3">
      <span
        class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand"
        aria-hidden="true"
      >
        <Package class="h-5 w-5" />
      </span>
      <div class="min-w-0 flex-1">
        <h3 class="font-display text-lg leading-tight text-white md:text-xl">
          {{ paquete.nombre }}
        </h3>
        <p
          class="mt-2 inline-block rounded-full border border-white/15 px-2.5 py-0.5 text-xs text-white/75"
        >
          {{ paquete.paraQuien }}
        </p>
      </div>
    </div>

    <p class="mt-4 flex-1 text-sm leading-relaxed text-muted">
      {{ paquete.descripcionCorta }}
    </p>

    <ul class="mt-4 space-y-2 border-t border-white/10 pt-4 text-xs text-white/70">
      <li class="flex items-start gap-2">
        <Users class="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
        <span>
          <span class="text-white/50">Ideal para</span>
          {{ paquete.asistentes }}
        </span>
      </li>
      <li class="flex items-start gap-2">
        <Clock class="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
        <span>
          <span class="text-white/50">Duración:</span>
          {{ paquete.duracion }}
        </span>
      </li>
      <li class="flex items-start gap-2">
        <Package class="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
        <span>{{ paquete.escalaProduccion }}</span>
      </li>
    </ul>

    <p class="mt-3 rounded-lg border border-brand/20 bg-brand/5 px-3 py-2 text-xs leading-relaxed text-white/80">
      <span class="font-medium text-brand">Inversión:</span>
      {{ paquete.notaInversion }}
    </p>

    <p class="mt-4 text-xs leading-relaxed text-white/50">
      <span class="font-medium text-white/70">Incluye:</span>
      {{ paquete.incluye }}
    </p>

    <RouterLink
      :to="{ path: '/contacto', query: { paquete: paquete.slug } }"
      class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand transition group-hover:gap-3 hover:text-white"
    >
      Solicitar cotización
      <ArrowRight class="h-4 w-4" aria-hidden="true" />
    </RouterLink>
  </article>
</template>
