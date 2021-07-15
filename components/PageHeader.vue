<template>
  <header class="header">
    <div class="container">
      <h1 class="mb-4">{{ title }}</h1>
      <p class="lead">{{ subtitle }}</p>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: String,
    artist: String,
  },
}
</script>

<style></style>
