<template>
  <blockquote>
    <p>
      <slot></slot>
    </p>
    <cite v-if="song">– {{ song }}</cite>
  </blockquote>
</template>

<script>
export default {
  props: {
    song: {
      type: String,
    },
  },
}
</script>

<style></style>
