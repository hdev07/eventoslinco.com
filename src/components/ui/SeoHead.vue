<script setup lang="ts">
import { usePageSeo } from "@/composables/usePageSeo";

const props = defineProps<{
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
}>();

usePageSeo({
  title: props.title,
  description: props.description,
  path: props.path,
  noindex: props.noindex,
});
</script>

<template>
  <span class="sr-only" aria-hidden="true" />
</template>
