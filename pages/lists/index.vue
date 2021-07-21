<template>
  <div>
    <PageHeader
      title="Lists"
      subtitle="Everybody has their own hip hop music lists. Here are a few of mine."
    />
    <section>
      <div class="container">
        <h2 class="mb-4">Latest Lists</h2>
        <div class="featured-container">
          <PreviewCardVertical
            v-for="list in latestLists"
            :key="list.slug"
            :card="list"
          />
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <h2 class="mb-4">All Lists</h2>
        <div class="card-list">
          <PreviewCardHorizontal
            v-for="list in allLists"
            :key="list.slug"
            :card="list"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import getMetaData from '@/config/getMetaData'

export default {
  async asyncData({ $content }) {
    const latestLists = await $content('lists').limit(2).fetch()
    const allLists = await $content('lists').skip(2).fetch()

    return { latestLists, allLists }
  },
  head() {
    return {
      title: 'Lists',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://hiphopseason.com/lists`,
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'page',
        url: `https://hiphopseason.com/lists`,
        title: 'Lists',
        description:
          'Everybody has their own hip hop music lists. Here are a few of mine.',
      }

      return getMetaData(metaData)
    },
  },
}
</script>
