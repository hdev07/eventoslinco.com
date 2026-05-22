import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, behavior: "smooth" };
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      redirect: "/inicio",
    },
    {
      path: "/inicio",
      name: "inicio",
      component: () => import("@/views/InicioView.vue"),
      meta: { title: "LINCO | Renta de audio y eventos corporativos CDMX, Edomex" },
    },
    {
      path: "/servicios",
      name: "servicios",
      component: () => import("@/views/ServiciosView.vue"),
      meta: { title: "Servicios para eventos | LINCO" },
    },
    {
      path: "/servicios/:slug",
      name: "servicio-detalle",
      component: () => import("@/views/ServicioDetalleView.vue"),
      meta: { title: "Servicio | LINCO" },
    },
    {
      path: "/paquetes",
      name: "paquetes",
      component: () => import("@/views/PaquetesView.vue"),
      meta: { title: "Paquetes para eventos | LINCO" },
    },
    {
      path: "/nosotros",
      name: "nosotros",
      component: () => import("@/views/NosotrosView.vue"),
      meta: { title: "Nosotros | LINCO" },
    },
    {
      path: "/galeria",
      name: "galeria",
      component: () => import("@/views/GaleriaView.vue"),
      meta: { title: "Galería | LINCO" },
    },
    {
      path: "/contacto",
      name: "contacto",
      component: () => import("@/views/ContactoView.vue"),
      meta: { title: "Contacto y cotización | LINCO" },
    },
    {
      path: "/aviso-de-privacidad",
      name: "privacidad",
      component: () => import("@/views/PrivacidadView.vue"),
      meta: { title: "Aviso de privacidad | LINCO" },
    },
    {
      path: "/terminos-y-condiciones",
      name: "terminos",
      component: () => import("@/views/TerminosView.vue"),
      meta: { title: "Términos y condiciones | LINCO" },
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/inicio",
    },
  ],
});

router.afterEach((to) => {
  const title = (to.meta.title as string) ?? "LINCO";
  document.title = title;
});

export default router;
