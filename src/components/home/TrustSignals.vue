<script setup lang="ts">
import {
  BadgeCheck,
  Clock,
  CreditCard,
  Package,
  Receipt,
  ShieldCheck,
  type LucideIcon,
} from "lucide-vue-next";
import MotionReveal from "@/components/ui/MotionReveal.vue";
import trustData from "@/data/trust-signals.json";
import type { TrustSignal } from "@/types/data";

const items = trustData.items as TrustSignal[];

const iconMap: Record<string, LucideIcon> = {
  Receipt,
  ShieldCheck,
  Clock,
  Package,
  CreditCard,
  BadgeCheck,
};
</script>

<template>
  <section
    class="section-y border-y border-white/10 bg-surface-elevated"
    aria-labelledby="trust-signals-titulo"
  >
    <div class="mx-auto max-w-6xl px-4 md:px-6">
      <MotionReveal as="div" class="max-w-2xl text-center md:mx-auto">
        <p class="type-eyebrow text-brand">Confianza</p>
        <h2 id="trust-signals-titulo" class="type-section-title mt-2 text-white">
          {{ trustData.titulo }}
        </h2>
      </MotionReveal>

      <ul class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <MotionReveal
          v-for="(item, index) in items"
          :key="item.titulo"
          as="li"
          :delay="index * 0.04"
          class="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
        >
          <component
            :is="iconMap[item.icon] ?? ShieldCheck"
            class="mt-0.5 h-6 w-6 shrink-0 text-brand"
            aria-hidden="true"
          />
          <div>
            <h3 class="font-display text-base text-white">{{ item.titulo }}</h3>
            <p class="mt-1 text-sm leading-relaxed text-muted">{{ item.descripcion }}</p>
          </div>
        </MotionReveal>
      </ul>
    </div>
  </section>
</template>
