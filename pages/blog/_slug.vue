<template>
  <div>
    <PostHeader :post="blog" />
    <section class="post">
      <div class="container--narrow">
        <nuxt-content :document="blog"></nuxt-content>
        <AboutMe />
      </div>
    </section>
    <section>
      <div class="container">
        <h2 class="mb-4">More Blogs</h2>
        <div class="featured-container">
          <PreviewCardVertical
            v-for="blog in moreBlogs"
            :key="blog.slug"
            :card="blog"
          />
        </div>
        <nuxt-link to="/blog" class="button button__primary mt-4"
          >See All Posts</nuxt-link
        >
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blog = await $content(`blog/${params.slug}`).fetch()
    const moreBlogs = await $content(`blog`)
      .where({ title: { $ne: blog.title } })
      .limit(2)
      .fetch()

    return { blog, moreBlogs }
  },
}
</script>
