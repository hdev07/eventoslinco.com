<script setup lang="ts">
import marca from "@/data/marca.json";
import nav from "@/data/nav.json";
import ciudades from "@/data/ciudades.json";

const year = new Date().getFullYear();
const { contacto, fiscal } = marca;
const operandoDesde =
  fiscal.operandoDesde != null ? `Operando desde ${fiscal.operandoDesde}.` : null;
const telHref = `tel:+52${contacto.telefono.replace(/\s/g, "")}`;
</script>

<template>
  <footer class="border-t border-white/10 bg-surface-elevated">
    <div class="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div class="lg:col-span-1">
          <RouterLink to="/inicio">
            <img
              src="/assets/logos/logo_white.png"
              alt="LINCO"
              class="h-9 w-auto"
              width="120"
              height="40"
            />
          </RouterLink>
          <p class="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {{ marca.diferenciador }}
          </p>
        </div>

        <div>
          <h2 class="font-display text-sm tracking-wide text-white uppercase">
            Navegación
          </h2>
          <ul class="mt-4 space-y-2">
            <li v-for="link in nav.links" :key="link.to">
              <RouterLink
                :to="link.to"
                class="text-sm text-muted transition hover:text-white"
              >
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="font-display text-sm tracking-wide text-white uppercase">
            Contacto
          </h2>
          <ul class="mt-4 space-y-2 text-sm text-muted">
            <li>{{ contacto.responsable }}</li>
            <li>
              <a :href="telHref" class="transition hover:text-white">
                {{ contacto.telefono }}
              </a>
            </li>
            <li>
              <a
                :href="`mailto:${contacto.email}`"
                class="transition hover:text-white"
              >
                {{ contacto.email }}
              </a>
            </li>
            <li>{{ contacto.horario }}</li>
          </ul>
          <div
            v-if="fiscal.razonSocial || fiscal.rfc"
            class="mt-6 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-xs text-muted"
          >
            <p v-if="fiscal.razonSocial" class="text-white/90">{{ fiscal.razonSocial }}</p>
            <p v-if="fiscal.rfc" class="mt-1">RFC: {{ fiscal.rfc }}</p>
            <p v-if="operandoDesde" class="mt-1">{{ operandoDesde }}</p>
          </div>
        </div>

        <div>
          <h2 class="font-display text-sm tracking-wide text-white uppercase">
            Cobertura
          </h2>
          <p class="mt-4 text-sm text-muted">
            {{ ciudades.nota }}
          </p>
          <ul class="mt-3 flex flex-wrap gap-2">
            <li
              v-for="ciudad in ciudades.destacadas.slice(0, 6)"
              :key="ciudad"
              class="rounded-full border border-white/15 px-2.5 py-0.5 text-xs text-white/80"
            >
              {{ ciudad }}
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-muted md:flex-row md:items-center md:justify-between"
      >
        <p>© {{ year }} <span class="font-brand">LINCO</span>. Todos los derechos reservados.</p>
        <div class="flex flex-wrap gap-4">
          <RouterLink to="/aviso-de-privacidad" class="transition hover:text-white">
            Aviso de privacidad
          </RouterLink>
          <RouterLink
            to="/terminos-y-condiciones"
            class="transition hover:text-white"
          >
            Términos y condiciones
          </RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>
