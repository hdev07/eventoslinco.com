<script setup lang="ts">
import { CheckCircle2, MessageCircle } from "lucide-vue-next";
import { computed, onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { useWhatsApp } from "@/composables/useWhatsApp";
import serviciosOpciones from "@/data/contacto-servicios.json";
import paquetes from "@/data/paquetes.json";
import ciudades from "@/data/ciudades.json";
import type { ContactFormErrors, CotizacionFormData } from "@/types/contact";
import type { Paquete } from "@/types/data";

const route = useRoute();
const { openContactWhatsApp } = useWhatsApp();

const opcionesServicios = serviciosOpciones as string[];
const ciudadesLista = ciudades.destacadas as string[];

const form = reactive<CotizacionFormData>({
  nombre: "",
  empresa: "",
  servicios: [],
  ciudad: "",
  telefono: "",
  fechaEvento: "",
  comentarios: "",
  paquete: undefined,
});

const errors = reactive<ContactFormErrors>({});
const submitted = ref(false);
const ciudadOtra = ref(false);

const paqueteSlug = computed(() => {
  const value = route.query.paquete;
  return typeof value === "string" ? value : undefined;
});

const paqueteNombre = computed(() => {
  if (!paqueteSlug.value) return undefined;
  const lista = paquetes as Paquete[];
  return lista.find((p) => p.slug === paqueteSlug.value)?.nombre;
});

onMounted(() => {
  if (paqueteNombre.value) {
    form.paquete = paqueteNombre.value;
    form.comentarios = `Me interesa el paquete: ${paqueteNombre.value}.`;
  }
});

function normalizePhone(value: string): string {
  return value.replace(/\D/g, "");
}

function isValidPhone(value: string): boolean {
  const digits = normalizePhone(value);
  return digits.length >= 10 && digits.length <= 13;
}

function toggleServicio(servicio: string) {
  const index = form.servicios.indexOf(servicio);
  if (index >= 0) {
    form.servicios.splice(index, 1);
  } else {
    form.servicios.push(servicio);
  }
  errors.servicios = undefined;
}

function onCiudadChange(event: Event) {
  const target = event.target as HTMLSelectElement;
  const value = target.value;
  ciudadOtra.value = value === "__otra__";
  if (ciudadOtra.value) {
    form.ciudad = "";
  } else {
    form.ciudad = value;
  }
  errors.ciudad = undefined;
}

function validate(): boolean {
  const next: ContactFormErrors = {};

  if (!form.nombre.trim()) {
    next.nombre = "Ingresa tu nombre.";
  }

  if (form.servicios.length === 0) {
    next.servicios = "Selecciona al menos un servicio.";
  }

  if (!form.ciudad.trim()) {
    next.ciudad = "Indica la ciudad del evento.";
  }

  if (!form.telefono.trim()) {
    next.telefono = "Ingresa un teléfono o WhatsApp.";
  } else if (!isValidPhone(form.telefono)) {
    next.telefono = "El teléfono debe tener al menos 10 dígitos.";
  }

  for (const key of Object.keys(errors)) {
    delete errors[key as keyof ContactFormErrors];
  }
  Object.assign(errors, next);

  return Object.keys(next).length === 0;
}

function onSubmit() {
  submitted.value = false;
  if (!validate()) return;

  const payload: CotizacionFormData = {
    ...form,
    nombre: form.nombre.trim(),
    empresa: form.empresa.trim(),
    ciudad: form.ciudad.trim(),
    telefono: form.telefono.trim(),
    comentarios: form.comentarios.trim(),
    paquete: form.paquete,
  };

  openContactWhatsApp(payload);
  submitted.value = true;
}
</script>

<template>
  <form
    class="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
    novalidate
    @submit.prevent="onSubmit"
  >
    <p
      v-if="paqueteNombre"
      class="mb-6 rounded-xl border border-brand/30 bg-brand/10 px-4 py-3 text-sm text-white"
      role="status"
    >
      Cotizando el paquete <strong class="text-brand">{{ paqueteNombre }}</strong>.
      Puedes ajustar los servicios antes de enviar.
    </p>

    <div
      v-if="submitted"
      class="mb-6 flex gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100"
      role="status"
      aria-live="polite"
    >
      <CheckCircle2 class="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
      <p>
        Se abrió WhatsApp con tu solicitud. Si no se abrió, revisa el bloqueador de ventanas
        emergentes o contáctanos por teléfono.
      </p>
    </div>

    <div class="grid gap-5 sm:grid-cols-2">
      <div class="sm:col-span-1">
        <label for="contacto-nombre" class="mb-1.5 block text-sm font-medium text-white">
          Nombre <span class="text-brand" aria-hidden="true">*</span>
        </label>
        <input
          id="contacto-nombre"
          v-model="form.nombre"
          type="text"
          name="nombre"
          autocomplete="name"
          required
          class="input-field"
          :aria-invalid="!!errors.nombre"
          :aria-describedby="errors.nombre ? 'error-nombre' : undefined"
          @input="errors.nombre = undefined"
        />
        <p v-if="errors.nombre" id="error-nombre" class="mt-1 text-xs text-red-400" role="alert">
          {{ errors.nombre }}
        </p>
      </div>

      <div class="sm:col-span-1">
        <label for="contacto-empresa" class="mb-1.5 block text-sm font-medium text-white">
          Empresa <span class="text-muted text-xs">(opcional)</span>
        </label>
        <input
          id="contacto-empresa"
          v-model="form.empresa"
          type="text"
          name="empresa"
          autocomplete="organization"
          class="input-field"
        />
      </div>

      <div class="sm:col-span-2">
        <fieldset>
          <legend class="mb-2 text-sm font-medium text-white">
            Servicios de interés <span class="text-brand" aria-hidden="true">*</span>
          </legend>
          <div
            class="grid gap-2 sm:grid-cols-2"
            :aria-invalid="!!errors.servicios"
            :aria-describedby="errors.servicios ? 'error-servicios' : undefined"
          >
            <label
              v-for="servicio in opcionesServicios"
              :key="servicio"
              class="flex cursor-pointer items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm transition hover:border-brand/40 [&:has(:checked)]:border-brand/50 [&:has(:checked)]:bg-brand/10"
            >
              <input
                type="checkbox"
                class="h-4 w-4 rounded border-white/30 text-brand focus-visible:ring-brand"
                :checked="form.servicios.includes(servicio)"
                @change="toggleServicio(servicio)"
              />
              <span>{{ servicio }}</span>
            </label>
          </div>
          <p
            v-if="errors.servicios"
            id="error-servicios"
            class="mt-2 text-xs text-red-400"
            role="alert"
          >
            {{ errors.servicios }}
          </p>
        </fieldset>
      </div>

      <div class="sm:col-span-1">
        <label for="contacto-ciudad" class="mb-1.5 block text-sm font-medium text-white">
          Ciudad <span class="text-brand" aria-hidden="true">*</span>
        </label>
        <select
          id="contacto-ciudad"
          name="ciudad"
          class="input-field"
          :value="ciudadOtra ? '__otra__' : form.ciudad"
          :aria-invalid="!!errors.ciudad"
          :aria-describedby="errors.ciudad ? 'error-ciudad' : undefined"
          @change="onCiudadChange"
        >
          <option value="" disabled>Selecciona una ciudad</option>
          <option v-for="ciudad in ciudadesLista" :key="ciudad" :value="ciudad">
            {{ ciudad }}
          </option>
          <option value="__otra__">Otra ciudad</option>
        </select>
        <input
          v-if="ciudadOtra"
          v-model="form.ciudad"
          type="text"
          class="input-field mt-2"
          placeholder="Escribe tu ciudad"
          aria-label="Otra ciudad"
          @input="errors.ciudad = undefined"
        />
        <p v-if="errors.ciudad" id="error-ciudad" class="mt-1 text-xs text-red-400" role="alert">
          {{ errors.ciudad }}
        </p>
      </div>

      <div class="sm:col-span-1">
        <label for="contacto-telefono" class="mb-1.5 block text-sm font-medium text-white">
          Teléfono / WhatsApp <span class="text-brand" aria-hidden="true">*</span>
        </label>
        <input
          id="contacto-telefono"
          v-model="form.telefono"
          type="tel"
          name="telefono"
          autocomplete="tel"
          inputmode="tel"
          placeholder="55 1234 5678"
          required
          class="input-field"
          :aria-invalid="!!errors.telefono"
          :aria-describedby="errors.telefono ? 'error-telefono' : undefined"
          @input="errors.telefono = undefined"
        />
        <p v-if="errors.telefono" id="error-telefono" class="mt-1 text-xs text-red-400" role="alert">
          {{ errors.telefono }}
        </p>
      </div>

      <div class="sm:col-span-1">
        <label for="contacto-fecha" class="mb-1.5 block text-sm font-medium text-white">
          Fecha del evento <span class="text-muted text-xs">(opcional)</span>
        </label>
        <input
          id="contacto-fecha"
          v-model="form.fechaEvento"
          type="date"
          name="fecha"
          class="input-field"
        />
      </div>

      <div class="sm:col-span-2">
        <label for="contacto-comentarios" class="mb-1.5 block text-sm font-medium text-white">
          Comentarios <span class="text-muted text-xs">(opcional)</span>
        </label>
        <textarea
          id="contacto-comentarios"
          v-model="form.comentarios"
          name="comentarios"
          rows="4"
          class="input-field resize-y"
          placeholder="Tipo de evento, número de invitados, necesidades especiales…"
        />
      </div>
    </div>

    <button
      type="submit"
      class="focus-ring mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white transition hover:bg-brand-dark sm:w-auto"
    >
      <MessageCircle class="h-5 w-5" aria-hidden="true" />
      Enviar por WhatsApp
    </button>

    <p class="mt-4 text-xs leading-relaxed text-muted">
      Al enviar, se abrirá WhatsApp con un mensaje prellenado. No almacenamos tus datos en el
      sitio (Fase 1).
    </p>
  </form>
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
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;
}

.input-field::placeholder {
  color: rgb(163 163 163 / 0.8);
}

.input-field:focus-visible {
  outline: 2px solid var(--color-brand);
  outline-offset: 2px;
  border-color: rgb(0 74 173 / 0.5);
}
</style>
