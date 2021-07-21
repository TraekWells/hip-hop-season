<template>
  <header class="header" :style="backgroundImage">
    <div class="container--narrow">
      <h1>
        <span v-if="post.artist" class="lead">{{ post.artist }}</span>
        {{ post.title }}
      </h1>
      <p class="author mt-2">Written on {{ formatDate(post.createdAt) }}</p>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      backgroundImage: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(/images/${this.post.image})`,
      },
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>
