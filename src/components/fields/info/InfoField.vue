<template>
  <div id="infofield">
    <NextBlock/>
    <Score/>
    <Time/>
    <Start/>
  </div>
</template>

<script>
import NextBlock from './next_block/NextBlock.vue';
import Score from './labels/Score.vue';
import Time from './labels/Time.vue';
import Start from './buttons/Start.vue';
export default {
  name: 'InfoField',
  components: {
    NextBlock,
    Score,
    Time,
    Start,
  }
}
</script>

<style scoped>
div#infofield {
  background-color: black;
  display: block;
}
</style>
