<script setup lang="ts">
import { computed } from "vue";
import { motion } from "motion-v";
import { useReducedMotion } from "@/composables/useReducedMotion";

const props = withDefaults(
  defineProps<{
    as?: "div" | "section" | "article" | "aside" | "li" | "ul";
    delay?: number;
    y?: number;
  }>(),
  {
    as: "div",
    delay: 0,
    y: 24,
  }
);

const reduced = useReducedMotion();
const MotionTag = computed(() => motion[props.as]);

const initial = computed(() =>
  reduced.value ? false : { opacity: 0, y: props.y }
);
const whileInView = computed(() =>
  reduced.value ? undefined : { opacity: 1, y: 0 }
);
const transition = computed(() =>
  reduced.value ? undefined : { duration: 0.5, delay: props.delay, ease: [0.16, 1, 0.3, 1] as const }
);
</script>

<template>
  <component
    :is="MotionTag"
    :initial="initial"
    :while-in-view="whileInView"
    :viewport="{ once: true, margin: '-48px' }"
    :transition="transition"
  >
    <slot />
  </component>
</template>
