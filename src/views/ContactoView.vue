<script setup lang="ts">
import { Clock, Mail, MessageCircle, Phone } from "lucide-vue-next";
import ContactForm from "@/components/contacto/ContactForm.vue";
import FaqAccordion from "@/components/ui/FaqAccordion.vue";
import MotionReveal from "@/components/ui/MotionReveal.vue";
import { useRouteSeo } from "@/composables/usePageSeo";
import { useWhatsApp } from "@/composables/useWhatsApp";
import marca from "@/data/marca.json";
import { telHref } from "@/utils/contact";

useRouteSeo("contacto", "/contacto");

const { contacto } = marca;
const { url: whatsappUrl } = useWhatsApp();
const phoneUrl = telHref();
const mailto = `mailto:${import.meta.env.VITE_CONTACT_EMAIL || contacto.email}`;
</script>

<template>
  <div>
    <section class="border-b border-white/10 bg-surface-elevated">
      <div class="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <MotionReveal>
          <p class="type-eyebrow text-brand">Contacto</p>
          <h1 class="type-page-title mt-2 max-w-2xl text-white">
            Cotiza tu evento
          </h1>
          <p class="type-lead mt-4 max-w-2xl text-muted">
            {{ contacto.responsable }} y el equipo de ventas te atienden de 9:00 a 21:00 hrs.
          </p>
        </MotionReveal>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-14">
        <MotionReveal as="aside" :delay="0.05">
          <h2 class="font-display text-xl text-white md:text-2xl">Datos de contacto</h2>
          <ul class="mt-6 space-y-5">
            <li class="flex gap-3 text-sm text-muted">
              <Phone class="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <div>
                <p class="font-medium text-white">{{ contacto.responsable }}</p>
                <a :href="phoneUrl" class="transition hover:text-white">{{ contacto.telefono }}</a>
              </div>
            </li>
            <li class="flex gap-3 text-sm text-muted">
              <Mail class="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <a :href="mailto" class="transition hover:text-white">{{ contacto.email }}</a>
            </li>
            <li class="flex gap-3 text-sm text-muted">
              <Clock class="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <span>{{ contacto.horario }}</span>
            </li>
          </ul>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              :href="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-medium text-white transition hover:bg-brand-dark"
            >
              <MessageCircle class="h-4 w-4" aria-hidden="true" />
              Cotizar por WhatsApp
            </a>
            <a
              :href="phoneUrl"
              class="focus-ring inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Llamar ahora
            </a>
          </div>
        </MotionReveal>

        <MotionReveal :delay="0.1">
          <h2 class="sr-only">Formulario de cotización</h2>
          <ContactForm />
        </MotionReveal>
      </div>
    </section>

    <FaqAccordion :include-schema="true" />
  </div>
</template>
