<script setup lang="ts">
import BrandImagePlaceholder from "@/components/ui/BrandImagePlaceholder.vue";
import MotionReveal from "@/components/ui/MotionReveal.vue";
import placeholders from "@/data/placeholders.json";

const props = withDefaults(
  defineProps<{
    limit?: number;
    showCaption?: boolean;
  }>(),
  {
    limit: 0,
    showCaption: true,
  }
);

const items = placeholders.slice(0, props.limit || placeholders.length);
</script>

<template>
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <MotionReveal
      v-for="(item, index) in items"
      :key="item.id"
      as="article"
      :delay="index * 0.06"
      class="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
    >
      <BrandImagePlaceholder
        :src="item.src"
        :alt="item.alt"
        :icon="item.icon"
        :etiqueta="item.etiqueta"
      />
      <p v-if="showCaption" class="px-4 py-3 text-sm text-muted">
        {{ item.etiqueta ?? item.alt }}
      </p>
    </MotionReveal>
  </div>
</template>
