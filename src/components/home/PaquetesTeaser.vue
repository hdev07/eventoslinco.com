<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import PackageCard from "@/components/paquetes/PackageCard.vue";
import MotionReveal from "@/components/ui/MotionReveal.vue";
import paquetes from "@/data/paquetes.json";
import type { Paquete } from "@/types/data";

const destacados = (paquetes as Paquete[]).slice(0, 3);
</script>

<template>
  <section class="section-y mx-auto max-w-6xl px-4 md:px-6">
    <MotionReveal as="div" class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p class="type-eyebrow text-brand">Paquetes</p>
        <h2 class="type-section-title mt-2 text-white">
          Referencias para tu tipo de evento
        </h2>
        <p class="mt-3 max-w-xl text-sm text-muted md:text-base">
          Sin precios públicos: cada paquete indica escala e inversión orientativa. La cotización
          exacta depende de fecha, ciudad e invitados.
        </p>
      </div>
      <RouterLink
        to="/paquetes"
        class="inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-white"
      >
        Ver todos los paquetes
        <ArrowRight class="h-4 w-4" aria-hidden="true" />
      </RouterLink>
    </MotionReveal>

    <div class="mt-10 grid gap-6 md:grid-cols-3">
      <PackageCard v-for="paquete in destacados" :key="paquete.slug" :paquete="paquete" />
    </div>
  </section>
</template>
