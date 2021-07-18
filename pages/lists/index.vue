<template>
  <div>
    <PageHeader
      title="Lists"
      subtitle="Everybody has their own hip hop music lists. Here are a few of mine. "
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
export default {
  async asyncData({ $content }) {
    const latestLists = await $content('lists').limit(2).fetch()
    const allLists = await $content('lists').skip(2).fetch()

    return { latestLists, allLists }
  },
}
</script>
