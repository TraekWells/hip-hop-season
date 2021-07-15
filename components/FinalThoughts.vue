<template>
  <div class="thought">
    <h2 class="thought__title">Final Thoughts</h2>
    <p>{{ finalThoughts }}</p>
  </div>
</template>

<script>
export default {
  props: {
    finalThoughts: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
