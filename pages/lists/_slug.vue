<template>
  <div>
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
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const list = await $content(`lists/${params.slug}`).fetch()
    const moreLists = await $content(`lists`)
      .where({ title: { $ne: list.title } })
      .limit(2)
      .fetch()

    return { list, moreLists }
  },
}
</script>
