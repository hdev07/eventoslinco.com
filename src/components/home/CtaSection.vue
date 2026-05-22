<script setup lang="ts">
import ButtonPrimary from "@/components/ui/ButtonPrimary.vue";
import MotionReveal from "@/components/ui/MotionReveal.vue";
import { useWhatsApp } from "@/composables/useWhatsApp";
import marca from "@/data/marca.json";

const { url: whatsappUrl } = useWhatsApp();
const tel = marca.contacto.telefono.replace(/\s/g, "");
</script>

<template>
  <section class="section-y border-t border-white/10 bg-surface-elevated">
    <div class="mx-auto max-w-6xl px-4 md:px-6">
      <MotionReveal
        as="div"
        class="rounded-3xl border border-brand/30 bg-[linear-gradient(135deg,rgba(0,74,173,0.2),transparent)] p-8 md:p-12"
      >
        <h2 class="font-display text-2xl text-white md:text-4xl">
          ¿Listo para tu evento?
        </h2>
        <p class="mt-3 max-w-xl text-muted">
          Habla con ventas de {{ marca.contacto.horario }}. {{ marca.contacto.responsable }} te
          atiende por WhatsApp o teléfono.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <ButtonPrimary :href="whatsappUrl" external>Cotizar por WhatsApp</ButtonPrimary>
          <ButtonPrimary :href="`tel:+52${tel}`" variant="secondary">
            {{ marca.contacto.telefono }}
          </ButtonPrimary>
          <ButtonPrimary to="/contacto" variant="secondary">
            Formulario de contacto
          </ButtonPrimary>
        </div>
      </MotionReveal>
    </div>
  </section>
</template>
