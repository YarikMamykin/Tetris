<template>
  <div id="next_block_component">
    <label id="next_block_label">NEXT: </label>
    <NextBlockMatrix/>
  </div>
</template>

<script>
import NextBlockMatrix from './NextBlockMatrix.vue';

export default {
  name: 'NextBlock',
  components: {
    NextBlockMatrix,
  }
}
</script>

<style scoped>
div#next_block_component {
  display: flex;
  flex-flow: row;
  align-items: center;
  padding-bottom: 10vh;
}

label#next_block_label {
  font-size: xx-large;
  color: chocolate;
  padding-right: 2vw;
}
</style>
