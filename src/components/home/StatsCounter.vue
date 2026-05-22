<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { useCountUp } from "@/composables/useCountUp";
import MotionReveal from "@/components/ui/MotionReveal.vue";
import pruebaSocial from "@/data/prueba-social.json";
import type { MetricaPruebaSocial } from "@/types/data";

const metricas = pruebaSocial.metricas as MetricaPruebaSocial[];
const sectionRef = ref<HTMLElement | null>(null);
const visible = ref(false);

const counters = metricas.map((m) => {
  const target = ref(m.valor);
  const { display, run } = useCountUp(target, { enabled: visible });
  return { metrica: m, display, run };
});

let observer: IntersectionObserver | null = null;

onMounted(() => {
  if (!sectionRef.value) return;

  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting && !visible.value) {
        visible.value = true;
        counters.forEach((c) => c.run(c.metrica.valor));
      }
    },
    { threshold: 0.25, rootMargin: "-48px" }
  );
  observer.observe(sectionRef.value);
});

onUnmounted(() => {
  observer?.disconnect();
});

function formatValue(counter: (typeof counters)[number]) {
  const { metrica, display } = counter;
  return `${metrica.prefijo ?? ""}${display.value}${metrica.sufijo ?? ""}`;
}
</script>

<template>
  <section ref="sectionRef" class="border-b border-white/10 py-12 md:py-16" aria-label="Métricas">
    <div class="mx-auto max-w-6xl px-4 md:px-6">
      <ul class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <MotionReveal
          v-for="(counter, index) in counters"
          :key="counter.metrica.id"
          as="li"
          :delay="index * 0.06"
          class="text-center"
        >
          <p class="font-display text-3xl text-brand md:text-4xl">
            {{ formatValue(counter) }}
          </p>
          <p class="mt-2 text-sm text-muted">{{ counter.metrica.etiqueta }}</p>
        </MotionReveal>
      </ul>
    </div>
  </section>
</template>
