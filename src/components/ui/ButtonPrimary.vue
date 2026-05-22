<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";

withDefaults(
  defineProps<{
    to?: RouteLocationRaw;
    href?: string;
    variant?: "primary" | "secondary";
    external?: boolean;
  }>(),
  {
    variant: "primary",
    external: false,
  }
);

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

const variantClass = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  secondary:
    "border border-white/20 text-white hover:border-white/40 hover:bg-white/5",
};
</script>

<template>
  <RouterLink
    v-if="to"
    :to="to"
    :class="[baseClass, variantClass[variant]]"
  >
    <slot />
  </RouterLink>
  <a
    v-else-if="href"
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :class="[baseClass, variantClass[variant]]"
  >
    <slot />
  </a>
  <button v-else type="button" :class="[baseClass, variantClass[variant]]">
    <slot />
  </button>
</template>
