import { onUnmounted, ref, type Ref } from "vue";
import { useReducedMotion } from "@/composables/useReducedMotion";

export function useCountUp(
  _target: Ref<number>,
  options: { duration?: number; enabled?: Ref<boolean> } = {}
) {
  const display = ref(0);
  const reduced = useReducedMotion();
  let frameId: number | null = null;

  function animate(from: number, to: number, duration: number) {
    if (frameId !== null) cancelAnimationFrame(frameId);

    if (reduced.value || !options.enabled?.value) {
      display.value = to;
      return;
    }

    const start = performance.now();

    function step(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      display.value = Math.round(from + (to - from) * eased);
      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    }

    frameId = requestAnimationFrame(step);
  }

  function run(to: number) {
    animate(display.value, to, options.duration ?? 1200);
  }

  onUnmounted(() => {
    if (frameId !== null) cancelAnimationFrame(frameId);
  });

  return { display, run };
}
