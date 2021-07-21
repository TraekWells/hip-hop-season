<template>
  <div>
    <PostHeader :post="review" />
    <section class="post">
      <div class="container--narrow">
        <BottomLine :bottom-line="review.bottomLine" />
        <nuxt-content :document="review"></nuxt-content>
        <FinalThoughts :final-thoughts="review.finalThoughts" />
        <Rating :review="review" />
        <ReachOut />
        <AboutMe />
      </div>
    </section>
    <section>
      <div class="container">
        <h2 class="mb-4">More Reviews</h2>
        <div class="featured-container">
          <PreviewCardVertical
            v-for="review in moreReviews"
            :key="review.slug"
            :card="review"
          />
        </div>
        <nuxt-link to="/reviews" class="button button__primary mt-4"
          >See All Reviews</nuxt-link
        >
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const review = await $content(`reviews/${params.slug}`).fetch()
    const moreReviews = await $content(`reviews`)
      .where({ title: { $ne: review.title } })
      .limit(2)
      .fetch()

    return { review, moreReviews }
  },
}
</script>
