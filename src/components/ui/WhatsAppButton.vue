<script setup lang="ts">
import { MessageCircle } from "lucide-vue-next";
import { track } from "@/composables/useTracking";
import { useWhatsApp } from "@/composables/useWhatsApp";

const { url } = useWhatsApp();

function onClick() {
  track("cta_fab_whatsapp_click");
}
</script>

<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="focus-ring fixed right-4 bottom-4 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition hover:scale-105 hover:shadow-xl md:flex md:right-6 md:bottom-6"
    aria-label="Cotizar por WhatsApp"
    @click="onClick"
  >
    <MessageCircle class="h-7 w-7" aria-hidden="true" />
  </a>
</template>
