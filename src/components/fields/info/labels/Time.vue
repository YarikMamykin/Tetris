<template>
  <label id="time_label">
    Time: {{ time }} 
  </label>
</template>

<script>
export default {
  name: 'Time',
  computed: {
    time() {
      return this.$store.getters['record_timer/value'];
    }
  }
}
</script>

<style scoped>
label#time_label {
  display: block;
  font-size: xx-large;
  padding-top: 3vh;
  font-weight: lighter;
  color: darkcyan;
  padding-bottom: 3vh;
}
</style>
