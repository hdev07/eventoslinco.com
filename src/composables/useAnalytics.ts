import { onMounted } from "vue";

const SCRIPT_ID = "linco-analytics";

export function useAnalytics() {
  onMounted(() => {
    const url = import.meta.env.VITE_ANALYTICS_URL?.trim();
    if (!url || document.getElementById(SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.async = true;
    script.defer = true;
    script.src = url;
    const siteId = import.meta.env.VITE_ANALYTICS_SITE_ID?.trim();
    if (siteId) script.setAttribute("data-website-id", siteId);
    document.head.appendChild(script);
  });
}

export function trackEvent(name: string, data?: Record<string, string | number>) {
  const url = import.meta.env.VITE_ANALYTICS_URL?.trim();
  if (!url) return;

  if (typeof window.umami?.track === "function") {
    window.umami.track(name, data);
    return;
  }

  if (typeof window.plausible === "function") {
    window.plausible(name, { props: data });
  }
}

declare global {
  interface Window {
    umami?: { track: (name: string, data?: Record<string, string | number>) => void };
    plausible?: (name: string, options?: { props?: Record<string, string | number> }) => void;
  }
}
