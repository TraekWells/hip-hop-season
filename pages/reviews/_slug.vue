<template>
  <div>
    <PostHeader :post="review" />
    <section class="post">
      <div class="container--narrow">
        <div class="thought">
          <h2 class="thought__title">The bottom line</h2>
          <p class="thought__content">
            Clocking in at just over 14 minutes in length,
            <em>Lyrics to Go, Vol. 1</em> gives the listeners advice on being
            introspective, appreciating what you have and being a positive
            influence for the people around you. This bite-sized piece of work
            showcases Kota’s creative artistry and unique sound.
          </p>
        </div>
        <nuxt-content :document="review"></nuxt-content>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const review = await $content(`reviews/${params.slug}`).fetch()

    return { review }
  },
}
</script>
