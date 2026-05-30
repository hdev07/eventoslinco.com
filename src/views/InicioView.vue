<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import GalleryGrid from "@/components/galeria/GalleryGrid.vue";
import AudienciasSection from "@/components/home/AudienciasSection.vue";
import ClientesLogos from "@/components/home/ClientesLogos.vue";
import CoberturaSection from "@/components/home/CoberturaSection.vue";
import CotizacionExpress from "@/components/home/CotizacionExpress.vue";
import CtaSection from "@/components/home/CtaSection.vue";
import DiferenciadorSection from "@/components/home/DiferenciadorSection.vue";
import MarcasEquipoSection from "@/components/home/MarcasEquipoSection.vue";
import HeroSection from "@/components/home/HeroSection.vue";
import PaquetesTeaser from "@/components/home/PaquetesTeaser.vue";
import ProcesoSection from "@/components/home/ProcesoSection.vue";
import ServiciosTeaser from "@/components/home/ServiciosTeaser.vue";
import StatsCounter from "@/components/home/StatsCounter.vue";
import TestimonialsSection from "@/components/home/TestimonialsSection.vue";
import TrustSignals from "@/components/home/TrustSignals.vue";
import FaqAccordion from "@/components/ui/FaqAccordion.vue";
import MotionReveal from "@/components/ui/MotionReveal.vue";
import SeoHead from "@/components/ui/SeoHead.vue";
import seoPages from "@/data/seo.json";

const seo = seoPages.pages.inicio;
</script>

<template>
  <div>
    <SeoHead :title="seo.title" :description="seo.description" path="/inicio" />
    <HeroSection />
    <ClientesLogos />
    <StatsCounter />
    <DiferenciadorSection />
    <MarcasEquipoSection />
    <CotizacionExpress />
    <TrustSignals />
    <ServiciosTeaser />
    <PaquetesTeaser />
    <AudienciasSection />
    <ProcesoSection />
    <TestimonialsSection />
    <CoberturaSection />

    <section class="section-y mx-auto max-w-6xl px-4 md:px-6">
      <MotionReveal as="div" class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p class="type-eyebrow text-brand">Galería</p>
          <h2 class="type-section-title mt-2 text-white">
            Montajes y eventos
          </h2>
          <p class="mt-2 max-w-xl text-sm text-muted">
            Referencias de marca; sin imágenes de stock. Fotos reales próximamente.
          </p>
        </div>
        <RouterLink
          to="/galeria"
          class="inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-white"
        >
          Ver galería completa
          <ArrowRight class="h-4 w-4" aria-hidden="true" />
        </RouterLink>
      </MotionReveal>
      <div class="mt-10">
        <GalleryGrid :limit="4" />
      </div>
    </section>

    <FaqAccordion :limit="5" />
    <CtaSection />
  </div>
</template>
