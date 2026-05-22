<script setup lang="ts">
import { ArrowLeft, ArrowRight } from "lucide-vue-next";
import { computed, reactive, ref } from "vue";
import MotionReveal from "@/components/ui/MotionReveal.vue";
import { track } from "@/composables/useTracking";
import { useWhatsApp } from "@/composables/useWhatsApp";
import expressConfig from "@/data/cotizacion-express.json";
import ciudades from "@/data/ciudades.json";
import type { CotizacionExpressData } from "@/types/contact";

const step = ref(1);
const started = ref(false);
const { openExpressWhatsApp } = useWhatsApp();

const form = reactive<CotizacionExpressData>({
  tipoEvento: "",
  fecha: "",
  ciudad: "",
  invitados: "",
  nombre: "",
  contacto: "",
});

const errors = reactive<Partial<Record<keyof CotizacionExpressData, string>>>({});
const ciudadesLista = ciudades.destacadas as string[];

const progressLabel = computed(() => `${step.value} / 3`);

function markStarted() {
  if (!started.value) {
    started.value = true;
    track("cotizacion_express_start");
  }
}

function clearErrors() {
  for (const key of Object.keys(errors)) {
    delete errors[key as keyof CotizacionExpressData];
  }
}

function validateStep(current: number): boolean {
  clearErrors();
  if (current === 1 && !form.tipoEvento) {
    errors.tipoEvento = "Elige un tipo de evento.";
    return false;
  }
  if (current === 2) {
    if (!form.ciudad.trim()) errors.ciudad = "Indica la ciudad.";
    if (!form.invitados) errors.invitados = "Indica el número de invitados.";
    if (Object.keys(errors).length) return false;
  }
  if (current === 3) {
    if (!form.nombre.trim()) errors.nombre = "Ingresa tu nombre.";
    if (!form.contacto.trim()) errors.contacto = "Ingresa WhatsApp o email.";
    if (Object.keys(errors).length) return false;
  }
  return true;
}

function selectTipo(tipo: string) {
  markStarted();
  form.tipoEvento = tipo;
  errors.tipoEvento = undefined;
}

function next() {
  markStarted();
  if (!validateStep(step.value)) return;
  track(`cotizacion_express_step_${step.value}` as "cotizacion_express_step_1");
  if (step.value < 3) {
    step.value += 1;
  }
}

function back() {
  if (step.value > 1) step.value -= 1;
}

function submit() {
  markStarted();
  if (!validateStep(3)) return;
  track("cotizacion_express_complete", { tipo: form.tipoEvento });
  openExpressWhatsApp({ ...form });
}
</script>

