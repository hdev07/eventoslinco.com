<script setup lang="ts">
import { onMounted, onUnmounted, shallowRef } from "vue";
import { useSpectrumWave } from "@/composables/useSpectrumWave";

const waveRef = shallowRef<HTMLElement | null>(null);
useSpectrumWave(waveRef);

const props = withDefaults(
  defineProps<{
    autoDelayMs?: number;
  }>(),
  { autoDelayMs: 3000 }
);

const emit = defineEmits<{
  enter: [];
}>();

let timeoutId = 0;

function handleEnter() {
  if (timeoutId) {
    window.clearTimeout(timeoutId);
    timeoutId = 0;
  }
  emit("enter");
}

onMounted(() => {
  document.body.classList.add("splash-open");

  if (props.autoDelayMs > 0) {
    timeoutId = window.setTimeout(handleEnter, props.autoDelayMs);
  }
});

onUnmounted(() => {
  if (timeoutId) window.clearTimeout(timeoutId);
  document.body.classList.remove("splash-open");
});
</script>

<template>
  <main
    class="splash-screen"
    role="status"
    aria-live="polite"
    aria-label="Cargando LINCO"
  >
    <div class="splash-screen__bg" aria-hidden="true" />
    <div class="splash-screen__wave" aria-hidden="true">
      <div ref="waveRef" class="splash-wave" />
    </div>

    <div class="splash-screen__brand">
      <img
        class="splash-screen__logo"
        src="/assets/logos/logo_without_bg_white.png"
        alt="LINCO"
        width="640"
        height="320"
        decoding="async"
      />
    </div>

    <div class="splash-screen__actions">
      <button type="button" class="splash-screen__enter" @click="handleEnter">
        Entrar
      </button>
    </div>

    <div class="splash-screen__progress" aria-hidden="true">
      <div class="splash-screen__progress-bar" />
    </div>
  </main>
</template>
