<template>
  <div id="nextblock_matrix">
    <label class="ntcell" v-for="cell in cells" v-bind:key="cell" v-bind:style="{ 'background-color': cell.color }"></label>
  </div>
</template>

<script>
export default {
  name: 'NextBlockMatrix',
  computed: {
    cells() { return this.$store.getters['next_block_matrix/value']; }
  }
}
</script>

<style scoped>
div#nextblock_matrix {
  display: grid;
  grid-template-columns: repeat(4, 4vh);
  grid-template-rows: repeat(4, 4vh);
  grid-gap: 0px;
  justify-content: center;
  box-sizing: border-box;
  border: solid 5px indigo;
}
label.ntcell {
  border: solid black 1px;
}
</style>
