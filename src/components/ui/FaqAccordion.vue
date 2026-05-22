<script setup lang="ts">
import { computed } from "vue";
import { useHead } from "@vueuse/head";
import MotionReveal from "@/components/ui/MotionReveal.vue";
import { track } from "@/composables/useTracking";
import faqData from "@/data/faq.json";
import type { FaqItem } from "@/types/data";

const props = withDefaults(
  defineProps<{
    limit?: number;
    includeSchema?: boolean;
  }>(),
  {
    includeSchema: false,
  }
);

const allItems = faqData.items as FaqItem[];

const items = computed(() =>
  props.limit ? allItems.slice(0, props.limit) : allItems
);

const showMoreLink = computed(
  () => props.limit != null && allItems.length > props.limit
);

const faqSchema = computed(() => {
  if (!props.includeSchema) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.value.map((item) => ({
      "@type": "Question",
      name: item.pregunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.respuesta,
      },
    })),
  };
});

useHead(
  computed(() =>
    faqSchema.value
      ? {
          script: [
            {
              type: "application/ld+json",
              innerHTML: JSON.stringify(faqSchema.value),
            },
          ],
        }
      : {}
  )
);

function onToggle(pregunta: string, event: Event) {
  const el = event.currentTarget;
  if (el instanceof HTMLDetailsElement && el.open) {
    track("faq_open", { pregunta });
  }
}
</script>

<template>
  <section
    id="preguntas-frecuentes"
    class="section-y mx-auto max-w-3xl px-4 md:px-6"
    aria-labelledby="faq-titulo"
  >
    <MotionReveal as="div" class="text-center md:text-left">
      <p class="type-eyebrow text-brand">FAQ</p>
      <h2 id="faq-titulo" class="type-section-title mt-2 text-white">
        {{ faqData.titulo }}
      </h2>
      <p v-if="faqData.subtitulo" class="mt-3 text-muted">{{ faqData.subtitulo }}</p>
    </MotionReveal>

    <div class="mt-10 space-y-3">
      <MotionReveal
        v-for="(item, index) in items"
        :key="item.id"
        as="div"
        :delay="index * 0.03"
      >
        <details
          class="group rounded-xl border border-white/10 bg-white/[0.03] open:border-brand/30 open:bg-brand/5"
          @toggle="(e) => onToggle(item.pregunta, e)"
        >
          <summary
            class="focus-ring cursor-pointer list-none px-5 py-4 text-sm font-medium text-white marker:content-none [&::-webkit-details-marker]:hidden"
          >
            <span class="flex items-center justify-between gap-4">
              {{ item.pregunta }}
              <span
                class="shrink-0 text-brand transition group-open:rotate-45"
                aria-hidden="true"
              >+</span>
            </span>
          </summary>
          <p class="border-t border-white/10 px-5 pt-3 pb-4 text-sm leading-relaxed text-muted">
            {{ item.respuesta }}
          </p>
        </details>
      </MotionReveal>
    </div>

    <p v-if="showMoreLink" class="mt-6 text-center">
      <RouterLink
        to="/contacto#preguntas-frecuentes"
        class="text-sm font-medium text-brand hover:text-white"
      >
        Ver todas las preguntas en contacto
      </RouterLink>
    </p>
  </section>
</template>
