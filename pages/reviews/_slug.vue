<template>
  <main>
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
  </main>
</template>

<script>
import getMetaData from '@/config/getMetaData'

export default {
  async asyncData({ $content, params }) {
    const review = await $content(`reviews/${params.slug}`).fetch()
    const moreReviews = await $content(`reviews`)
      .where({ title: { $ne: review.title } })
      .limit(2)
      .fetch()

    return { review, moreReviews }
  },
  head() {
    return {
      title: this.review.title,
      meta: [
        ...this.meta,
        {
          property: 'article:published_time',
          content: this.review.createdAt,
        },
        {
          property: 'article:modified_time',
          content: this.review.updatedAt,
        },
        { name: 'twitter:label1', content: 'Written by' },
        { name: 'twitter:data1', content: 'Traek Wells' },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://hiphopseason.com/reviews/${this.$route.params.slug}`,
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'article',
        url: `https://hiphopseason.com/reviews/${this.$route.params.slug}`,
        title: this.review.title,
        description: this.review.bottomLine,
        image: this.review.image,
      }

      return getMetaData(metaData)
    },
  },
}
</script>
