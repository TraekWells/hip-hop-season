<template>
  <div>
    <PostHeader :post="review" />
    <section class="post">
      <div class="container--narrow">
        <BottomLine :bottom-line="review.bottomLine" />
        <nuxt-content :document="review"></nuxt-content>
        <FinalThoughts :final-thoughts="review.finalThoughts" />
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
