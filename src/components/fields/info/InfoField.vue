<template>
  <div id="infofield">
    <NextBlock/>
    <Score/>
    <Time/>
    <Level/>
    <Start/>
    <Stop/>
  </div>
</template>

<script>
import NextBlock from './next_block/NextBlock.vue';
import Score from './labels/Score.vue';
import Time from './labels/Time.vue';
import Level from './buttons/Level.vue';
import Start from './buttons/Start.vue';
import Stop from './buttons/Stop.vue';

export default {
  name: 'InfoField',
  components: {
    NextBlock,
    Score,
    Time,
    Level,
    Start,
    Stop
  }
}
</script>

<style scoped>
div#infofield {
  background-color: black;
  display: block;
}
</style>
