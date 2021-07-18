<template>
  <header class="header">
    <div class="container--narrow">
      <h1>
        <span v-if="post.artist" class="lead">{{ post.artist }}</span>
        {{ post.title }}
      </h1>
      <p class="author mt-2">
        Written by Traek Wells on {{ formatDate(post.createdAt) }}
      </p>
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
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style></style>
