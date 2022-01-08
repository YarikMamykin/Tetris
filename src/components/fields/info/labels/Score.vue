<template>
  <label id="score_label">
    Score: {{ score }} 
  </label>
</template>

<script>
export default {
  name: 'Score',
  computed:{
    score() { return this.$store.getters['score/value']; }
  }
}
</script>

<style scoped>
label#score_label {
  display: block;
  font-size: xx-large;
  color: yellow;
  font-style: italic;
}
</style>
