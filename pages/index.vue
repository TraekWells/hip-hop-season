<template>
  <div>
    <header class="header header--home">
      <div class="container">
        <h1 class="mb-4">Welcome to Hip Hop Season</h1>
        <p class="lead">
          Your home for <span class="underline">non-mainstream</span> Hip Hop
          album reviews and blogs about all things related to Hip Hop music and
          the culture.
        </p>
        <div class="button-group">
          <a href="#" class="button button__primary mr-4">Read the Reviews</a>
          <a href="#" class="color-white">Read the Blog <ArrowRightIcon /></a>
        </div>
      </div>
    </header>
    <section>
      <div class="container">
        <h2 class="mb-4">Featured Reviews</h2>
        <div class="featured-container">
          <PreviewCard
            v-for="review in reviews"
            :key="review.slug"
            :card="review"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ArrowRightIcon } from 'vue-feather-icons'
export default {
  components: { ArrowRightIcon },
  async asyncData({ $content }) {
    const reviews = await $content('reviews').where({ featured: true }).fetch()

    return { reviews }
  },
}
</script>
