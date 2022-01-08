<template>
  <div id="infofield">
    <Score/>
  </div>
</template>

<script>
import Score from './labels/Score.vue';
export default {
  name: 'InfoField',
    Score,
}
</script>

<style scoped>
div#infofield {
  background-color: black;
  display: block;
}
</style>
