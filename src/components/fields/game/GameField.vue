<template>
  <div id="gamefield">
    <label class="tcell" v-for="cell in cells" v-bind:key="cell" v-bind:style="{ 'background-color': cell.color }"></label>
  </div>
</template>

<script>
export default {
  name: 'GameField',
  computed: {
    cells() { return this.$store.getters['game_matrix/value']; }
  }
}
</script>

<style scoped>
div#gamefield {
  display: grid;
  grid-template-columns: repeat(10, 4vh);
  grid-template-rows: repeat(20, 4vh);
  grid-gap: 0px;
  justify-content: center;
  box-sizing: border-box;
  border: solid 5px #7a0000;
}

label.tcell {
  border: solid #2c2c2c 1px;
}
</style>
