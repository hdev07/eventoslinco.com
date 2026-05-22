<script setup lang="ts">
import LegalDocument from "@/components/ui/LegalDocument.vue";
import SeoHead from "@/components/ui/SeoHead.vue";
import seoPages from "@/data/seo.json";
import terminos from "@/data/terminos.json";

const seo = seoPages.pages.terminos;
</script>

<template>
  <div>
    <SeoHead
      :title="seo.title"
      :description="seo.description"
      path="/terminos-y-condiciones"
    />
    <LegalDocument
      :titulo="terminos.titulo"
      :ultima-actualizacion="terminos.ultimaActualizacion"
      :nota="terminos.nota"
      :secciones="terminos.secciones"
    />
  </div>
</template>
