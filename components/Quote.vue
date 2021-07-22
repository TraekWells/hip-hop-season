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
  // mounted() {
  //   this.addLineBreaks()
  // },
  // methods: {
  //   addLineBreaks() {
  //     const lyrics = this.$slots.default[0].text
  //     lyrics.split('/').forEach((line) => {
  //       console.log(line.indexOf('/'))
  //     })
  //   },
  // },
}
</script>

<style></style>
