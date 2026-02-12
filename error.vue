<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <NuxtLayout>
    <div class="my-6 px-6">
      <div class="content">
        <h2>Das hat nicht geklappt ..</h2>

        <p>Die aufgeraufene Seite existiert nicht (mehr).</p>
        <button @click="handleError" class="button">
          Bring mich zur Startseite
        </button>

        <p class="mt-6 has-text-grey-lighter">
          Fehler {{ error?.statusCode }}
          <span v-if="error?.statusMessage"> / {{ error.statusMessage }} </span>
        </p>
      </div>
    </div>
  </NuxtLayout>
</template>
