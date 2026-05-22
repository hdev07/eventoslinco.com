<script setup lang="ts">
import { Menu, X } from "lucide-vue-next";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useWhatsApp } from "@/composables/useWhatsApp";
import nav from "@/data/nav.json";

const route = useRoute();
const { url: whatsappUrl } = useWhatsApp();
const menuOpen = ref(false);

watch(
  () => route.path,
  () => {
    menuOpen.value = false;
  }
);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b border-white/10 bg-black/90 backdrop-blur-md"
  >
    <div
      class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:h-[4.25rem] md:px-6"
    >
      <RouterLink to="/inicio" class="shrink-0" aria-label="LINCO — Inicio">
        <img
          src="/assets/logos/logo_white.png"
          alt="LINCO"
          class="h-9 w-auto md:h-10"
          width="120"
          height="40"
        />
      </RouterLink>

      <nav class="hidden items-center gap-1 lg:flex" aria-label="Principal">
        <RouterLink
          v-for="link in nav.links"
          :key="link.to"
          :to="link.to"
          class="rounded-lg px-3 py-2 text-sm text-white/85 transition hover:bg-white/5 hover:text-white"
          active-class="text-brand!"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="flex items-center gap-2">
        <a
          :href="whatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-dark sm:inline-flex"
        >
          WhatsApp
        </a>

        <button
          type="button"
          class="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg text-white transition hover:bg-white/10 lg:hidden"
          :aria-expanded="menuOpen"
          aria-controls="mobile-nav"
          :aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú'"
          @click="toggleMenu"
        >
          <Menu v-if="!menuOpen" class="h-6 w-6" aria-hidden="true" />
          <X v-else class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="menuOpen"
        id="mobile-nav"
        class="border-t border-white/10 bg-black lg:hidden"
      >
        <nav class="flex flex-col px-4 py-3" aria-label="Móvil">
          <RouterLink
            v-for="link in nav.links"
            :key="link.to"
            :to="link.to"
            class="rounded-lg px-3 py-3 text-base text-white/90 transition hover:bg-white/5"
            active-class="text-brand!"
          >
            {{ link.label }}
          </RouterLink>
          <a
            :href="whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-2 rounded-full bg-brand px-4 py-3 text-center text-sm font-medium text-white"
          >
            Cotizar por WhatsApp
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>
