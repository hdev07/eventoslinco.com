<script setup lang="ts">
import { ref } from "vue";
import { MotionConfig } from "motion-v";
import { RouterView } from "vue-router";
import AppLayout from "@/components/layout/AppLayout.vue";
import LoadingSplash from "@/components/splash/LoadingSplash.vue";
import PageTransition from "@/components/ui/PageTransition.vue";
import { useAnalytics } from "@/composables/useAnalytics";

useAnalytics();

/** Pantalla de carga en cada recarga completa de la página (cualquier URL). */
const showSplash = ref(true);
const showApp = ref(false);

function dismissSplash() {
  showSplash.value = false;
  // Montar rutas tras el splash para no competir con la animación (RAF doble).
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      showApp.value = true;
    });
  });
}
</script>

<template>
  <LoadingSplash v-if="showSplash" @enter="dismissSplash" />

  <MotionConfig v-if="showApp" reduced-motion="user">
    <RouterView v-slot="{ Component, route }">
      <PageTransition :route-key="route.fullPath">
        <AppLayout>
          <component :is="Component" />
        </AppLayout>
      </PageTransition>
    </RouterView>
  </MotionConfig>
</template>
