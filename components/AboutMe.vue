<template>
  <div class="about-the-author">
    <div class="about-the-author__image">
      <img src="/images/about-the-author-image.jpg" />
    </div>
    <div class="about-the-author__bio">
      <h4>About the author</h4>
      <p>
        I'm not music expert but I know what good hip hop sounds like. I'm just
        a dude who loves music and feels that non-mainstream hip hop is
        under-represented and under-appreciated. All thoughts and opinions are
        my own but I'd love to discuss.
      </p>
      <a
        class="about-the-author__link"
        href="https://twitter.com/ItsHipHopSeason"
        target="_blank"
        ><TwitterIcon
      /></a>
      <a
        class="about-the-author__link"
        href="https://www.instagram.com/itshiphopseason/"
        target="_blank"
        ><InstagramIcon
      /></a>
    </div>
  </div>
</template>

<script>
import { InstagramIcon, TwitterIcon } from 'vue-feather-icons'
export default {
  components: { InstagramIcon, TwitterIcon },
}
</script>

<style></style>
