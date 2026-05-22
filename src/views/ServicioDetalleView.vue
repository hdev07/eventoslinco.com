<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import PagePlaceholder from "@/components/PagePlaceholder.vue";

const route = useRoute();
const slug = computed(() => route.params.slug as string);
</script>

<template>
  <PagePlaceholder
    :titulo="`Servicio: ${slug}`"
    descripcion="Detalle por servicio — Fase 2."
  />
</template>
