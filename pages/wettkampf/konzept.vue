<script setup>
const { event } = await useEvent();

useSeoMeta({
  title: "Konzept / Wettkampf",
  description: "Wie " + event.name + " funktioniert",
});
</script>

<template>
  <div class="my-6 px-6">
    <div class="content">
      <h2>Das Konzept</h2>

      <p>Ohne viel Schnick-Schnack: Start unten, Treppe rauf, Ziel oben.</p>
    </div>
  </div>
</template>
