<template>
  <header class="header" :class="pageType">
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
    subtitle: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      pageType: null,
    }
  },
  mounted() {
    this.getPageType()
  },
  methods: {
    getPageType() {
      switch (this.title) {
        case 'Reviews':
          this.pageType = 'header--review'
          break
        case 'Blog':
          this.pageType = 'header--blog'
          break
        case 'Lists':
          this.pageType = 'header--review'
          break
        case 'Contact Me':
          this.pageType = 'header--contact'
          break
      }
    },
  },
}
</script>

<style></style>
