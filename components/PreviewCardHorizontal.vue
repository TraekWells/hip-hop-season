<template>
  <article class="card card--horizontal">
    <div class="card__image">
      <img :src="card.image" :alt="card.title" />
    </div>
    <div class="card__details">
      <a :href="card.path">
        <h3 class="section-header">{{ card.title }}</h3>
      </a>
      <p v-if="card.artist" class="section-subheader">{{ card.artist }}</p>
      <p class="date"><CalendarIcon />{{ formatDate(card.createdAt) }}</p>
      <p>{{ getSummary() }}</p>
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
  data() {
    return {
      summary: null,
    }
  },
  methods: {
    getSummary() {
      if (this.card.finalThoughts) {
        return this.$truncate(this.card.finalThoughts)
      } else {
        return this.$truncate(this.card.summary)
      }
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>