<template>
  <section
    id="cotizar"
    class="section-y mx-auto max-w-6xl px-4 md:px-6"
    aria-labelledby="cotizacion-express-titulo"
  >
    <MotionReveal as="div" class="max-w-2xl">
      <p class="type-eyebrow text-brand">Cotización</p>
      <h2 id="cotizacion-express-titulo" class="type-section-title mt-2 text-white">
        {{ expressConfig.titulo }}
      </h2>
      <p class="mt-2 text-sm text-muted">{{ expressConfig.subtitulo }}</p>
    </MotionReveal>

    <MotionReveal
      as="div"
      :delay="0.05"
      class="mx-auto mt-10 max-w-lg rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
    >
      <div
        class="mb-6 flex items-center justify-between text-xs text-muted"
        role="progressbar"
        :aria-valuenow="step"
        aria-valuemin="1"
        aria-valuemax="3"
        :aria-label="`Paso ${progressLabel}`"
      >
        <span>Paso {{ progressLabel }}</span>
        <div class="flex gap-1">
          <span
            v-for="n in 3"
            :key="n"
            class="h-1.5 w-8 rounded-full transition"
            :class="n <= step ? 'bg-brand' : 'bg-white/15'"
          />
        </div>
      </div>

      <!-- Paso 1 -->
      <div v-show="step === 1">
        <p class="text-sm font-medium text-white">¿Qué tipo de evento?</p>
        <div class="mt-4 grid grid-cols-2 gap-2">
          <button
            v-for="tipo in expressConfig.tiposEvento"
            :key="tipo"
            type="button"
            class="focus-ring rounded-xl border px-3 py-3 text-sm transition"
            :class="
              form.tipoEvento === tipo
                ? 'border-brand bg-brand/15 text-white'
                : 'border-white/15 text-muted hover:border-white/30'
            "
            @click="selectTipo(tipo)"
          >
            {{ tipo }}
          </button>
        </div>
        <p v-if="errors.tipoEvento" class="mt-2 text-xs text-red-400" role="alert">
          {{ errors.tipoEvento }}
        </p>
      </div>

      <!-- Paso 2 -->
      <div v-show="step === 2">
        <label for="express-fecha" class="text-sm font-medium text-white">
          Fecha aproximada <span class="text-muted text-xs">(opcional)</span>
        </label>
        <input
          id="express-fecha"
          v-model="form.fecha"
          type="date"
          class="input-field mt-2"
        />

        <label for="express-ciudad" class="mt-4 block text-sm font-medium text-white">
          Ciudad
        </label>
        <select
          id="express-ciudad"
          v-model="form.ciudad"
          class="input-field mt-2"
          :aria-invalid="!!errors.ciudad"
          @change="errors.ciudad = undefined"
        >
          <option value="" disabled>Selecciona ciudad</option>
          <option v-for="c in ciudadesLista" :key="c" :value="c">{{ c }}</option>
          <option value="Otra">Otra ciudad</option>
        </select>
        <p v-if="errors.ciudad" class="mt-1 text-xs text-red-400" role="alert">
          {{ errors.ciudad }}
        </p>

        <p class="mt-4 text-sm font-medium text-white">Número de invitados</p>
        <div class="mt-2 grid grid-cols-2 gap-2">
          <button
            v-for="rango in expressConfig.rangosInvitados"
            :key="rango.valor"
            type="button"
            class="focus-ring rounded-xl border px-3 py-2.5 text-xs transition"
            :class="
              form.invitados === rango.valor
                ? 'border-brand bg-brand/15 text-white'
                : 'border-white/15 text-muted hover:border-white/30'
            "
            @click="
              form.invitados = rango.valor;
              errors.invitados = undefined;
            "
          >
            {{ rango.etiqueta }}
          </button>
        </div>
        <p v-if="errors.invitados" class="mt-2 text-xs text-red-400" role="alert">
          {{ errors.invitados }}
        </p>
      </div>

      <!-- Paso 3 -->
      <div v-show="step === 3">
        <label for="express-nombre" class="text-sm font-medium text-white">Nombre</label>
        <input
          id="express-nombre"
          v-model="form.nombre"
          type="text"
          autocomplete="name"
          class="input-field mt-2"
          :aria-invalid="!!errors.nombre"
          @input="errors.nombre = undefined"
        />
        <p v-if="errors.nombre" class="mt-1 text-xs text-red-400" role="alert">
          {{ errors.nombre }}
        </p>

        <label for="express-contacto" class="mt-4 block text-sm font-medium text-white">
          WhatsApp o email
        </label>
        <input
          id="express-contacto"
          v-model="form.contacto"
          type="text"
          autocomplete="tel email"
          placeholder="55 1234 5678 o tu@email.com"
          class="input-field mt-2"
          :aria-invalid="!!errors.contacto"
          @input="errors.contacto = undefined"
        />
        <p v-if="errors.contacto" class="mt-1 text-xs text-red-400" role="alert">
          {{ errors.contacto }}
        </p>
      </div>

      <div class="mt-8 flex gap-3">
        <button
          v-if="step > 1"
          type="button"
          class="focus-ring inline-flex items-center gap-1 rounded-full border border-white/20 px-4 py-2.5 text-sm text-white transition hover:bg-white/5"
          @click="back"
        >
          <ArrowLeft class="h-4 w-4" aria-hidden="true" />
          Volver
        </button>
        <button
          v-if="step < 3"
          type="button"
          class="focus-ring ml-auto inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand-dark"
          @click="next"
        >
          Siguiente
          <ArrowRight class="h-4 w-4" aria-hidden="true" />
        </button>
        <button
          v-else
          type="button"
          class="focus-ring ml-auto inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand-dark"
          @click="submit"
        >
          Cotizar mi evento
          <ArrowRight class="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </MotionReveal>
  </section>
</template>

<style scoped>
.input-field {
  width: 100%;
  border-radius: 0.75rem;
  border: 1px solid rgb(255 255 255 / 0.15);
  background-color: rgb(0 0 0 / 0.35);
  padding: 0.625rem 0.875rem;
  font-size: 0.875rem;
  color: #fff;
}

.input-field:focus-visible {
  outline: 2px solid var(--color-brand);
  outline-offset: 2px;
}
</style>
