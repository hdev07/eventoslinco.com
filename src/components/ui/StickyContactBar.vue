<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useRoute } from "vue-router";
import { MessageCircle, Phone } from "lucide-vue-next";
import { track } from "@/composables/useTracking";
import { useWhatsApp } from "@/composables/useWhatsApp";
import { telHref } from "@/utils/contact";

const SCROLL_THRESHOLD = 120;

const route = useRoute();
const scrolled = ref(false);
const { url: whatsappUrl } = useWhatsApp();
const phoneUrl = telHref();

const visible = computed(
  () => route.name !== "contacto" && scrolled.value
);

function onScroll() {
  scrolled.value = window.scrollY > SCROLL_THRESHOLD;
}

function trackWhatsApp() {
  track("cta_sticky_whatsapp_click");
}

function trackPhone() {
  track("phone_click", { source: "sticky_bar" });
}

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="translate-y-full opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-full opacity-0"
  >
    <div
      v-if="visible"
      class="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-surface/95 backdrop-blur-md md:hidden"
      role="region"
      aria-label="Contacto rápido"
    >
      <div
        class="mx-auto flex max-w-lg gap-3 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
      >
        <a
          :href="whatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="focus-ring flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-white transition hover:brightness-110"
          @click="trackWhatsApp"
        >
          <MessageCircle class="h-5 w-5 shrink-0" aria-hidden="true" />
          WhatsApp
        </a>
        <a
          :href="phoneUrl"
          class="focus-ring flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/10"
          @click="trackPhone"
        >
          <Phone class="h-5 w-5 shrink-0" aria-hidden="true" />
          Llamar
        </a>
      </div>
    </div>
  </Transition>
</template>
