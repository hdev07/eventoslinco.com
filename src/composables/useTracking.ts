import { trackEvent } from "@/composables/useAnalytics";

export function track(
  event: string,
  props?: Record<string, string | number | boolean>
) {
  if (import.meta.env.DEV) {
    console.log("[track]", event, props ?? {});
  }

  const payload = props
    ? Object.fromEntries(
        Object.entries(props).map(([k, v]) => [k, typeof v === "boolean" ? String(v) : v])
      )
    : undefined;

  trackEvent(event, payload);
}
