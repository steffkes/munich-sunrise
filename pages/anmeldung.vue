<script setup>
useSeoMeta({
  title: "Anmeldung",
});
</script>

<template>
  <div class="my-6 px-6">
    <div class="content">
      <p>
        Bitte beachtet
        <NuxtLink href="/wettkampf/tickets">die Ticket-Preise</NuxtLink>
        als auch
        <NuxtLink href="/wettkampf/regeln">die Wettkampf-Regeln</NuxtLink>.
      </p>

      <iframe
        src="https://events.raceresult.com/registrations/?event=386070&n=Einzel-Anmeldung&k=lOvTMKQARkrW"
        width="100%"
        height="1000"
      ></iframe>
    </div>
  </div>
</template>
