<template>
  <div>
    <PageHeader
      title="Blog"
      subtitle="Thoughts about random things related to Hip Hop."
    />
    <section>
      <div class="container">
        <h2 class="mb-4">Latest Posts</h2>
        <div class="featured-container">
          <PreviewCardVertical
            v-for="blog in latestBlogs"
            :key="blog.slug"
            :card="blog"
          />
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <h2 class="mb-4">All Posts</h2>
        <div class="card-list">
          <PreviewCardHorizontal
            v-for="blog in allBlogs"
            :key="blog.slug"
            :card="blog"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const latestBlogs = await $content('blog').limit(2).fetch()
    const allBlogs = await $content('blog').skip(2).fetch()

    return { latestBlogs, allBlogs }
  },
}
</script>
