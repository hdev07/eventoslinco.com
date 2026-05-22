<script setup lang="ts">
import type { Component } from "vue";
import {
  Building2,
  Headphones,
  Lightbulb,
  Monitor,
  Sparkles,
  Users,
  UtensilsCrossed,
} from "lucide-vue-next";

const ICONS: Record<string, Component> = {
  Building2,
  Headphones,
  Lightbulb,
  Monitor,
  Sparkles,
  Users,
  UtensilsCrossed,
};

const props = defineProps<{
  src: string;
  alt: string;
  icon?: string;
  etiqueta?: string;
}>();

const IconComponent = props.icon ? ICONS[props.icon] : undefined;
</script>

<template>
  <div
    class="relative aspect-[4/3] overflow-hidden bg-black"
    :aria-label="alt"
    role="img"
  >
    <img
      :src="src"
      :alt="alt"
      width="640"
      height="480"
      loading="lazy"
      decoding="async"
      class="h-full w-full object-cover opacity-90"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-brand/10"
      aria-hidden="true"
    />
    <span
      class="absolute top-3 left-3 rounded-full border border-white/15 bg-black/60 px-2.5 py-1 text-[10px] font-medium tracking-wide text-white/80 uppercase backdrop-blur-sm"
    >
      Referencia de marca
    </span>
    <div
      v-if="IconComponent"
      class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2"
      aria-hidden="true"
    >
      <span
        class="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-brand/40 bg-brand/20 text-brand"
      >
        <component :is="IconComponent" class="h-7 w-7" />
      </span>
      <p
        v-if="etiqueta"
        class="max-w-[85%] text-center font-accent text-lg text-white/90"
      >
        {{ etiqueta }}
      </p>
    </div>
  </div>
</template>
