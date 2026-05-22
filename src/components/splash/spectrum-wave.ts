/** Perfil exagerado de la onda (silueta de backgound.png). */
export const SPECTRUM_WAVE_HEIGHTS = [
  2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 3, 12, 17, 17, 20, 55, 62, 61, 59, 62, 59, 23, 17, 50,
  66, 66, 57, 59, 68, 65, 63, 75, 100, 100, 100, 97, 93, 87, 59, 16, 23, 65, 69, 60, 56, 62, 61,
  51, 49, 60, 68, 64, 53, 46, 23, 15, 2, 2, 3, 17, 3, 2, 2, 2, 2, 2, 2, 2, 2,
] as const;

export interface SpectrumBar {
  el: HTMLSpanElement;
  index: number;
  base: number;
  level: number;
  target: number;
  phase: number;
  speed: number;
}

export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function createSpectrumBars(container: HTMLElement): SpectrumBar[] {
  const bars: SpectrumBar[] = [];

  SPECTRUM_WAVE_HEIGHTS.forEach((height, index) => {
    const bar = document.createElement("span");
    bar.className = "splash-wave__bar";
    bar.style.setProperty("--base", `${height}%`);
    container.appendChild(bar);

    const base = height / 100;
    const start = 0.08 + base * 0.82;
    bars.push({
      el: bar,
      index,
      base,
      level: start,
      target: start,
      phase: Math.random() * Math.PI * 2,
      speed: 6 + Math.random() * 10,
    });
  });

  return bars;
}

function pickTarget(
  bar: SpectrumBar,
  time: number,
  center: number,
  beatPhase: number
): number {
  const dist = Math.abs(bar.index - center) / center;
  const lowOsc = (Math.sin(time * 2.4 + bar.index * 0.11) + 1) * 0.5;
  const midOsc = (Math.sin(time * 5.8 + bar.index * 0.23 + bar.phase) + 1) * 0.5;
  const hiOsc = (Math.sin(time * 11.5 + bar.index * 0.41) + 1) * 0.5;
  const noise = Math.random();
  const beat = beatPhase * 0.55 * (1 - dist * 0.4);
  const mix = lowOsc * 0.26 + midOsc * 0.36 + hiOsc * 0.24 + noise * 0.22 + beat;
  const floor = 0.02 + bar.base * 0.04;
  const ceiling = 0.18 + bar.base * 1.35;
  let energy = floor + mix * (ceiling - floor);

  if (noise > 0.88 && bar.base > 0.35) {
    energy = Math.min(1.4, energy + 0.35 + Math.random() * 0.35);
  }
  if (bar.base < 0.12) {
    energy = Math.min(energy, 0.08 + Math.random() * 0.14);
  }

  return energy;
}

export function startSpectrumAnimation(
  container: HTMLElement,
  bars: SpectrumBar[]
): () => void {
  if (prefersReducedMotion()) {
    container.classList.add("splash-wave--static");
    bars.forEach((bar) => bar.el.style.setProperty("--scale", "1"));
    return () => undefined;
  }

  let rafId = 0;
  let lastTime = 0;
  let beatPhase = 0;
  let frameIndex = 0;
  const count = bars.length;
  const center = (count - 1) / 2;
  const pickThresholds = bars.map((bar) => 0.14 + bar.base * 0.1);

  function frame(now: number) {
    if (!lastTime) {
      lastTime = now;
      rafId = requestAnimationFrame(frame);
      return;
    }

    const dt = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;
    const time = now / 1000;
    frameIndex += 1;

    beatPhase = (Math.sin(time * 3.6) + 1) * 0.5;
    beatPhase = Math.pow(beatPhase, 2.2);

    const pickRoll = frameIndex % 2 === 0;

    for (let i = 0; i < count; i += 1) {
      const bar = bars[i]!;
      if (pickRoll && Math.random() < pickThresholds[i]!) {
        bar.target = pickTarget(bar, time, center, beatPhase);
      }

      const rising = bar.target > bar.level;
      const rate = (rising ? 18 : 5) * bar.speed * 0.09;
      bar.level += (bar.target - bar.level) * rate * dt;
      bar.level = Math.max(0.02, Math.min(1.4, bar.level));

      const scale = Math.max(0.02, Math.min(1.38, bar.level));
      bar.el.style.setProperty("--scale", String(scale));
      bar.el.style.setProperty(
        "--glow",
        String(0.7 + bar.level * 0.55 * bar.base + beatPhase * 0.2)
      );
    }

    rafId = requestAnimationFrame(frame);
  }

  rafId = requestAnimationFrame(frame);

  return () => {
    if (rafId) cancelAnimationFrame(rafId);
  };
}
