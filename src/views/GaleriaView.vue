<script setup lang="ts">
import GalleryGrid from "@/components/galeria/GalleryGrid.vue";
import SeoHead from "@/components/ui/SeoHead.vue";
import seoPages from "@/data/seo.json";

const seo = seoPages.pages.galeria;
</script>

<template>
  <div>
    <SeoHead :title="seo.title" :description="seo.description" path="/galeria" />

    <section class="border-b border-white/10 bg-surface-elevated">
      <div class="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <p class="type-eyebrow text-brand">Galería</p>
        <h1 class="type-page-title mt-2 max-w-2xl text-white">
          Eventos y montajes
        </h1>
        <p class="type-lead mt-4 max-w-2xl text-muted">
          Composiciones de marca LINCO (sin fotos de stock). Próximamente fotos y videos
          de eventos reales.
        </p>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <GalleryGrid />
    </section>
  </div>
</template>
