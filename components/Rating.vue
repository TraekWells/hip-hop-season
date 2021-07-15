<template>
  <div class="rating mb-4">
    <div class="rating__image">
      <img src="#" alt="" />
    </div>
    <div class="rating__overall">
      <p class="rating__score">
        {{ lyrics + production + replayValue + variety }} / 100
      </p>
      <p class="rating__name">Overall</p>
    </div>
    <div class="rating__category">
      <p class="rating__score">{{ lyrics }}<span> / 35</span></p>
      <p class="rating__name">Lyrics</p>
    </div>
    <div class="rating__category">
      <p class="rating__score">
        {{ production }}
        / 35
      </p>
      <p class="rating__name">Production</p>
    </div>
    <div class="rating__category">
      <p class="rating__score">
        {{ replayValue }}
        / 15
      </p>
      <p class="rating__name">Replay Value</p>
    </div>
    <div class="rating__category">
      <p class="rating__score">
        {{ variety }}
        / 15
      </p>
      <p class="rating__name">Variety</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lyrics: {
      type: Number,
      required: true,
    },
    production: {
      type: Number,
      required: true,
    },
    replayValue: {
      type: Number,
      required: true,
    },
    variety: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style></style>
