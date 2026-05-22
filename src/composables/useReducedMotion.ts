import { onMounted, onUnmounted, ref } from "vue";

export function useReducedMotion() {
  const prefersReduced = ref(false);

  let media: MediaQueryList | undefined;

  function update() {
    prefersReduced.value = media?.matches ?? false;
  }

  onMounted(() => {
    media = window.matchMedia("(prefers-reduced-motion: reduce)");
    update();
    media.addEventListener("change", update);
  });

  onUnmounted(() => {
    media?.removeEventListener("change", update);
  });

  return prefersReduced;
}
