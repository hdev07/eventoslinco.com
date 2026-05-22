import { onMounted, onUnmounted, shallowRef, type ShallowRef } from "vue";
import {
  createSpectrumBars,
  startSpectrumAnimation,
  type SpectrumBar,
} from "@/components/splash/spectrum-wave";

export function useSpectrumWave(
  containerRef: ShallowRef<HTMLElement | null>
) {
  const bars = shallowRef<SpectrumBar[]>([]);
  let stopAnimation: (() => void) | undefined;

  onMounted(() => {
    const container = containerRef.value;
    if (!container) return;

    const created = createSpectrumBars(container);
    bars.value = created;

    // Esperar al primer frame pintado antes de animar (menos tirones al montar Vue).
    requestAnimationFrame(() => {
      if (!containerRef.value) return;
      stopAnimation = startSpectrumAnimation(container, created);
    });
  });

  onUnmounted(() => {
    stopAnimation?.();
    containerRef.value?.replaceChildren();
  });

  return { bars };
}
