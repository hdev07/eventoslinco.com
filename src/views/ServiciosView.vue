<script setup lang="ts">
import type { Component } from "vue";
import {
  Armchair,
  Mic,
  Mic2,
  Monitor,
  Music,
  Layers,
  Sparkles,
  Sun,
  Users,
  Volume2,
} from "lucide-vue-next";
import ServiceCategory from "@/components/servicios/ServiceCategory.vue";
import { useRouteSeo } from "@/composables/usePageSeo";
import { useWhatsApp } from "@/composables/useWhatsApp";
import serviciosData from "@/data/servicios.json";
import type { CategoriaServicio } from "@/types/data";

useRouteSeo("servicios", "/servicios");

const { url: whatsappUrl } = useWhatsApp();
const categorias = serviciosData.categorias as CategoriaServicio[];

const categoryIcons: Record<string, Component> = {
  "audio-iluminacion": Volume2,
  mobiliario: Armchair,
  personal: Users,
};

const serviceIcons: Record<string, Component> = {
  "renta-audio": Volume2,
  microfonos: Mic,
  "luces-beam": Sparkles,
  "luces-wash": Sun,
  "pantalla-gigante": Monitor,
  "mesas-sillas": Armchair,
  manteles: Layers,
  meseros: Users,
  "maestro-ceremonias": Mic2,
  dj: Music,
};
</script>

<template>
  <div>
    <section class="border-b border-white/10 bg-surface-elevated">
      <div class="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <p class="type-eyebrow text-brand">Servicios</p>
        <h1 class="type-page-title mt-2 max-w-2xl text-white">
          Todo lo que tu evento necesita
        </h1>
        <p class="type-lead mt-4 max-w-2xl text-muted">
          Audio, iluminación, mobiliario y personal profesional. Un solo proveedor para
          coordinar tu producción completa.
        </p>
        <nav class="mt-6 flex flex-wrap gap-2" aria-label="Categorías de servicios">
          <a
            v-for="cat in categorias"
            :key="cat.id"
            :href="`#${cat.id}`"
            class="rounded-full border border-white/15 px-3 py-1 text-xs text-white/80 transition hover:border-brand/50 hover:text-white"
          >
            {{ cat.nombre }}
          </a>
        </nav>
      </div>
    </section>

    <section class="mx-auto max-w-6xl space-y-16 px-4 py-14 md:px-6 md:py-20 lg:space-y-20">
      <ServiceCategory
        v-for="categoria in categorias"
        :key="categoria.id"
        :categoria="categoria"
        :icon="categoryIcons[categoria.id]"
        :service-icons="serviceIcons"
      />
    </section>

    <section class="border-t border-white/10 bg-surface-elevated">
      <div
        class="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-14 md:flex-row md:items-center md:justify-between md:px-6 md:py-16"
      >
        <div>
          <h2 class="font-display text-2xl text-white md:text-3xl">
            ¿Listo para armar tu cotización?
          </h2>
          <p class="mt-2 max-w-lg text-sm text-muted md:text-base">
            Cuéntanos fecha, ciudad y tipo de evento. Ventas te atiende de 9:00 a 21:00 hrs.
          </p>
        </div>
        <div class="flex flex-wrap gap-3">
          <RouterLink
            to="/contacto"
            class="inline-flex rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-dark"
          >
            Solicitar cotización
          </RouterLink>
          <a
            :href="whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
