<template>
  <div class="columns is-multiline is-vcentered as-grid">
    <div class="column is-2 has-text-centered">
      <a href="//www.highlight-towers.de">
        <img src="/partner/highlight-towers.svg" class="reduced" />
      </a>
    </div>
    <div class="column is-4 has-text-centered">
      <a href="//dfeug.de">
        <img src="/partner/dfeug.svg" class="reduced" />
      </a>
    </div>
    <div class="column is-6 has-text-centered">
      <a href="//signal-iduna.de">
        <img src="/partner/signal-iduna.svg" class="reduced" />
      </a>
    </div>
  </div>
</template>

<style>
.as-grid img {
  filter: grayscale(1);
  mix-blend-mode: multiply;
}
.as-grid img.invert {
  filter: invert(1);
}
.as-grid img.reduced {
  opacity: 0.7;
}
</style>
