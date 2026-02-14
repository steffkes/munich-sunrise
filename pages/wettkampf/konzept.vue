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

      <p>
        <strong
          >Ohne viel Schnick-Schnack: Start unten, Treppe rauf, Ziel
          oben.</strong
        >
      </p>

      <p>
        Was in Berlin geht, geht auch in München. Gelaufen wird ein
        Feuerwehr-Treppenlauf im Zweiertrupp. Entweder angeschlossen oder –
        falls du deiner Lunge nicht vollständig vertraust – auch nicht.
        Ansonsten gilt: klassische Einsatzmontur. Helm, Jacke, Handschuhe, Hose
        und stabile Stiefel. Kurz gesagt alles, was man auch bei der
        Innenbrandbekämpfung nicht zuhause lässt.
      </p>

      <p>
        Gelaufen wird – getreu dem Namen der Veranstaltung – in den
        Sonnenaufgang hinein. Das bedeutet einen entsprechend frühen Start. Für
        alle, die morgens noch nicht vollständig einsatzfähig sind, gibt es aber
        auch spätere Startplätze. Kaffee gibt’s danach. Versprochen.
      </p>
    </div>
  </div>
</template>
