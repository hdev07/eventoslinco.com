/** Marca fuentes listas si el script inline de index.html aún no lo hizo. */
export function useSplashFonts() {
  if (document.documentElement.classList.contains("fonts-ready")) return;

  document.documentElement.classList.add("fonts-ready");
}
