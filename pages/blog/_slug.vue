<template>
  <main>
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
  </main>
</template>

<script>
import getMetaData from '@/config/getMetaData'

export default {
  async asyncData({ $content, params }) {
    const blog = await $content(`blog/${params.slug}`).fetch()
    const moreBlogs = await $content(`blog`)
      .where({ draft: false })
      .where({ title: { $ne: blog.title } })
      .limit(2)
      .fetch()

    return { blog, moreBlogs }
  },
  head() {
    return {
      title: this.blog.title,
      meta: [
        ...this.meta,
        {
          property: 'article:published_time',
          content: this.blog.createdAt,
        },
        {
          property: 'article:modified_time',
          content: this.blog.updatedAt,
        },
        { name: 'twitter:label1', content: 'Written by' },
        { name: 'twitter:data1', content: 'Traek Wells' },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://hiphopseason.com/blog/${this.$route.params.slug}`,
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'article',
        url: `https://hiphopseason.com/blog/${this.$route.params.slug}`,
        title: this.blog.title,
        description: this.blog.summary,
        image: `/images/${this.blog.image}`,
      }

      return getMetaData(metaData)
    },
  },
}
</script>
