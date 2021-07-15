<template>
  <blockquote>
    <p>
      <slot></slot>
    </p>
    <cite>– {{ song }}</cite>
  </blockquote>
</template>

<script>
export default {
  props: {
    song: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
