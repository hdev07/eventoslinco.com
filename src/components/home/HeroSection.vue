<script setup lang="ts">
import { ArrowRight, MessageCircle } from "lucide-vue-next";
import ButtonPrimary from "@/components/ui/ButtonPrimary.vue";
import MotionReveal from "@/components/ui/MotionReveal.vue";
import { track } from "@/composables/useTracking";
import { useWhatsApp } from "@/composables/useWhatsApp";
import marca from "@/data/marca.json";

const { hero } = marca;
const { url: whatsappUrl } = useWhatsApp();

function trackHeroWhatsApp() {
  track("cta_hero_whatsapp_click");
}
</script>

<template>
  <section class="relative overflow-hidden border-b border-white/10 bg-surface-elevated">
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,74,173,0.25),_transparent_55%)]"
      aria-hidden="true"
    />
    <div class="section-y relative mx-auto max-w-6xl px-4 md:px-6">
      <MotionReveal as="div">
        <p class="type-eyebrow text-brand">
          {{ hero.eyebrow }}
        </p>
        <h1 class="type-hero-title mt-3 max-w-3xl text-white">
          {{ hero.titulo }}
        </h1>
        <p class="type-lead mt-5 max-w-2xl text-muted">
          {{ hero.subtitulo }}
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <ButtonPrimary :href="whatsappUrl" external variant="primary" @click="trackHeroWhatsApp">
            {{ hero.ctaPrimario }}
          </ButtonPrimary>
          <ButtonPrimary to="/paquetes" variant="secondary">
            {{ hero.ctaSecundario }}
            <ArrowRight class="h-4 w-4" aria-hidden="true" />
          </ButtonPrimary>
          <a
            :href="whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366]/50 bg-[#25D366]/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-[#25D366]/20"
            @click="trackHeroWhatsApp"
          >
            <MessageCircle class="h-4 w-4 text-[#25D366]" aria-hidden="true" />
            WhatsApp
          </a>
        </div>
        <p class="mt-4 text-xs text-muted">{{ hero.microcopy }}</p>
        <ul class="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
          <li v-for="beneficio in hero.beneficios" :key="beneficio" class="flex items-center gap-2">
            <span class="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
            {{ beneficio }}
          </li>
        </ul>
      </MotionReveal>
    </div>
  </section>
</template>
