<template>
  <div class="thought">
    <h2 class="thought__title">The bottom line</h2>
    <p class="thought__content">{{ bottomLine }}</p>
  </div>
</template>

<script>
export default {
  props: {
    bottomLine: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
