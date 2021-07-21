<template>
  <div class="rating mb-4">
    <div class="rating__image">
      <nuxt-picture :src="review.image" :alt="review.title" width="365" />
    </div>
    <div class="rating__overall">
      <p class="rating__score">
        {{
          review.rating.lyrics +
          review.rating.production +
          review.rating.replayValue +
          review.rating.variety
        }}
        / 100
      </p>
      <p class="rating__name">Overall</p>
    </div>
    <div class="rating__category">
      <p class="rating__score">{{ review.rating.lyrics }}<span> / 35</span></p>
      <p class="rating__name">Lyrics</p>
    </div>
    <div class="rating__category">
      <p class="rating__score">
        {{ review.rating.production }}
        / 35
      </p>
      <p class="rating__name">Production</p>
    </div>
    <div class="rating__category">
      <p class="rating__score">
        {{ review.rating.replayValue }}
        / 15
      </p>
      <p class="rating__name">Replay Value</p>
    </div>
    <div class="rating__category">
      <p class="rating__score">
        {{ review.rating.variety }}
        / 15
      </p>
      <p class="rating__name">Variety</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
