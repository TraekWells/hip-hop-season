<template>
  <div>
    <PostHeader :post="review" />
    <section class="post">
      <div class="container--narrow">
        <BottomLine :bottom-line="review.bottomLine" />
        <nuxt-content :document="review"></nuxt-content>
        <FinalThoughts :final-thoughts="review.finalThoughts" />
        <Rating
          :lyrics="review.rating.lyrics"
          :production="review.rating.production"
          :replay-value="review.rating.replayValue"
          :variety="review.rating.variety"
        />
        <p class="text-centered">
          How would you rate this project? Have an album or mixtape you'd like
          me to review? Let me know on
          <a href="https://twitter.com/ItsHipHopSeason" target="_blank"
            >Twitter</a
          >
          or
          <a href="https://www.instagram.com/itshiphopseason/" target="_blank"
            >Instagram</a
          >
          and I'll add it to my list.
        </p>
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
        <a href="#" class="button button__primary mt-4">See All Reviews</a>
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
