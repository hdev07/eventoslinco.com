<script setup lang="ts">
import { Quote } from "lucide-vue-next";
import type { Testimonio } from "@/types/data";

defineProps<{
  testimonio: Testimonio;
}>();
</script>

<template>
  <article class="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6">
    <Quote class="h-8 w-8 text-brand/60" aria-hidden="true" />
    <blockquote class="mt-4 flex-1 text-sm leading-relaxed text-white/90">
      "{{ testimonio.cita }}"
    </blockquote>
    <footer class="mt-6 border-t border-white/10 pt-4">
      <p class="font-medium text-white">{{ testimonio.nombre }}</p>
      <p class="text-sm text-muted">
        {{ testimonio.cargo }} · {{ testimonio.empresa }}
      </p>
      <p v-if="testimonio.evento" class="mt-1 text-xs text-muted">
        {{ testimonio.evento }}
        <template v-if="testimonio.ciudad"> · {{ testimonio.ciudad }}</template>
        <template v-if="testimonio.fecha"> · {{ testimonio.fecha }}</template>
      </p>
    </footer>
  </article>
</template>
