<template>
  <main>
    <PageHeader
      title="Reviews"
      subtitle="My thoughts and opinions about different albums and mixtapes."
    />
    <section>
      <div class="container">
        <h2 class="mb-4">Latest Reviews</h2>
        <div class="featured-container">
          <PreviewCardVertical
            v-for="review in latestReviews"
            :key="review.slug"
            :card="review"
          />
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <h2 class="mb-4">All Reviews</h2>
        <div class="card-list">
          <PreviewCardHorizontal
            v-for="review in allReviews"
            :key="review.slug"
            :card="review"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import getMetaData from '@/config/getMetaData'

export default {
  async asyncData({ $content }) {
    const latestReviews = await $content('reviews')
      .where({ draft: false })
      .limit(2)
      .fetch()
    const allReviews = await $content('reviews')
      .where({ draft: false })
      .skip(2)
      .fetch()

    return { latestReviews, allReviews }
  },
  head() {
    return {
      title: 'Reviews',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://hiphopseason.com/reviews`,
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'page',
        url: `https://hiphopseason.com/reviews`,
        title: 'Reviews',
        description: 'Hip hop album reviews for underground projects.',
      }

      return getMetaData(metaData)
    },
  },
}
</script>
