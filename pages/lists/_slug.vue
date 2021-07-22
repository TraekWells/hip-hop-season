<template>
  <main>
    <PostHeader :post="list" />
    <section class="post">
      <div class="container--narrow">
        <nuxt-content :document="list"></nuxt-content>
        <AboutMe />
      </div>
    </section>
    <section>
      <div class="container">
        <h2 class="mb-4">More Lists</h2>
        <div class="featured-container">
          <PreviewCardVertical
            v-for="list in moreLists"
            :key="list.slug"
            :card="list"
          />
        </div>
        <nuxt-link to="/lists" class="button button__primary mt-4"
          >See All Lists</nuxt-link
        >
      </div>
    </section>
  </main>
</template>

<script>
import getMetaData from '@/config/getMetaData'

export default {
  async asyncData({ $content, params }) {
    const list = await $content(`lists/${params.slug}`).fetch()
    const moreLists = await $content(`lists`)
      .where({ title: { $ne: list.title } })
      .limit(2)
      .fetch()

    return { list, moreLists }
  },
  head() {
    return {
      title: this.list.title,
      meta: [
        ...this.meta,
        {
          property: 'article:published_time',
          content: this.list.createdAt,
        },
        {
          property: 'article:modified_time',
          content: this.list.updatedAt,
        },
        { name: 'twitter:label1', content: 'Written by' },
        { name: 'twitter:data1', content: 'Traek Wells' },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://hiphopseason.com/lists/${this.$route.params.slug}`,
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'article',
        url: `https://hiphopseason.com/lists/${this.$route.params.slug}`,
        title: this.list.title,
        description: this.list.summary,
        image: `/images/${this.list.image}`,
      }

      return getMetaData(metaData)
    },
  },
}
</script>
