<script setup>
useSeoMeta({
  title: "Bestzeiten",
});
</script>

<template>
  <div class="my-6 px-6">
    <div class="content">
      <h2>Die Bestzeiten</h2>
    </div>

    <div class="tabs">
      <ul>
        <li class="is-active">
          <a>
            <span>2026</span>
          </a>
        </li>
      </ul>
    </div>

    <table class="table is-fullwidth is-striped">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Mit PA</th>
          <th>Ohne PA</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Männer</th>
          <td>
            <time>00:06:07,08</time>
            <span class="names has-text-grey-light">🇸🇮 Urban & Ion Kalar</span>
          </td>
          <td>
            <time>00:08:13,37</time>
            <span class="names has-text-grey-light">🇩🇪 Christoph & Daniel</span>
          </td>
        </tr>
        <tr>
          <th>Mixed</th>
          <td>
            <time>00:06:53,16</time>
            <span class="names has-text-grey-light">🇵🇱 Anna & Adrian</span>
          </td>
          <td>-</td>
        </tr>
        <tr>
          <th>Frauen</th>
          <td>
            <time>00:13:00,74</time>
            <span class="names has-text-grey-light"
              >🇩🇪 Stefanie & Charlotte</span
            >
          </td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
time {
  font-variant-numeric: tabular-nums;
}
.names {
  display: block;
}
</style>
