<template>
  <main>
    <PageHeader title="About Me" />
    <section class="about-section">
      <div class="container">
        <div class="about-section__wrapper">
          <div class="about-section__profile">
            <img
              src="images/about-the-author-image.jpg"
              alt="An image of the author, Traek Wells"
            />
            <div class="about-section__social">
              <p>Follow me</p>
              <a
                class="about-section__social-link"
                href="https://twitter.com/ItsHipHopSeason"
                target="_blank"
                ><TwitterIcon
              /></a>
              <a
                class="about-section__social-link"
                href="https://www.instagram.com/itshiphopseason/"
                target="_blank"
                ><InstagramIcon
              /></a>
            </div>
          </div>
          <div class="about-section__content">
            <p>
              Hip hop has been a part of my life since I started listening to
              music, specifically non-mainstream (non-popular) hip hop. I
              created this blog out of my love for rap music and I hope to bring
              a little more light to the non-mainstream scene.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { InstagramIcon, TwitterIcon } from 'vue-feather-icons'
import getMetaData from '@/config/getMetaData'

export default {
  components: { InstagramIcon, TwitterIcon },
  head() {
    return {
      title: 'About Me',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://hiphopseason.com/about-me`,
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'page',
        url: `https://hiphopseason.com/about-me`,
        title: 'About Me',
        description:
          'Hip hop has been a part of my life since I started listening to music, specifically non-mainstream (non-popular) hip hop. I created this blog out of my love',
      }

      return getMetaData(metaData)
    },
  },
}
</script>
