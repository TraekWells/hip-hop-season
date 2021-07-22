<template>
  <main>
    <PageHeader
      title="Contact Me"
      subtitle="Everybody has their own hip hop music lists. Here are a few of mine."
    />
    <div class="contact-section">
      <div class="container">
        <p>
          The best way to get a hold of me is through social media. Hit me up on
          <a href="https://twitter.com/ItsHipHopSeason" target="_blank"
            >Twitter</a
          >
          or
          <a href="https://www.instagram.com/itshiphopseason/" target="_blank"
            >Instagram</a
          >
          if you have a project you'd like me to review or just want to say
          what's up.
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import getMetaData from '@/config/getMetaData'

export default {
  head() {
    return {
      title: 'Contact',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://hiphopseason.com/contact`,
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'page',
        url: `https://hiphopseason.com/contact`,
        title: 'Contact Me',
        description:
          "The best way to get a hold of me is through social media. Hit me up on Twitter or Instagram if you have a project you'd like me to review or just want to say",
      }

      return getMetaData(metaData)
    },
  },
}
</script>

<style></style>
