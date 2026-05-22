<script setup lang="ts">
import AppFooter from "@/components/layout/AppFooter.vue";
import AppHeader from "@/components/layout/AppHeader.vue";
import StickyContactBar from "@/components/ui/StickyContactBar.vue";
import WhatsAppButton from "@/components/ui/WhatsAppButton.vue";
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <AppHeader />
    <main class="flex-1 max-md:pb-24">
      <slot />
    </main>
    <AppFooter />
    <WhatsAppButton />
    <StickyContactBar />
  </div>
</template>
