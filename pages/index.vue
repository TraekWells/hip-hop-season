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
          <PreviewCardVertical
            v-for="review in featuredReviews"
            :key="review.slug"
            :card="review"
          />
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <h2 class="mb-4">Latest Reviews</h2>
        <div class="card-list">
          <PreviewCardHorizontal
            v-for="review in allReviews"
            :key="review.slug"
            :card="review"
          />
        </div>
        <a href="#" class="button button__primary">See more reviews</a>
      </div>
    </section>
    <section>
      <div class="container">
        <h2 class="mb-4">Featured Posts</h2>
        <div class="featured-container">
          <PreviewCardVertical
            v-for="blog in featuredBlogs"
            :key="blog.slug"
            :card="blog"
          />
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <h2 class="mb-4">Latest Posts</h2>
        <div class="card-list">
          <PreviewCardHorizontal
            v-for="blog in allBlogs"
            :key="blog.slug"
            :card="blog"
          />
        </div>
        <a href="#" class="button button__primary">See more reviews</a>
      </div>
    </section>
  </div>
</template>

<script>
import { ArrowRightIcon } from 'vue-feather-icons'
export default {
  components: { ArrowRightIcon },
  async asyncData({ $content }) {
    const featuredReviews = await $content('reviews')
      .where({ featured: true })
      .fetch()
    const allReviews = await $content('reviews')
      .where({ featured: false })
      .fetch()
    const featuredBlogs = await $content('blog')
      .where({ featured: true })
      .fetch()
    const allBlogs = await $content('blog').where({ featured: false }).fetch()

    return { featuredReviews, allReviews, featuredBlogs, allBlogs }
  },
}
</script>
