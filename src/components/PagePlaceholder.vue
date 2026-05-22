<script setup lang="ts">
import { RouterLink } from "vue-router";

defineProps<{
  titulo: string;
  descripcion?: string;
}>();
</script>

<template>
  <main class="flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
    <p class="font-brand text-brand text-lg tracking-wide uppercase">LINCO</p>
    <h1 class="type-page-title mt-2 text-white">{{ titulo }}</h1>
    <p v-if="descripcion" class="mt-4 max-w-md text-muted">{{ descripcion }}</p>
    <RouterLink
      to="/inicio"
      class="mt-8 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-dark"
    >
      Ir al inicio
    </RouterLink>
  </main>
</template>
