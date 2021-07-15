<template>
  <div class="video-container">
    <iframe
      width="560"
      height="315"
      :src="link"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
