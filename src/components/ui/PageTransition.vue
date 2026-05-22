<script setup lang="ts">
import { AnimatePresence, motion } from "motion-v";
import { useReducedMotion } from "@/composables/useReducedMotion";

defineProps<{
  routeKey: string;
}>();

const reduced = useReducedMotion();
</script>

<template>
  <AnimatePresence mode="wait">
    <motion.div
      v-if="!reduced"
      :key="routeKey"
      class="min-h-full"
      :initial="{ opacity: 0, y: 10 }"
      :animate="{ opacity: 1, y: 0 }"
      :exit="{ opacity: 0, y: -6 }"
      :transition="{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }"
    >
      <slot />
    </motion.div>
    <div v-else :key="routeKey" class="min-h-full">
      <slot />
    </div>
  </AnimatePresence>
</template>
