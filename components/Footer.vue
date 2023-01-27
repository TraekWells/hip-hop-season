<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__nav">
        <div class="footer__group">
          <p class="footer__header">Pages</p>
          <p>
            <nuxt-link to="/reviews" class="footer__link">Reviews</nuxt-link>
          </p>
          <p><nuxt-link to="/blog" class="footer__link">Blog</nuxt-link></p>
          <p>
            <nuxt-link to="/about-me" class="footer__link">About Me</nuxt-link>
          </p>
          <p>
            <nuxt-link to="/contact" class="footer__link">Contact Me</nuxt-link>
          </p>
        </div>
        <div class="footer__group">
          <p class="footer__header">Connect</p>
          <p>
            <a
              href="https://twitter.com/ItsHipHopSeason"
              class="footer__link"
              target="_blank"
              >Twitter</a
            >
          </p>
          <p>
            <a
              href="https://www.instagram.com/itshiphopseason/"
              class="footer__link"
              target="_blank"
              >Instagram</a
            >
          </p>
        </div>
        <div class="footer__group">
          <p class="footer__header">Hip-Hop Season</p>
          <p>
            I believe that non-mainstream hip hop is majorly underrated and
            under-appreciated. Here at Hip-Hop Season, I review non-mainstream
            hip-hop albums and share my thoughts on hip-hop culture and music.
          </p>
        </div>
      </div>
      <p class="copyright">
        © {{ date }} Hip-Hop Season. All rights reserved. Designed and built by
        <a href="https://traekwells.com" target="_blank">Traek Wells</a>.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      date: null,
    }
  },
  mounted() {
    const year = new Date().getFullYear()
    this.date = year
  },
}
</script>
