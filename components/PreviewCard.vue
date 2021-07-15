<template>
  <article class="card card--vertical">
    <div class="card__image">
      <img :src="card.image" :alt="card.title" />
    </div>
    <div class="card__details">
      <a :href="card.path">
        <h3 class="section-header">{{ card.title }}</h3>
      </a>
      <p v-if="card.artist" class="section-subheader">{{ card.artist }}</p>
      <p class="date"><CalendarIcon />{{ card.date }} {{ card.createdAt }}</p>
      <p>{{ card.finalThoughts }}</p>
      <a :href="card.path">Read Review <ArrowRightIcon /></a>
    </div>
  </article>
</template>

<script>
import { ArrowRightIcon, CalendarIcon } from 'vue-feather-icons'
export default {
  components: { ArrowRightIcon, CalendarIcon },
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
