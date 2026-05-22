<script setup lang="ts">
import SeoHead from "@/components/ui/SeoHead.vue";
import seoPages from "@/data/seo.json";
import PagePlaceholder from "@/components/PagePlaceholder.vue";

const seo = seoPages.pages.nosotros;
</script>

<template>
  <div>
    <SeoHead :title="seo.title" :description="seo.description" path="/nosotros" />
    <PagePlaceholder
      titulo="Nosotros"
      descripcion="Historia, pilares y cobertura — pendiente sección F.3."
    />
  </div>
</template>
