<script setup lang="ts">
import LegalDocument from "@/components/ui/LegalDocument.vue";
import SeoHead from "@/components/ui/SeoHead.vue";
import aviso from "@/data/aviso-privacidad.json";
import seoPages from "@/data/seo.json";

const seo = seoPages.pages.privacidad;
</script>

<template>
  <div>
    <SeoHead :title="seo.title" :description="seo.description" path="/aviso-de-privacidad" />
    <LegalDocument
      :titulo="aviso.titulo"
      :ultima-actualizacion="aviso.ultimaActualizacion"
      :nota="aviso.nota"
      :secciones="aviso.secciones"
    />
  </div>
</template>
