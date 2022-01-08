<template>
  <div id="infofield">
    <Score/>
    <Time/>
  </div>
</template>

<script>
import Score from './labels/Score.vue';
import Time from './labels/Time.vue';
export default {
  name: 'InfoField',
  components: {
    Score,
    Time,
  }
}
</script>

<style scoped>
div#infofield {
  background-color: black;
  display: block;
}
</style>
