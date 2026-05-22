<script setup lang="ts">
import EscalasEventoSection from "@/components/paquetes/EscalasEventoSection.vue";
import PackageCard from "@/components/paquetes/PackageCard.vue";
import { useRouteSeo } from "@/composables/usePageSeo";
import { useWhatsApp } from "@/composables/useWhatsApp";
import paquetes from "@/data/paquetes.json";
import type { Paquete } from "@/types/data";

useRouteSeo("paquetes", "/paquetes");

const { url: whatsappUrl } = useWhatsApp();
const lista = paquetes as Paquete[];
</script>

<template>
  <div>
    <section class="border-b border-white/10 bg-surface-elevated">
      <div class="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <p class="type-eyebrow text-brand">Paquetes</p>
        <h1 class="type-page-title mt-2 max-w-2xl text-white">
          Soluciones integrales para tu evento
        </h1>
        <p class="type-lead mt-4 max-w-2xl text-muted">
          Referencias sin precios públicos. Cada paquete indica escala, duración e inversión
          orientativa; la cotización exacta depende de fecha, ciudad, invitados y logística.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <a
            :href="whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-dark"
          >
            Cotizar por WhatsApp
          </a>
          <RouterLink
            to="/contacto"
            class="inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
          >
            Formulario de contacto
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <PackageCard v-for="paquete in lista" :key="paquete.slug" :paquete="paquete" />
      </div>

      <p class="mt-12 max-w-3xl border-t border-white/10 pt-8 text-sm italic leading-relaxed text-muted">
        Los paquetes son referencias. Cada evento se cotiza según fecha, ciudad, invitados y
        logística. Sin montos fijos en la web.
      </p>
    </section>

    <EscalasEventoSection />
  </div>
</template>
