<script setup lang="ts">
import MotionReveal from "@/components/ui/MotionReveal.vue";
import pruebaSocial from "@/data/prueba-social.json";

type ClienteLogo = { src: string; alt: string };

const { clientes } = pruebaSocial;
const logos = clientes.logos as ClienteLogo[];
</script>

<template>
  <section
    class="border-b border-white/10 bg-black/40 py-10 md:py-12"
    aria-labelledby="clientes-logos-titulo"
  >
    <div class="mx-auto max-w-6xl px-4 md:px-6">
      <MotionReveal as="div" class="text-center">
        <p
          id="clientes-logos-titulo"
          class="text-xs font-medium tracking-widest text-muted uppercase"
        >
          {{ clientes.titulo }}
        </p>
        <p
          v-if="!clientes.usarLogos || logos.length === 0"
          class="font-display mt-4 text-lg text-white/90 md:text-xl"
        >
          {{ clientes.textoAlternativo }}
        </p>
        <ul
          v-else
          class="mt-8 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          <li
            v-for="(logo, index) in logos"
            :key="index"
            class="flex items-center justify-center grayscale transition hover:grayscale-0"
          >
            <img
              :src="logo.src"
              :alt="logo.alt"
              class="max-h-10 w-auto opacity-70 transition hover:opacity-100"
              width="120"
              height="40"
              loading="lazy"
              decoding="async"
            />
          </li>
        </ul>
      </MotionReveal>
    </div>
  </section>
</template>
